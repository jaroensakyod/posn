/**
 * ล้าง XP/progress ของ users ทุกคนใน Firestore
 * รัน: node reset_all_xp.js
 */

const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

initializeApp({
  credential: cert(require('./pons-1e627-firebase-adminsdk-fbsvc-60cabddc6c.json')),
})

const db = getFirestore()

const DEFAULT_STATS = {
  xp: 0,
  level: 1,
  streak: 0,
  lastStudyDate: '',
  totalQuizzes: 0,
  totalLessonsRead: 0,
}

async function main() {
  const usersSnap = await db.collection('users').get()
  console.log(`พบ ${usersSnap.size} users`)

  let reset = 0
  for (const userDoc of usersSnap.docs) {
    const uid = userDoc.id
    const progressRef = db.doc(`users/${uid}/progress/main`)
    const snap = await progressRef.get()
    if (!snap.exists()) continue

    const data = snap.data()
    await progressRef.set({
      ...data,
      userStats: DEFAULT_STATS,
      quizResults: [],
    })
    console.log(`reset: ${uid}`)
    reset++
  }

  console.log(`\nเสร็จ: reset ${reset}/${usersSnap.size} users`)
}

main().catch(console.error)
