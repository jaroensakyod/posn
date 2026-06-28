/**
 * อัพโหลดรูปทั้งหมดจาก public/exam-images/ ขึ้น Firebase Storage
 * แล้วอัปเดต imageUrl ใน crop_mapping.json
 *
 * รัน: node upload_images_to_storage.js
 */

const { initializeApp, cert } = require('firebase-admin/app')
const { getStorage } = require('firebase-admin/storage')
const fs = require('fs')
const path = require('path')

const SERVICE_ACCOUNT = path.join(__dirname, 'pons-1e627-firebase-adminsdk-fbsvc-60cabddc6c.json')
const IMAGES_DIR = path.join(__dirname, 'public/exam-images')
const MAPPING_FILE = path.join(__dirname, 'crop_mapping.json')
const BUCKET_NAME = 'pons-1e627.appspot.com'

initializeApp({
  credential: cert(require(SERVICE_ACCOUNT)),
  storageBucket: BUCKET_NAME,
})

const bucket = getStorage().bucket()

async function uploadFile(localPath, destName) {
  await bucket.upload(localPath, {
    destination: `exam-images/${destName}`,
    metadata: { contentType: 'image/png', cacheControl: 'public, max-age=31536000' },
  })
  const file = bucket.file(`exam-images/${destName}`)
  await file.makePublic()
  return `https://storage.googleapis.com/${BUCKET_NAME}/exam-images/${destName}`
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.png'))
  console.log(`พบ ${files.length} ไฟล์`)

  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf-8'))
  let uploaded = 0
  let skipped = 0

  for (const filename of files) {
    const localPath = path.join(IMAGES_DIR, filename)
    const destName = filename

    // check if already uploaded (URL already starts with storage.googleapis.com)
    const existingKey = Object.keys(mapping).find(k => {
      const v = mapping[k]
      return v && path.basename(v) === filename
    })
    if (existingKey && mapping[existingKey].startsWith('https://storage.googleapis.com')) {
      skipped++
      continue
    }

    try {
      process.stdout.write(`อัพโหลด ${filename} ... `)
      const url = await uploadFile(localPath, destName)

      // update mapping
      if (existingKey) {
        mapping[existingKey] = url
      }
      console.log('✓')
      uploaded++
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`)
    }
  }

  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2), 'utf-8')
  console.log(`\nเสร็จ: อัพโหลด ${uploaded}, ข้าม ${skipped} (อัพโหลดแล้ว)`)
  console.log('crop_mapping.json อัปเดตแล้ว')
  console.log('\nขั้นต่อไป: รัน python apply_crop_mapping.py เพื่ออัปเดต URL ใน .ts files')
}

main().catch(console.error)
