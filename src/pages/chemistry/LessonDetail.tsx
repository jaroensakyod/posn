import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle, PenTool, ChevronLeft, ChevronRight, Clock, BookOpen, Zap } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import MathRenderer from '../../components/ui/MathRenderer'
import Badge from '../../components/ui/Badge'
import { chemistryTopics, difficultyLabel, colorMap } from '../../data/chemistry/topics'
import { chemistryLessons, ContentBlock } from '../../data/chemistry/lessons'
import { useProgressStore } from '../../store/progressStore'

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'heading':
      return (
        <h3 key={idx} className="text-base font-bold text-slate-800 mt-5 mb-2">
          {block.content}
        </h3>
      )
    case 'text':
      return (
        <p key={idx} className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
          {block.content}
        </p>
      )
    case 'math-block':
      return (
        <div key={idx} className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-100 overflow-x-auto">
          <MathRenderer math={block.content} block />
        </div>
      )
    case 'formula-box':
      return (
        <div key={idx} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          {block.label && (
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
              {block.label}
            </div>
          )}
          <pre className="text-sm text-blue-900 whitespace-pre-wrap font-mono leading-relaxed">
            {block.content}
          </pre>
        </div>
      )
    case 'example':
      return (
        <div key={idx} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
            {block.label ?? 'ตัวอย่าง'}
          </div>
          <pre className="text-sm text-amber-900 whitespace-pre-wrap leading-relaxed">
            {block.content}
          </pre>
        </div>
      )
    case 'note':
      return (
        <div key={idx} className="bg-green-50 border border-green-100 rounded-xl p-4">
          <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">
            {block.label ?? 'หมายเหตุ'}
          </div>
          <p className="text-sm text-green-900 whitespace-pre-line">{block.content}</p>
        </div>
      )
    case 'list':
      return (
        <div key={idx}>
          {block.content && (
            <p className="text-sm text-slate-600 mb-2">{block.content}</p>
          )}
          <ul className="space-y-1.5 text-sm text-slate-600">
            {block.items?.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    default:
      return null
  }
}

export default function LessonDetail() {
  const { topicId } = useParams<{ topicId: string }>()
  const { markLessonCompleted, getTopicProgress } = useProgressStore()
  const [xpToast, setXpToast] = useState<number | null>(null)

  const topic = chemistryTopics.find((t) => t.id === topicId)
  const lesson = chemistryLessons[topicId ?? '']
  const progress = getTopicProgress(topicId ?? '')

  const currentIndex = chemistryTopics.findIndex((t) => t.id === topicId)
  const prevTopic = currentIndex > 0 ? chemistryTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < chemistryTopics.length - 1 ? chemistryTopics[currentIndex + 1] : null

  if (!topic) {
    return (
      <SubjectLayout subject="chemistry">
        <div className="flex flex-col items-center justify-center h-64 text-slate-400">
          <BookOpen size={40} className="mb-3 opacity-40" />
          <p>ไม่พบหัวข้อนี้</p>
          <Link to="/chemistry/lessons" className="text-blue-600 text-sm mt-2">กลับไปรายการ</Link>
        </div>
      </SubjectLayout>
    )
  }

  const c = colorMap[topic.color]

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[
        { label: 'เคมี', path: '/chemistry' },
        { label: 'บทเรียน', path: '/chemistry/lessons' },
        { label: topic.title },
      ]}
    >
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">

        {/* Topic header */}
        <div className={`rounded-2xl p-5 ${c.light} border ${c.border}`}>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{topic.icon}</div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{topic.title}</h1>
              <p className="text-slate-500 text-sm mb-3">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge label={difficultyLabel[topic.difficulty]} variant={topic.difficulty} />
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock size={11} /> {topic.estimatedHours} ชั่วโมง
                </span>
                {progress.completed && (
                  <span className="text-xs text-green-600 flex items-center gap-1 font-medium">
                    <CheckCircle size={11} /> เรียนแล้ว
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Subtopics overview */}
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <h2 className="text-sm font-semibold text-slate-600 mb-3">หัวข้อย่อยที่ครอบคลุม</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {topic.subtopics.map((sub, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className={`font-bold text-xs shrink-0 mt-0.5 ${c.text}`}>{i + 1}.</span>
                {sub}
              </li>
            ))}
          </ul>
        </div>

        {/* Lesson content */}
        {lesson ? (
          <div className="space-y-6">
            {lesson.sections.map((section, si) => (
              <div key={si} className="bg-white rounded-xl border border-slate-100 p-5">
                <h2 className={`text-base font-bold mb-4 pb-2 border-b ${c.border} ${c.text}`}>
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.blocks.map((block, bi) => renderBlock(block, bi))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-100 p-8 text-center">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-slate-500 font-medium">เนื้อหากำลังจะมาเร็วๆ นี้</p>
            <p className="text-slate-400 text-sm mt-1">หัวข้อนี้อยู่ระหว่างการเพิ่มเนื้อหา</p>
          </div>
        )}

        {/* XP Toast */}
        {xpToast !== null && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 animate-pulse">
            <Zap size={18} className="text-amber-500" />
            <span className="font-bold text-amber-700">+{xpToast} XP ได้รับแล้ว!</span>
            <span className="text-amber-600 text-sm">ยอดเยี่ยม 🎉</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!progress.lessonRead && (
            <button
              onClick={() => {
                const xp = markLessonCompleted(topic.id)
                if (xp > 0) { setXpToast(xp); setTimeout(() => setXpToast(null), 4000) }
              }}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
            >
              <CheckCircle size={18} />
              ทำเครื่องหมายว่าเรียนแล้ว
            </button>
          )}
          <Link
            to={`/chemistry/practice/${topic.id}`}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            <PenTool size={18} />
            ทำแบบฝึกหัดหัวข้อนี้
          </Link>
        </div>

        {/* Prev/Next navigation */}
        <div className="flex gap-3 pt-2">
          {prevTopic ? (
            <Link
              to={`/chemistry/lessons/${prevTopic.id}`}
              className="flex-1 flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-200 transition-colors text-sm"
            >
              <ChevronLeft size={16} className="text-slate-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-slate-400">ก่อนหน้า</div>
                <div className="font-medium text-slate-600 truncate">{prevTopic.title}</div>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextTopic ? (
            <Link
              to={`/chemistry/lessons/${nextTopic.id}`}
              className="flex-1 flex items-center justify-end gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-200 transition-colors text-sm text-right"
            >
              <div className="min-w-0">
                <div className="text-xs text-slate-400">ถัดไป</div>
                <div className="font-medium text-slate-600 truncate">{nextTopic.title}</div>
              </div>
              <ChevronRight size={16} className="text-slate-400 shrink-0" />
            </Link>
          ) : <div className="flex-1" />}
        </div>

      </div>
    </SubjectLayout>
  )
}
