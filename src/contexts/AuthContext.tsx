import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../lib/firebase'
import { syncProgressToFirestore, loadProgressFromFirestore } from '../lib/firestore'
import { useProgressStore } from '../store/progressStore'

interface AuthContextValue {
  user: User | null
  loading: boolean
  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        await loadProgressFromFirestore(firebaseUser.uid)
      }
      setLoading(false)
    })
    return unsub
  }, [])

  async function loginWithGoogle() {
    await signInWithPopup(auth, googleProvider)
  }

  async function loginWithFacebook() {
    await signInWithPopup(auth, facebookProvider)
  }

  async function logout() {
    const { topicProgress, userStats, quizResults } = useProgressStore.getState()
    if (user) {
      await syncProgressToFirestore(user.uid, { topicProgress, userStats, quizResults })
    }
    await firebaseSignOut(auth)
    useProgressStore.getState().resetProgress()
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithFacebook, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
