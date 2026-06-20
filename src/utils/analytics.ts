import { TopicProgress } from '../store/progressStore'
import { Topic } from '../data/chemistry/topics'

export type PerfCategory = 'strong' | 'good' | 'developing' | 'weak' | 'not_attempted'

export interface TopicAnalysis {
  topicId: string
  title: string
  titleEn: string
  icon: string
  color: string
  difficulty: Topic['difficulty']
  bestScore: number | null   // 0-100
  lastScore: number | null   // 0-100
  avgScore: number | null    // average of all attempts
  attempts: number
  category: PerfCategory
  trend: 'improving' | 'declining' | 'stable' | 'none'
  lessonRead: boolean
  estimatedHours: number
}

export interface OverallStats {
  attempted: number
  totalTopics: number
  avgScore: number | null
  strongCount: number
  goodCount: number
  developingCount: number
  weakCount: number
  notAttemptedCount: number
  performanceScore: number  // 0-100 overall score
}

export type RecommendationPriority = 'urgent' | 'high' | 'medium' | 'low'
export type RecommendationAction = 'study_lesson' | 'practice' | 'review'

export interface Recommendation {
  topicId: string
  title: string
  icon: string
  priority: RecommendationPriority
  action: RecommendationAction
  reason: string
  detail: string
  actionLabel: string
  actionPath: string
}

export function getCategory(score: number | null, attempts: number): PerfCategory {
  if (attempts === 0 || score === null) return 'not_attempted'
  if (score >= 80) return 'strong'
  if (score >= 65) return 'good'
  if (score >= 45) return 'developing'
  return 'weak'
}

function getTrend(prog: TopicProgress | undefined): TopicAnalysis['trend'] {
  const attempts = prog?.attempts ?? []
  if (attempts.length < 2) return 'none'
  const last = (attempts[attempts.length - 1].score / attempts[attempts.length - 1].total) * 100
  const prev = (attempts[attempts.length - 2].score / attempts[attempts.length - 2].total) * 100
  if (last > prev + 5) return 'improving'
  if (last < prev - 5) return 'declining'
  return 'stable'
}

export function analyzeTopics(
  topicProgress: Record<string, TopicProgress>,
  topics: Topic[]
): TopicAnalysis[] {
  return topics.map((topic) => {
    const prog = topicProgress[topic.id]
    const attempts = prog?.attempts ?? []
    const hasAttempts = attempts.length > 0

    const lastScore = hasAttempts
      ? Math.round((attempts[attempts.length - 1].score / attempts[attempts.length - 1].total) * 100)
      : null
    const bestScore = hasAttempts ? (prog?.bestScore ?? null) : null
    const avgScore = hasAttempts
      ? Math.round(
          attempts.reduce((sum, a) => sum + (a.score / a.total) * 100, 0) / attempts.length
        )
      : null

    return {
      topicId: topic.id,
      title: topic.title,
      titleEn: topic.titleEn,
      icon: topic.icon,
      color: topic.color,
      difficulty: topic.difficulty,
      bestScore,
      lastScore,
      avgScore,
      attempts: attempts.length,
      category: getCategory(lastScore, attempts.length),
      trend: getTrend(prog),
      lessonRead: prog?.lessonRead ?? false,
      estimatedHours: topic.estimatedHours,
    }
  })
}

export function getOverallStats(analyses: TopicAnalysis[]): OverallStats {
  const attempted = analyses.filter((a) => a.attempts > 0)
  const avgScore =
    attempted.length > 0
      ? Math.round(attempted.reduce((s, a) => s + (a.lastScore ?? 0), 0) / attempted.length)
      : null

  const weightedScores = attempted.map((a) => {
    const weight = a.difficulty === 'easy' ? 1 : a.difficulty === 'medium' ? 1.5 : 2
    return { score: a.lastScore ?? 0, weight }
  })
  const totalWeight = weightedScores.reduce((s, w) => s + w.weight, 0)
  const performanceScore =
    totalWeight > 0
      ? Math.round(weightedScores.reduce((s, w) => s + w.score * w.weight, 0) / totalWeight)
      : 0

  return {
    attempted: attempted.length,
    totalTopics: analyses.length,
    avgScore,
    strongCount: analyses.filter((a) => a.category === 'strong').length,
    goodCount: analyses.filter((a) => a.category === 'good').length,
    developingCount: analyses.filter((a) => a.category === 'developing').length,
    weakCount: analyses.filter((a) => a.category === 'weak').length,
    notAttemptedCount: analyses.filter((a) => a.category === 'not_attempted').length,
    performanceScore,
  }
}

