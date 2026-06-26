import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { useProgressStore } from '../store/progressStore'
import type { TopicProgress, UserStats, QuizResultEntry } from '../store/progressStore'

interface UserProgressData {
  topicProgress: Record<string, TopicProgress>
  userStats: UserStats
  quizResults: QuizResultEntry[]
}

export async function syncProgressToFirestore(uid: string, data: UserProgressData) {
  await setDoc(doc(db, 'users', uid, 'progress', 'main'), data, { merge: true })
}

export async function loadProgressFromFirestore(uid: string) {
  const snap = await getDoc(doc(db, 'users', uid, 'progress', 'main'))
  if (!snap.exists()) return
  const data = snap.data() as UserProgressData
  const store = useProgressStore.getState()
  const local = {
    topicProgress: store.topicProgress,
    userStats: store.userStats,
  }
  // Merge: take higher XP between local and cloud
  const merged: UserProgressData = {
    topicProgress: { ...data.topicProgress, ...local.topicProgress },
    userStats: local.userStats.xp >= data.userStats.xp ? local.userStats : data.userStats,
    quizResults: mergeQuizResults(data.quizResults ?? [], store.quizResults),
  }
  useProgressStore.setState({
    topicProgress: merged.topicProgress,
    userStats: merged.userStats,
    quizResults: merged.quizResults,
  })
}

function mergeQuizResults(cloud: QuizResultEntry[], local: QuizResultEntry[]): QuizResultEntry[] {
  const seen = new Set<string>()
  const all = [...local, ...cloud].filter((r) => {
    const key = `${r.topicId}-${r.date}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  return all.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 100)
}

// Call this after every quiz/lesson to keep cloud in sync
export async function pushProgress(uid: string) {
  const { topicProgress, userStats, quizResults } = useProgressStore.getState()
  await syncProgressToFirestore(uid, { topicProgress, userStats, quizResults })
}
