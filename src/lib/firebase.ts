import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: วาง Firebase config ของคุณที่นี่
// ได้จาก Firebase Console → Project Settings → Your apps → Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
