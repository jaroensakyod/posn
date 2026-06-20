import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, RotateCcw, BookOpen, Zap, BarChart2 } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import Badge from '../../components/ui/Badge'
import { chemistryTopics, difficultyLabel, colorMap } from '../../data/chemistry/topics'
import { getQuestionsByTopic, Question } from '../../data/chemistry/questions'
import { getExamPracticeByTopic } from '../../data/chemistry/examPractice'
import QuizView from '../../components/chemistry/QuizView'
import { useProgressStore } from '../../store/progressStore'

type Mode = 'select' | 'quiz' | 'result'

// Combined pool for a topic: curated practice questions + answerable past-exam questions.
function topicPool(topicId: string): Question[] {
  return [...getQuestionsByTopic(topicId), ...getExamPracticeByTopic(topicId)]
}

// Full pool across every topic (curated + past-exam), used by "ฝึกรวมทุกหัวข้อ".
const allPracticeQuestions: Question[] = chemistryTopics.flatMap((t) => topicPool(t.id))

function ResultView({
  score,
  total,
  topicId,
  xpGained,
  onRetry,
}: {
  score: number
  total: number
  topicId: string
  xpGained: number
  onRetry: () => void
}) {
  const pct = Math.round((score / total) * 100)
  const topic = chemistryTopics.find((t) => t.id === topicId)

  const level =
    pct >= 80 ? { label: 'ยอดเยี่ยม! 🎉', color: 'text-green-600', bg: 'bg-green-50', ringColor: 'ring-green-300' }
    : pct >= 60 ? { label: 'ดี! 👍', color: 'text-blue-600', bg: 'bg-blue-50', ringColor: 'ring-blue-300' }
    : { label: 'ลองอีกครั้ง 💪', color: 'text-orange-600', bg: 'bg-orange-50', ringColor: 'ring-orange-300' }

  return (
    <div className="flex flex-col items-center text-center space-y-5 py-6">
      <div className={`w-32 h-32 rounded-full ${level.bg} ring-4 ${level.ringColor} flex flex-col items-center justify-center`}>
        <div className={`text-4xl font-bold ${level.color}`}>{pct}%</div>
        <div className="text-xs text-slate-500">{score}/{total} ข้อ</div>
      </div>

      <div>
        <h2 className={`text-xl font-bold ${level.color}`}>{level.label}</h2>
        {topic && <p className="text-slate-500 text-sm mt-1">{topic.title}</p>}
      </div>

      {/* XP gained */}
      {xpGained > 0 && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
          <Zap size={18} className="text-amber-500" />
          <span className="font-bold text-amber-700">+{xpGained} XP</span>
          <span className="text-amber-600 text-sm">ได้รับแล้ว!</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <button
          onClick={onRetry}
          className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 rounded-xl font-medium text-slate-600 hover:border-blue-300 transition-colors"
        >
          <RotateCcw size={16} /> ทำใหม่
        </button>
        <Link
          to={`/chemistry/lessons/${topicId}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          <BookOpen size={16} /> ทบทวนบทเรียน
        </Link>
      </div>
      <Link
        to="/chemistry/analytics"
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"
      >
        <BarChart2 size={14} /> ดูการวิเคราะห์ผล
      </Link>
    </div>
  )
}

export default function Practice() {
  const { topicId } = useParams<{ topicId?: string }>()
  const { recordQuizAttempt } = useProgressStore()

  const [mode, setMode] = useState<Mode>(topicId ? 'quiz' : 'select')
  const [activeTopic, setActiveTopic] = useState<string>(topicId ?? '')
  const [questions, setQuestions] = useState<Question[]>([])
  const [score, setScore] = useState(0)
  const [xpGained, setXpGained] = useState(0)

  useEffect(() => {
    if (topicId) {
      setActiveTopic(topicId)
      setMode('quiz')
    }
  }, [topicId])

  useEffect(() => {
    if (mode === 'quiz' && activeTopic) {
      const qs = activeTopic === 'all'
        ? [...allPracticeQuestions].sort(() => Math.random() - 0.5).slice(0, 15)
        : topicPool(activeTopic)
      setQuestions(qs)
    }
  }, [mode, activeTopic])

  function startQuiz(tid: string) {
    setActiveTopic(tid)
    setMode('quiz')
    setScore(0)
  }

  function handleFinish(s: number) {
    setScore(s)
    setMode('result')
    const xp = recordQuizAttempt(activeTopic, s, questions.length)
    setXpGained(xp)
  }

  function retry() {
    setMode('quiz')
    setScore(0)
  }

  const topic = chemistryTopics.find((t) => t.id === activeTopic)
  const topicsWithQuestions = chemistryTopics.filter(
    (t) => topicPool(t.id).length > 0
  )

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[
        { label: 'เคมี', path: '/chemistry' },
        { label: 'แบบฝึกหัด', path: '/chemistry/practice' },
        ...(topic ? [{ label: topic.title }] : []),
      ]}
    >
      <div className="max-w-2xl mx-auto px-4 py-6">

        {mode === 'select' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 mb-1">แบบฝึกหัดเคมี</h1>
              <p className="text-slate-500 text-sm">เลือกหัวข้อที่ต้องการฝึก</p>
            </div>

            {/* Practice all */}
            <button
              onClick={() => startQuiz('all')}
              className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl shadow-md hover:shadow-lg transition-all text-left"
            >
              <div className="text-3xl">🎯</div>
              <div>
                <div className="font-bold text-lg">ฝึกรวมทุกหัวข้อ</div>
                <div className="text-blue-100 text-sm">{allPracticeQuestions.length} ข้อ คละจากทุกหัวข้อ</div>
              </div>
              <ArrowRight size={20} className="ml-auto" />
            </button>

            <div className="text-sm font-semibold text-slate-500">หรือเลือกหัวข้อเฉพาะ</div>
            <div className="space-y-2">
              {topicsWithQuestions.map((topic) => {
                const c = colorMap[topic.color]
                const qCount = topicPool(topic.id).length
                return (
                  <button
                    key={topic.id}
                    onClick={() => startQuiz(topic.id)}
                    className="w-full flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-4 hover:shadow-sm hover:border-slate-200 transition-all text-left"
                  >
                    <div className={`text-xl w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${c.light}`}>
                      {topic.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-700 text-sm">{topic.title}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge label={difficultyLabel[topic.difficulty]} variant={topic.difficulty} />
                        <span className="text-xs text-slate-400">{qCount} ข้อ</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 shrink-0" />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {mode === 'quiz' && questions.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-lg font-bold text-slate-800">
                  {activeTopic === 'all' ? 'ฝึกรวมทุกหัวข้อ' : topic?.title}
                </h1>
                <p className="text-xs text-slate-400">{questions.length} ข้อ</p>
              </div>
              <button
                onClick={() => setMode('select')}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                ออก
              </button>
            </div>
            <QuizView
              questions={questions}
              onFinish={handleFinish}
            />
          </div>
        )}

        {mode === 'result' && (
          <ResultView
            score={score}
            total={questions.length}
            topicId={activeTopic}
            xpGained={xpGained}
            onRetry={retry}
          />
        )}

      </div>
    </SubjectLayout>
  )
}
