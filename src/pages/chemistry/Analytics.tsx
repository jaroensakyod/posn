import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, Minus, BookOpen, PenTool, Target, BarChart2 } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import LevelCard from '../../components/ui/LevelCard'
import RadarChart from '../../components/ui/RadarChart'
import { chemistryTopics } from '../../data/chemistry/topics'
import { useProgressStore } from '../../store/progressStore'
import {
  analyzeTopics,
  getOverallStats,
  getRecommendations,
  categoryConfig,
  priorityConfig,
  TopicAnalysis,
} from '../../utils/analytics'

const shortLabels: Record<string, string> = {
  'atomic-structure':     'อะตอม',
  'chemical-bonding':     'พันธะ',
  'stoichiometry':        'ปริมาณสาร',
  'states-of-matter':     'สถานะ',
  'solutions':            'สารละลาย',
  'thermochemistry':      'เทอร์โม',
  'kinetics':             'จลน์',
  'equilibrium':          'สมดุล',
  'acid-base':            'กรด-เบส',
  'electrochemistry':     'ไฟฟ้า',
  'organic-chemistry':    'อินทรีย์',
  'analytical-chemistry': 'วิเคราะห์',
}

function TrendIcon({ trend }: { trend: TopicAnalysis['trend'] }) {
  if (trend === 'improving') return <TrendingUp size={13} className="text-green-500" />
  if (trend === 'declining') return <TrendingDown size={13} className="text-red-500" />
  if (trend === 'stable')    return <Minus size={13} className="text-slate-400" />
  return null
}

