export interface LevelInfo {
  level: number
  title: string
  emoji: string
  minXP: number
  color: string
  bgColor: string
  textColor: string
}

export const LEVELS: LevelInfo[] = [
  { level: 1, title: 'นักเรียนใหม่',      emoji: '📚', minXP: 0,    color: 'from-slate-400 to-slate-500',   bgColor: 'bg-slate-100',   textColor: 'text-slate-600' },
  { level: 2, title: 'ผู้ฝึกหัด',          emoji: '✏️', minXP: 50,   color: 'from-blue-400 to-blue-600',     bgColor: 'bg-blue-100',    textColor: 'text-blue-700' },
  { level: 3, title: 'นักเคมี',            emoji: '🧪', minXP: 150,  color: 'from-cyan-400 to-cyan-600',     bgColor: 'bg-cyan-100',    textColor: 'text-cyan-700' },
  { level: 4, title: 'นักเคมีขั้นสูง',    emoji: '⚗️', minXP: 350,  color: 'from-violet-400 to-violet-600', bgColor: 'bg-violet-100',  textColor: 'text-violet-700' },
  { level: 5, title: 'ผู้เชี่ยวชาญ',      emoji: '🔬', minXP: 700,  color: 'from-amber-400 to-orange-500',  bgColor: 'bg-amber-100',   textColor: 'text-amber-700' },
  { level: 6, title: 'มาสเตอร์เคมี',      emoji: '🏆', minXP: 1300, color: 'from-orange-500 to-red-500',    bgColor: 'bg-orange-100',  textColor: 'text-orange-700' },
  { level: 7, title: 'นักเคมีระดับ สอวน', emoji: '⭐', minXP: 2200, color: 'from-yellow-400 to-amber-500',  bgColor: 'bg-yellow-100',  textColor: 'text-yellow-700' },
]

export function getLevelInfo(xp: number): {
  current: LevelInfo
  next: LevelInfo | null
  xpInLevel: number
  xpToNext: number | null
  progressPct: number
} {
  let current = LEVELS[0]
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      current = LEVELS[i]
      break
    }
  }
  const next = LEVELS.find((l) => l.level === current.level + 1) ?? null
  const xpInLevel = xp - current.minXP
  const xpToNext = next ? next.minXP - current.minXP : null
  const progressPct = next ? Math.min(100, Math.round((xpInLevel / xpToNext!) * 100)) : 100

  return { current, next, xpInLevel, xpToNext, progressPct }
}

export const XP_REWARDS = {
  LESSON_READ: 15,
  QUIZ_PERFECT: 50,
  QUIZ_90: 40,
  QUIZ_75: 30,
  QUIZ_60: 20,
  QUIZ_40: 12,
  QUIZ_MIN: 5,
  STREAK_BONUS: 5,
}
