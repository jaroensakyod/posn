import { useState } from 'react'
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react'
import { Question } from '../../data/chemistry/questions'

// Shared quiz runner used by both the Practice page (by topic) and the Exams page (by year).
export default function QuizView({
  questions,
  onFinish,
}: {
  questions: Question[]
  onFinish: (score: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))

  const q = questions[current]
  const isLast = current === questions.length - 1

  function choose(idx: number) {
    if (showAnswer) return
    setSelected(idx)
    setShowAnswer(true)
    const newAnswers = [...answers]
    newAnswers[current] = idx
    setAnswers(newAnswers)
  }

  function next() {
    if (isLast) {
      const score = questions.reduce((s, q, i) => s + (answers[i] === q.correctIndex ? 1 : 0), 0)
      onFinish(score)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setShowAnswer(false)
    }
  }

  const correctCount = answers.slice(0, current + (showAnswer ? 1 : 0)).filter(
    (a, i) => a === questions[i].correctIndex
  ).length

  return (
    <div className="space-y-5">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((current + (showAnswer ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-slate-500 shrink-0">
          {current + 1}/{questions.length}
        </span>
        <span className="text-sm text-green-600 font-medium shrink-0">
          ✓ {correctCount}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
            {current + 1}
          </span>
          <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line text-sm md:text-base">
            {q.text}
          </p>
        </div>

        <div className="space-y-2.5">
          {q.choices.map((choice, idx) => {
            let style = 'border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
            if (showAnswer) {
              if (idx === q.correctIndex) style = 'border-green-400 bg-green-50 text-green-800'
              else if (idx === selected) style = 'border-red-400 bg-red-50 text-red-800'
              else style = 'border-slate-200 text-slate-400'
            }
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-sm ${style}`}
              >
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-relaxed">{choice}</span>
                {showAnswer && idx === q.correctIndex && (
                  <CheckCircle size={16} className="ml-auto text-green-500 shrink-0" />
                )}
                {showAnswer && idx === selected && idx !== q.correctIndex && (
                  <XCircle size={16} className="ml-auto text-red-500 shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Explanation */}
      {showAnswer && q.explanation && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-700 text-sm">
            {selected === q.correctIndex ? (
              <><CheckCircle size={16} className="text-green-500" /> ถูกต้อง!</>
            ) : (
              <><XCircle size={16} className="text-red-500" /> ผิด</>
            )}
          </div>
          <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {showAnswer && (
        <button
          onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          {isLast ? (
            <><Trophy size={18} /> ดูผลลัพธ์</>
          ) : (
            <>ข้อถัดไป <ArrowRight size={18} /></>
          )}
        </button>
      )}
    </div>
  )
}