function ScoreBar({ score, max = 100 }: { score: number; max?: number }) {
  const pct = Math.round((score / max) * 100)
  const color = score >= 80 ? 'bg-green-500' : score >= 65 ? 'bg-blue-500' : score >= 45 ? 'bg-yellow-400' : 'bg-red-400'
  return (
    <div className="flex items-center gap-2 flex-1">
      <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
        <div className={`h-2 rounded-full transition-all duration-500 ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-medium text-slate-600 w-8 text-right">{score}%</span>
    </div>
  )
}

export default function Analytics() {
  const { topicProgress, userStats } = useProgressStore()
  const analyses = analyzeTopics(topicProgress, chemistryTopics)
  const stats = getOverallStats(analyses)
  const recommendations = getRecommendations(analyses)

  const radarTopics = chemistryTopics.map((t) => ({
    id: t.id,
    label: shortLabels[t.id] ?? t.title,
    score: analyses.find((a) => a.topicId === t.id)?.lastScore ?? null,
  }))

  const hasAnyData = stats.attempted > 0

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[
        { label: 'เคมี', path: '/chemistry' },
        { label: 'วิเคราะห์ผล' },
      ]}
    >
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <BarChart2 size={22} /> วิเคราะห์ผลการเรียน
          </h1>
          <p className="text-slate-500 text-sm">ติดตามความก้าวหน้า วิเคราะห์จุดแข็ง-จุดอ่อน และรับคำแนะนำส่วนตัว</p>
        </div>

        {/* Level card */}
        <LevelCard userStats={userStats} />

        {!hasAnyData ? (
          /* Empty state */
          <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">เริ่มทำแบบฝึกหัดเพื่อดูการวิเคราะห์</h2>
            <p className="text-slate-400 text-sm mb-5">ระบบจะวิเคราะห์จุดแข็ง-จุดอ่อนของคุณหลังจากทำแบบฝึกหัด</p>
            <Link
              to="/chemistry/practice"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <PenTool size={16} /> เริ่มทำแบบฝึกหัด
            </Link>
          </div>
        ) : (
          <>
            {/* Overall performance card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-2 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-full flex flex-col items-center justify-center shrink-0 text-white font-bold text-2xl shadow-md ${
                    stats.performanceScore >= 80 ? 'bg-green-500'
                    : stats.performanceScore >= 60 ? 'bg-blue-500'
                    : stats.performanceScore >= 40 ? 'bg-yellow-400'
                    : 'bg-red-400'
                  }`}
                >
                  {stats.performanceScore}
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">
                    {stats.performanceScore >= 80 ? 'เก่งมาก! 🎉'
                     : stats.performanceScore >= 60 ? 'กำลังดี 👍'
                     : stats.performanceScore >= 40 ? 'ยังพัฒนาได้ 💪'
                     : 'ต้องฝึกเพิ่ม 📚'}
                  </div>
                  <p className="text-slate-400 text-sm">คะแนนรวมถ่วงน้ำหนักความยาก</p>
                  <p className="text-xs text-slate-400 mt-1">
                    ทำแล้ว {stats.attempted}/{stats.totalTopics} หัวข้อ
                    {stats.avgScore !== null && ` • เฉลี่ย ${stats.avgScore}%`}
                  </p>
                </div>
              </div>

              {[
                { label: 'เก่งมาก', count: stats.strongCount, color: 'text-green-600 bg-green-50', emoji: '🟢' },
                { label: 'ต้องเสริม', count: stats.weakCount + stats.developingCount, color: 'text-orange-600 bg-orange-50', emoji: '🔶' },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border border-slate-100 p-4 shadow-sm flex flex-col items-center justify-center ${s.color}`}>
                  <div className="text-3xl font-bold">{s.count}</div>
                  <div className="text-sm font-medium mt-0.5">{s.label}</div>
                  <div className="text-xs opacity-70">หัวข้อ</div>
                </div>
              ))}
            </div>

            {/* Category summary */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h2 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <Target size={16} /> สรุปรายหมวดหมู่
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { key: 'strong',       count: stats.strongCount,        label: '🟢 เก่งมาก' },
                  { key: 'good',         count: stats.goodCount,          label: '🔵 ดี' },
                  { key: 'developing',   count: stats.developingCount,    label: '🟡 กำลังพัฒนา' },
                  { key: 'weak',         count: stats.weakCount,          label: '🔴 ต้องเสริม' },
                  { key: 'not_attempted',count: stats.notAttemptedCount,  label: '⚪ ยังไม่ได้ทำ' },
                ].map(({ count, label }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-slate-800">{count}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content: Radar + Topic list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Radar chart */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                <h2 className="font-semibold text-slate-700 mb-3">แผนภูมิประสิทธิภาพ</h2>
                <RadarChart topics={radarTopics} />
                <div className="flex gap-4 justify-center mt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> คะแนนของคุณ
                  </span>
                </div>
              </div>

              {/* Topic breakdown list */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                <h2 className="font-semibold text-slate-700 mb-3">รายหัวข้อ</h2>
                <div className="space-y-2.5 overflow-y-auto max-h-80 pr-1">
                  {analyses
                    .sort((a, b) => {
                      const order = { weak: 0, developing: 1, good: 2, strong: 3, not_attempted: 4 }
                      return order[a.category] - order[b.category]
                    })
                    .map((a) => {
                      const cfg = categoryConfig[a.category]
                      return (
                        <Link
                          key={a.topicId}
                          to={`/chemistry/lessons/${a.topicId}`}
                          className="flex items-center gap-2.5 group"
                        >
                          <span className="text-lg w-7 text-center shrink-0">{a.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-medium text-slate-700 truncate">{a.title}</span>
                              <TrendIcon trend={a.trend} />
                              {a.attempts > 0 && (
                                <span className="text-[10px] text-slate-400">×{a.attempts}</span>
                              )}
                            </div>
                            {a.lastScore !== null ? (
                              <ScoreBar score={a.lastScore} />
                            ) : (
                              <div className="text-xs text-slate-400">ยังไม่ได้ทำ</div>
                            )}
                          </div>
                          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ${cfg.color} ${cfg.bg}`}>
                            {cfg.label}
                          </span>
                        </Link>
                      )
                    })}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div>
                <h2 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <TrendingUp size={16} /> คำแนะนำส่วนตัว
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recommendations.map((rec) => {
                    const pcfg = priorityConfig[rec.priority]
                    const icon = rec.action === 'study_lesson' ? <BookOpen size={14} />
                               : rec.action === 'practice'    ? <PenTool size={14} />
                               : <TrendingUp size={14} />
                    return (
                      <div
                        key={rec.topicId}
                        className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl shrink-0">{rec.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-sm text-slate-700">{rec.title}</span>
                              <span className={`flex items-center gap-1 text-xs font-medium ${pcfg.color}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${pcfg.dot}`} />
                                {pcfg.label}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{rec.detail}</p>
                            <Link
                              to={rec.actionPath}
                              className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                            >
                              {icon}
                              {rec.actionLabel}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Attempt history */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h2 className="font-semibold text-slate-700 mb-3">ประวัติการพัฒนา</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-slate-400 border-b border-slate-100">
                      <th className="pb-2 font-medium">หัวข้อ</th>
                      <th className="pb-2 font-medium text-center">ครั้งที่ทำ</th>
                      <th className="pb-2 font-medium text-center">คะแนนล่าสุด</th>
                      <th className="pb-2 font-medium text-center">คะแนนดีสุด</th>
                      <th className="pb-2 font-medium text-center">แนวโน้ม</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyses
                      .filter((a) => a.attempts > 0)
                      .sort((a, b) => (a.lastScore ?? 0) - (b.lastScore ?? 0))
                      .map((a) => (
                        <tr key={a.topicId} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                          <td className="py-2.5">
                            <div className="flex items-center gap-2">
                              <span>{a.icon}</span>
                              <span className="text-slate-700 font-medium text-xs truncate max-w-[120px]">{a.title}</span>
                            </div>
                          </td>
                          <td className="py-2.5 text-center text-slate-500 text-xs">{a.attempts}</td>
                          <td className="py-2.5 text-center">
                            <span className={`font-bold text-sm ${
                              (a.lastScore ?? 0) >= 80 ? 'text-green-600'
                              : (a.lastScore ?? 0) >= 65 ? 'text-blue-600'
                              : (a.lastScore ?? 0) >= 45 ? 'text-yellow-600'
                              : 'text-red-600'
                            }`}>
                              {a.lastScore ?? '—'}%
                            </span>
                          </td>
                          <td className="py-2.5 text-center text-slate-600 text-xs font-medium">
                            {a.bestScore ?? '—'}%
                          </td>
                          <td className="py-2.5 text-center">
                            <TrendIcon trend={a.trend} />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {analyses.filter((a) => a.attempts > 0).length === 0 && (
                  <p className="text-center text-slate-400 text-sm py-4">ยังไม่มีประวัติ</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </SubjectLayout>
  )
}
