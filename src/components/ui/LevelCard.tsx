import { Flame } from 'lucide-react'
import { UserStats } from '../../store/progressStore'
import { getLevelInfo } from '../../utils/levels'

interface LevelCardProps {
  userStats: UserStats
  compact?: boolean
}

export default function LevelCard({ userStats, compact = false }: LevelCardProps) {
  const { current, next, xpInLevel, xpToNext, progressPct } = getLevelInfo(userStats.xp)

  if (compact) {
    return (
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${current.bgColor}`}>
        <span className="text-xl">{current.emoji}</span>
        <div className="min-w-0">
          <div className={`text-xs font-bold ${current.textColor}`}>Lv.{current.level} {current.title}</div>
          <div className="text-xs text-slate-400">{userStats.xp} XP</div>
        </div>
        {userStats.streak > 1 && (
          <div className="flex items-center gap-0.5 text-orange-500 ml-auto">
            <Flame size={14} />
            <span className="text-xs font-bold">{userStats.streak}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-5 bg-gradient-to-r ${current.color} text-white shadow-md`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-3xl mb-1">{current.emoji}</div>
          <div className="text-xl font-bold">{current.title}</div>
          <div className="text-white/70 text-sm">ระดับ {current.level}</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">{userStats.xp}</div>
          <div className="text-white/70 text-sm">XP รวม</div>
        </div>
      </div>

      {/* XP Progress bar */}
      {next ? (
        <div>
          <div className="flex justify-between text-xs text-white/80 mb-1.5">
            <span>{xpInLevel} / {xpToNext} XP</span>
            <span>ถัดไป: {next.emoji} {next.title}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 bg-white rounded-full transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="text-xs text-white/60 mt-1">
            อีก {(xpToNext ?? 0) - xpInLevel} XP จะ level up!
          </div>
        </div>
      ) : (
        <div className="text-center text-white/80 text-sm py-1">
          🎉 ถึงระดับสูงสุดแล้ว!
        </div>
      )}

      {/* Streak */}
      {userStats.streak > 0 && (
        <div className="flex items-center gap-1.5 mt-3 bg-white/10 rounded-lg px-3 py-2 w-fit">
          <Flame size={16} className="text-orange-300" />
          <span className="text-sm font-semibold text-white">
            {userStats.streak} วันติดต่อกัน
          </span>
        </div>
      )}

      {/* Stats row */}
      <div className="flex gap-4 mt-3 text-white/80 text-xs">
        <span>📝 {userStats.totalLessonsRead} บทเรียน</span>
        <span>✏️ {userStats.totalQuizzes} แบบฝึกหัด</span>
      </div>
    </div>
  )
}
