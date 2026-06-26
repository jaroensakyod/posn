import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, RotateCcw, BookOpen, Zap, BarChart2, PenLine } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import Badge from '../../components/ui/Badge'
import { chemistryTopics, difficultyLabel, colorMap } from '../../data/chemistry/topics'
import { getQuestionsByTopic, Question } from '../../data/chemistry/questions'
import { getExamPracticeByTopic } from '../../data/chemistry/examPractice'
import { getWrittenQuestionsByTopic, WrittenQuestion } from '../../data/chemistry/writtenExamQuestions'
import QuizView from '../../components/chemistry/QuizView'
import WrittenQuizView from '../../components/chemistry/WrittenQuizView'
import { useProgressStore } from '../../store/progressStore'

type Mode = 'select' | 'quiz' | 'written' | 'result'

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
  const [writtenQuestions, setWrittenQuestions] = useState<WrittenQuestion[]>([])
  const [score, setScore] = useState(0)
  const [xpGained, setXpGained] = useState(0)
  const [writtenAnswered, setWrittenAnswered] = useState(0)

  useEffect(() => {
    if (topicId) {
      setActiveTopic(topicId)
      setMode('quiz')
    }
  }, [topicId])

  useEffect(() => {
    if ((mode === 'quiz' || mode === 'written') && activeTopic) {
      const qs = activeTopic === 'all'
        ? [...allPracticeQuestions].sort(() => Math.random() - 0.5).slice(0, 15)
        : topicPool(activeTopic)
      const wqs = activeTopic === 'all' ? [] : getWrittenQuestionsByTopic(activeTopic)
      setQuestions(qs)
      setWrittenQuestions(wqs)
    }
  }, [mode, activeTopic])

  function startQuiz(tid: string) {
    setActiveTopic(tid)
    setMode('quiz')
    setScore(0)
    setWrittenAnswered(0)
  }

  function startWrittenOnly(tid: string) {
    setActiveTopic(tid)
    setMode('written')
    setScore(0)
    setWrittenAnswered(0)
  }

  function handleFinish(s: number) {
    setScore(s)
    const xp = recordQuizAttempt(activeTopic, s, questions.length)
    setXpGained(xp)
    const wqs = activeTopic === 'all' ? [] : getWrittenQuestionsByTopic(activeTopic)
    if (wqs.length > 0) {
      setMode('written')
    } else {
      setMode('result')
    }
  }

  function handleWrittenFinish(answered: number) {
    setWrittenAnswered(answered)
    setMode('result')
  }

  function retry() {
    setMode('quiz')
    setScore(0)
    setWrittenAnswered(0)
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
              {chemistryTopics.map((t) => {
                const c = colorMap[t.color]
                const mcCount = topicPool(t.id).length
                const wCount = getWrittenQuestionsByTopic(t.id).length
                if (mcCount === 0 && wCount === 0) return null
                return (
                  <div key={t.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 p-4">
                      <div className={`text-xl w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${c.light}`}>
                        {t.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-700 text-sm">{t.title}</div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Badge label={difficultyLabel[t.difficulty]} variant={t.difficulty} />
                          {mcCount > 0 && <span className="text-xs text-slate-400">{mcCount} ปรนัย</span>}
                          {wCount > 0 && <span className="text-xs text-violet-500 font-medium">{wCount} ข้อเขียน</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex border-t border-slate-100">
                      {mcCount > 0 && (
                        <button
                          onClick={() => startQuiz(t.id)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <ArrowRight size={13} /> ทำปรนัย
                        </button>
                      )}
                      {wCount > 0 && (
                        <button
                          onClick={() => startWrittenOnly(t.id)}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-violet-600 hover:bg-violet-50 transition-colors ${mcCount > 0 ? 'border-l border-slate-100' : ''}`}
                        >
                          <PenLine size={13} /> ทำข้อเขียน
                        </button>
                      )}
                    </div>
                  </div>
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
              <button onClick={() => setMode('select')} className="text-sm text-slate-500 hover:text-slate-700">ออก</button>
            </div>
            <QuizView questions={questions} onFinish={handleFinish} />
          </div>
        )}

        {mode === 'written' && writtenQuestions.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <PenLine size={18} className="text-violet-600" />
                  {activeTopic === 'all' ? 'ข้อเขียน' : `ข้อเขียน — ${topic?.title}`}
                </h1>
                {score > 0 && questions.length > 0 && (
                  <p className="text-xs text-emerald-600 mt-0.5">ปรนัย: {score}/{questions.length} ข้อ</p>
                )}
              </div>
              <button onClick={() => setMode('select')} className="text-sm text-slate-500 hover:text-slate-700">ออก</button>
            </div>
            <WrittenQuizView questions={writtenQuestions} onFinish={handleWrittenFinish} />
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
