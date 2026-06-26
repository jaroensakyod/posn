import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBMvKJ7WHsmnxSpIBP_K8KudIO3IK0uZAM",
  authDomain: "pons-1e627.firebaseapp.com",
  projectId: "pons-1e627",
  storageBucket: "pons-1e627.firebasestorage.app",
  messagingSenderId: "714537624987",
  appId: "1:714537624987:web:c8d0b51b6fde7e412dad3e",
  measurementId: "G-NCZBXL6KZ5"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
