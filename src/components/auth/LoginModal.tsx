import { useState } from 'react'
import { X, Loader2 } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface Props {
  onClose: () => void
}

export default function LoginModal({ onClose }: Props) {
  const { loginWithGoogle, loginWithFacebook } = useAuth()
  const [loading, setLoading] = useState<'google' | 'facebook' | null>(null)
  const [error, setError] = useState('')

  async function handleLogin(provider: 'google' | 'facebook') {
    setLoading(provider)
    setError('')
    try {
      if (provider === 'google') await loginWithGoogle()
      else await loginWithFacebook()
      onClose()
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'เข้าสู่ระบบไม่สำเร็จ'
      setError(msg.includes('popup-closed') ? 'ปิด popup ก่อน กรุณาลองใหม่' : 'เกิดข้อผิดพลาด กรุณาลองใหม่')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 pt-8 pb-10 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X size={16} />
          </button>
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl">⚗️</span>
          </div>
          <h2 className="text-xl font-bold text-white">เข้าสู่ระบบ</h2>
          <p className="text-blue-100 text-sm mt-1">บันทึก progress ข้ามอุปกรณ์ได้ทันที</p>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 -mt-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-3">

            {/* Google */}
            <button
              onClick={() => handleLogin('google')}
              disabled={loading !== null}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'google' ? (
                <Loader2 size={20} className="animate-spin text-blue-600 shrink-0" />
              ) : (
                <GoogleIcon />
              )}
              <span>เข้าสู่ระบบด้วย Google</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleLogin('facebook')}
              disabled={loading !== null}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:bg-[#f0f2ff] transition-all font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'facebook' ? (
                <Loader2 size={20} className="animate-spin text-[#1877f2] shrink-0" />
              ) : (
                <FacebookIcon />
              )}
              <span>เข้าสู่ระบบด้วย Facebook</span>
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center pt-1">{error}</p>
            )}
          </div>

          <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
            การเข้าสู่ระบบถือว่าคุณยอมรับ<br />นโยบายความเป็นส่วนตัวของเรา
          </p>
        </div>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
