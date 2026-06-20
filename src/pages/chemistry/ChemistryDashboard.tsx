import { Link } from 'react-router-dom'
import { Clock, CheckCircle, TrendingUp, BookOpen, PenTool, FileText, Star, BarChart2 } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import ProgressBar from '../../components/ui/ProgressBar'
import Badge from '../../components/ui/Badge'
import LevelCard from '../../components/ui/LevelCard'
import { chemistryTopics, difficultyLabel, colorMap } from '../../data/chemistry/topics'
import { useProgressStore } from '../../store/progressStore'

const examYears = [60, 61, 62, 64, 65, 66, 67, 68]

export default function ChemistryDashboard() {
  const { getTotalProgress, getTopicProgress, quizResults, userStats } = useProgressStore()
  const topicIds = chemistryTopics.map((t) => t.id)
  const overallProgress = getTotalProgress('chemistry', topicIds)
  const completedCount = topicIds.filter((id) => getTopicProgress(id).lessonRead).length
  const recentResults = quizResults.slice(0, 3)

  const totalHours = chemistryTopics.reduce((sum, t) => sum + t.estimatedHours, 0)

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[{ label: 'เคมี สอวน ค่าย 1', path: '/chemistry' }]}
    >
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

        {/* Subject banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-4xl mb-2">⚗️</div>
              <h1 className="text-2xl font-bold mb-1">เคมี สอวน ค่าย 1</h1>
              <p className="text-blue-100 text-sm">ครอบคลุมเนื้อหาตามหลักสูตร สอวน เคมี ค่าย 1 ทั้งหมด</p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-3xl font-bold">{overallProgress}%</div>
              <div className="text-blue-200 text-sm">เสร็จแล้ว</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-blue-100 mb-1.5">
              <span>ความก้าวหน้าโดยรวม</span>
              <span>{completedCount}/{topicIds.length} หัวข้อ</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-2.5 bg-white rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'หัวข้อทั้งหมด', value: chemistryTopics.length, icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
            { label: 'เรียนแล้ว', value: completedCount, icon: CheckCircle, color: 'text-green-600 bg-green-50' },
            { label: 'ทำแบบฝึกหัด', value: quizResults.length, icon: PenTool, color: 'text-violet-600 bg-violet-50' },
            { label: 'ชั่วโมงเนื้อหา', value: totalHours, icon: Clock, color: 'text-orange-600 bg-orange-50' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${s.color}`}>
                <s.icon size={18} />
              </div>
              <div className="text-2xl font-bold text-slate-800">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Level card */}
        <LevelCard userStats={userStats} />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { to: '/chemistry/lessons',  icon: BookOpen,  label: 'บทเรียน',    sub: 'เนื้อหา+สูตร',   border: 'border-blue-100   hover:border-blue-300',   bg: 'bg-blue-100   group-hover:bg-blue-200',   iconColor: 'text-blue-600' },
            { to: '/chemistry/practice', icon: PenTool,   label: 'แบบฝึกหัด', sub: 'โจทย์+เฉลย',    border: 'border-violet-100 hover:border-violet-300', bg: 'bg-violet-100 group-hover:bg-violet-200', iconColor: 'text-violet-600' },
            { to: '/chemistry/analytics',icon: BarChart2, label: 'วิเคราะห์', sub: 'จุดแข็ง-อ่อน', border: 'border-cyan-100   hover:border-cyan-300',   bg: 'bg-cyan-100   group-hover:bg-cyan-200',   iconColor: 'text-cyan-600' },
            { to: '/chemistry/exams',    icon: FileText,  label: 'ข้อสอบเก่า', sub: `ปี ${examYears[0]}–${examYears[examYears.length-1]}`, border: 'border-orange-100 hover:border-orange-300', bg: 'bg-orange-100 group-hover:bg-orange-200', iconColor: 'text-orange-600' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 bg-white rounded-xl border ${item.border} p-3 hover:shadow-sm transition-all group`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${item.bg}`}>
                <item.icon size={18} className={item.iconColor} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-slate-700 text-sm">{item.label}</div>
                <div className="text-xs text-slate-400 truncate">{item.sub}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Topics Grid */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-slate-700 flex items-center gap-2">
              <TrendingUp size={16} />
              หัวข้อทั้งหมด
            </h2>
            <Link to="/chemistry/lessons" className="text-sm text-blue-600 hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chemistryTopics.map((topic) => {
              const prog = getTopicProgress(topic.id)
              const c = colorMap[topic.color]
              return (
                <Link
                  key={topic.id}
                  to={`/chemistry/lessons/${topic.id}`}
                  className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-sm hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${c.light}`}>
                      {topic.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-medium text-slate-700 text-sm truncate">{topic.title}</h3>
                        {prog.lessonRead && (
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          label={difficultyLabel[topic.difficulty]}
                          variant={topic.difficulty}
                        />
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock size={11} /> {topic.estimatedHours} ชม.
                        </span>
                        {prog.bestScore > 0 && (
                          <span className="text-xs text-amber-600 flex items-center gap-1">
                            <Star size={11} /> {prog.bestScore}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent quiz results */}
        {recentResults.length > 0 && (
          <div>
            <h2 className="font-semibold text-slate-700 mb-3">ผลการทำแบบฝึกหัดล่าสุด</h2>
            <div className="space-y-2">
              {recentResults.map((r, i) => {
                const pct = Math.round((r.score / r.total) * 100)
                const topic = chemistryTopics.find((t) => t.id === r.topicId)
                return (
                  <div key={i} className="bg-white rounded-xl border border-slate-100 p-3 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                        pct >= 70 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {pct}%
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-700 truncate">
                        {topic?.title ?? r.topicId}
                      </div>
                      <div className="text-xs text-slate-400">
                        {r.score}/{r.total} ข้อ • {new Date(r.date).toLocaleDateString('th-TH')}
                      </div>
                    </div>
                    <ProgressBar value={pct} color={pct >= 70 ? 'green' : 'orange'} size="sm" className="w-20" />
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </SubjectLayout>
  )
}
