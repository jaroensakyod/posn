import { Link } from 'react-router-dom'
import { Clock, CheckCircle, ChevronRight, Star } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import Badge from '../../components/ui/Badge'
import { chemistryTopics, difficultyLabel, colorMap } from '../../data/chemistry/topics'
import { useProgressStore } from '../../store/progressStore'

export default function Lessons() {
  const { getTopicProgress } = useProgressStore()

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[
        { label: 'เคมี', path: '/chemistry' },
        { label: 'บทเรียน' },
      ]}
    >
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">บทเรียนเคมี สอวน ค่าย 1</h1>
          <p className="text-slate-500 text-sm">เลือกหัวข้อที่ต้องการเรียน</p>
        </div>

        <div className="space-y-2">
          {chemistryTopics.map((topic, idx) => {
            const prog = getTopicProgress(topic.id)
            const c = colorMap[topic.color]
            return (
              <Link
                key={topic.id}
                to={`/chemistry/lessons/${topic.id}`}
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 p-4 hover:shadow-sm hover:border-slate-200 transition-all group"
              >
                {/* Index */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${c.bg} text-white`}>
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`text-xl w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${c.light}`}>
                  {topic.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-slate-700">{topic.title}</span>
                    {prog.lessonRead && (
                      <CheckCircle size={15} className="text-green-500 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <Badge label={difficultyLabel[topic.difficulty]} variant={topic.difficulty} />
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={11} /> {topic.estimatedHours} ชม.
                    </span>
                    {prog.bestScore > 0 && (
                      <span className="text-xs text-amber-600 flex items-center gap-1">
                        <Star size={11} /> คะแนนดีสุด {prog.bestScore}%
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0"
                />
              </Link>
            )
          })}
        </div>
      </div>
    </SubjectLayout>
  )
}
