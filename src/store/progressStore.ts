import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { auth } from '../lib/firebase'
import { pushProgress } from '../lib/firestore'

export interface QuizAttempt {
  score: number
  total: number
  date: string
}

export interface TopicProgress {
  lessonRead: boolean
  attempts: QuizAttempt[]
  bestScore: number   // 0-100
  lastScore: number   // 0-100
  lastStudied?: string
  // legacy compat
  completed?: boolean
}

export interface UserStats {
  xp: number
  level: number
  streak: number
  lastStudyDate: string
  totalQuizzes: number
  totalLessonsRead: number
}

function calcXP(score: number, total: number): number {
  const pct = total > 0 ? (score / total) * 100 : 0
  if (pct === 100) return 50
  if (pct >= 90) return 40
  if (pct >= 75) return 30
  if (pct >= 60) return 20
  if (pct >= 40) return 12
  return 5
}

function calcLevel(xp: number): number {
  if (xp >= 2200) return 7
  if (xp >= 1300) return 6
  if (xp >= 700)  return 5
  if (xp >= 350)  return 4
  if (xp >= 150)  return 3
  if (xp >= 50)   return 2
  return 1
}

function updateStreak(lastStudyDate: string, currentStreak: number): { streak: number; lastStudyDate: string } {
  const todayStr = new Date().toDateString()
  const yesterdayStr = new Date(Date.now() - 86400000).toDateString()
  const lastStr = lastStudyDate ? new Date(lastStudyDate).toDateString() : ''

  if (lastStr === todayStr) return { streak: currentStreak, lastStudyDate }
  if (lastStr === yesterdayStr) return { streak: currentStreak + 1, lastStudyDate: new Date().toISOString() }
  return { streak: 1, lastStudyDate: new Date().toISOString() }
}

export interface QuizResultEntry extends QuizAttempt {
  topicId: string
}

interface ProgressState {
  topicProgress: Record<string, TopicProgress>
  userStats: UserStats
  quizResults: QuizResultEntry[]
  completedLessons: string[]

  markLessonCompleted: (topicId: string) => number  // returns XP gained
  recordQuizAttempt: (topicId: string, score: number, total: number) => number  // returns XP
  // legacy compat alias
  saveQuizResult: (result: { topicId: string; score: number; total: number; date: string }) => void
  getTopicProgress: (topicId: string) => TopicProgress
  getTotalProgress: (subjectId: string, topicIds: string[]) => number
  resetProgress: () => void
}

const DEFAULT_USER_STATS: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  lastStudyDate: '',
  totalQuizzes: 0,
  totalLessonsRead: 0,
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      topicProgress: {},
      userStats: DEFAULT_USER_STATS,
      quizResults: [] as QuizResultEntry[],
      completedLessons: [] as string[],

      markLessonCompleted: (topicId) => {
        const state = get()
        const existing = state.topicProgress[topicId]
        if (existing?.lessonRead) return 0  // already read, no XP

        const XP_LESSON = 15
        const { streak, lastStudyDate } = updateStreak(
          state.userStats.lastStudyDate,
          state.userStats.streak
        )
        const newXP = state.userStats.xp + XP_LESSON
        const streakBonus = streak > 1 ? 5 : 0

        set((s) => ({
          topicProgress: {
            ...s.topicProgress,
            [topicId]: {
              ...s.topicProgress[topicId],
              lessonRead: true,
              completed: true,
              lastStudied: new Date().toISOString(),
              attempts: s.topicProgress[topicId]?.attempts ?? [],
              bestScore: s.topicProgress[topicId]?.bestScore ?? 0,
              lastScore: s.topicProgress[topicId]?.lastScore ?? 0,
            },
          },
          completedLessons: s.completedLessons.includes(topicId)
            ? s.completedLessons
            : [...s.completedLessons, topicId],
          userStats: {
            ...s.userStats,
            xp: newXP + streakBonus,
            level: calcLevel(newXP + streakBonus),
            streak,
            lastStudyDate,
            totalLessonsRead: s.userStats.totalLessonsRead + 1,
          },
        }))
        if (auth.currentUser) pushProgress(auth.currentUser.uid).catch(() => {})
        return XP_LESSON + streakBonus
      },

      recordQuizAttempt: (topicId, score, total) => {
        const state = get()
        const xpGained = calcXP(score, total)
        const { streak, lastStudyDate } = updateStreak(
          state.userStats.lastStudyDate,
          state.userStats.streak
        )
        const pct = total > 0 ? Math.round((score / total) * 100) : 0
        const existing = state.topicProgress[topicId]
        const newAttempt: QuizAttempt = { score, total, date: new Date().toISOString() }
        const allAttempts = [...(existing?.attempts ?? []), newAttempt]
        const newXP = state.userStats.xp + xpGained

        set((s) => ({
          topicProgress: {
            ...s.topicProgress,
            [topicId]: {
              lessonRead: s.topicProgress[topicId]?.lessonRead ?? false,
              attempts: allAttempts,
              bestScore: Math.max(existing?.bestScore ?? 0, pct),
              lastScore: pct,
              lastStudied: new Date().toISOString(),
              completed: s.topicProgress[topicId]?.completed,
            },
          },
          quizResults: [
            { topicId, score, total, date: new Date().toISOString() } as QuizResultEntry,
            ...s.quizResults.slice(0, 49),
          ],
          userStats: {
            ...s.userStats,
            xp: newXP,
            level: calcLevel(newXP),
            streak,
            lastStudyDate,
            totalQuizzes: s.userStats.totalQuizzes + 1,
          },
        }))
        if (auth.currentUser) pushProgress(auth.currentUser.uid).catch(() => {})
        return xpGained
      },

      saveQuizResult: ({ topicId, score, total }) => {
        get().recordQuizAttempt(topicId, score, total)
      },

      getTopicProgress: (topicId) => {
        return get().topicProgress[topicId] ?? {
          lessonRead: false,
          attempts: [],
          bestScore: 0,
          lastScore: 0,
        }
      },

      getTotalProgress: (_subjectId, topicIds) => {
        const state = get()
        const completed = topicIds.filter((id) => {
          const p = state.topicProgress[id]
          return p?.lessonRead || (p?.attempts?.length ?? 0) > 0
        }).length
        return topicIds.length > 0 ? Math.round((completed / topicIds.length) * 100) : 0
      },

      resetProgress: () => {
        set({
          topicProgress: {},
          userStats: DEFAULT_USER_STATS,
          quizResults: [] as QuizResultEntry[],
          completedLessons: [] as string[],
        })
      },
    }),
    { name: 'posn-progress-v2' }
  )
)