export function getRecommendations(analyses: TopicAnalysis[]): Recommendation[] {
  const recs: Recommendation[] = []

  for (const a of analyses) {
    if (a.attempts === 0 && !a.lessonRead) {
      // ยังไม่ได้เริ่มเลย
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'medium',
        action: 'study_lesson',
        reason: 'ยังไม่ได้เริ่มเรียน',
        detail: `${a.title} เป็นหัวข้อสำคัญที่ยังไม่ได้แตะ`,
        actionLabel: 'เริ่มเรียน →',
        actionPath: `/chemistry/lessons/${a.topicId}`,
      })
      continue
    }

    if (!a.lessonRead && a.attempts > 0) {
      // ทำแบบฝึกหัดโดยไม่ได้อ่านเนื้อหา
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'high',
        action: 'study_lesson',
        reason: 'ยังไม่ได้อ่านเนื้อหา',
        detail: `ทำแบบฝึกหัดแล้ว ${a.attempts} ครั้ง แต่ยังไม่ได้อ่านทฤษฎี การเข้าใจรากฐานช่วยได้มาก`,
        actionLabel: 'อ่านเนื้อหา →',
        actionPath: `/chemistry/lessons/${a.topicId}`,
      })
      continue
    }

    if (a.category === 'weak') {
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'urgent',
        action: 'review',
        reason: `คะแนนต่ำ ${a.lastScore}%`,
        detail: `ทำแบบฝึกหัดแล้ว ${a.attempts} ครั้ง คะแนนเฉลี่ย ${a.avgScore}% ต้องทบทวนพื้นฐานก่อน`,
        actionLabel: 'ทบทวนเนื้อหา →',
        actionPath: `/chemistry/lessons/${a.topicId}`,
      })
      continue
    }

    if (a.category === 'developing') {
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'high',
        action: 'practice',
        reason: `คะแนน ${a.lastScore}% ยังพัฒนาได้`,
        detail: `ได้ ${a.lastScore}% (เป้า 80%) ลองทำแบบฝึกหัดเพิ่มเติม`,
        actionLabel: 'ฝึกเพิ่ม →',
        actionPath: `/chemistry/practice/${a.topicId}`,
      })
      continue
    }

    if (a.trend === 'declining' && a.category !== 'not_attempted') {
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'high',
        action: 'review',
        reason: 'คะแนนมีแนวโน้มลดลง ⚠️',
        detail: `ครั้งล่าสุด ${a.lastScore}% ลดจากครั้งก่อน ควรทบทวนก่อนลืม`,
        actionLabel: 'ทบทวน →',
        actionPath: `/chemistry/lessons/${a.topicId}`,
      })
      continue
    }

    if (a.category === 'good') {
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'medium',
        action: 'practice',
        reason: `คะแนน ${a.lastScore}% เกือบถึงเป้า`,
        detail: `อีกนิดเดียวก็ถึง 80% ฝึกเพิ่มอีกรอบเดียวน่าจะผ่าน`,
        actionLabel: 'ฝึกต่อ →',
        actionPath: `/chemistry/practice/${a.topicId}`,
      })
      continue
    }

    if (a.category === 'strong' && a.attempts === 1) {
      // Did it once perfectly, should verify it wasn't luck
      recs.push({
        topicId: a.topicId,
        title: a.title,
        icon: a.icon,
        priority: 'low',
        action: 'practice',
        reason: `เก่ง! ทำได้ ${a.lastScore}% ยืนยันความเข้าใจ`,
        detail: 'ทำได้ดีมากในครั้งแรก ลองอีกครั้งเพื่อยืนยันว่าเข้าใจจริงๆ',
        actionLabel: 'ยืนยันความเข้าใจ →',
        actionPath: `/chemistry/practice/${a.topicId}`,
      })
    }
  }

  const order: Record<RecommendationPriority, number> = { urgent: 0, high: 1, medium: 2, low: 3 }
  recs.sort((a, b) => order[a.priority] - order[b.priority])
  return recs.slice(0, 6)
}

export const categoryConfig: Record<PerfCategory, { label: string; color: string; bg: string; border: string }> = {
  strong:       { label: 'เก่งมาก',       color: 'text-green-700',  bg: 'bg-green-50',   border: 'border-green-200' },
  good:         { label: 'ดี',             color: 'text-blue-700',   bg: 'bg-blue-50',    border: 'border-blue-200' },
  developing:   { label: 'กำลังพัฒนา',   color: 'text-yellow-700', bg: 'bg-yellow-50',  border: 'border-yellow-200' },
  weak:         { label: 'ต้องเสริม',     color: 'text-red-700',    bg: 'bg-red-50',     border: 'border-red-200' },
  not_attempted:{ label: 'ยังไม่ได้ทำ',  color: 'text-slate-500',  bg: 'bg-slate-50',   border: 'border-slate-200' },
}

export const priorityConfig: Record<RecommendationPriority, { label: string; color: string; dot: string }> = {
  urgent: { label: 'ด่วนมาก', color: 'text-red-600',    dot: 'bg-red-500' },
  high:   { label: 'สำคัญ',   color: 'text-orange-600', dot: 'bg-orange-400' },
  medium: { label: 'แนะนำ',   color: 'text-blue-600',   dot: 'bg-blue-400' },
  low:    { label: 'เสริม',   color: 'text-slate-500',  dot: 'bg-slate-400' },
}
