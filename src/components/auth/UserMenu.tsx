import { useState, useRef, useEffect } from 'react'
import { LogOut, ChevronDown, Star } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useProgressStore } from '../../store/progressStore'

interface Props {
  onLoginClick: () => void
}

export default function UserMenu({ onLoginClick }: Props) {
  const { user, logout } = useAuth()
  const userStats = useProgressStore((s) => s.userStats)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (!user) {
    return (
      <button
        onClick={onLoginClick}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        เข้าสู่ระบบ
      </button>
    )
  }

  const displayName = user.displayName ?? user.email ?? 'ผู้ใช้'
  const photoURL = user.photoURL

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
      >
        {photoURL ? (
          <img src={photoURL} alt={displayName} className="w-7 h-7 rounded-full object-cover" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {displayName[0].toUpperCase()}
          </div>
        )}
        <span className="text-sm font-medium text-slate-700 hidden sm:block max-w-[120px] truncate">
          {displayName.split(' ')[0]}
        </span>
        <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
          {/* Profile section */}
          <div className="flex items-center gap-3 px-4 py-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-slate-100">
            {photoURL ? (
              <img src={photoURL} alt={displayName} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {displayName[0].toUpperCase()}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 text-sm truncate">{displayName}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
            <Stat label="Level" value={userStats.level} />
            <Stat label="XP" value={userStats.xp} />
            <Stat label="Streak" value={`${userStats.streak}🔥`} />
          </div>

          {/* Actions */}
          <div className="p-2">
            <button
              onClick={async () => { setOpen(false); await logout() }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
            >
              <LogOut size={15} />
              ออกจากระบบ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col items-center py-2.5">
      <span className="text-base font-bold text-slate-800">{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  )
}
