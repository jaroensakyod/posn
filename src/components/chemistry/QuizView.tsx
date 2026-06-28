import { useState, useMemo } from 'react'
import { CheckCircle, XCircle, ArrowRight, Trophy, ChevronLeft, SkipForward } from 'lucide-react'
import { Question } from '../../data/chemistry/questions'

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Shared quiz runner used by both the Practice page (by topic) and the Exams page (by year).
export default function QuizView({
  questions,
  onFinish,
}: {
  questions: Question[]
  onFinish: (score: number) => void
}) {
  // shuffle questions and choices once per mount
  const shuffled = useMemo(() => {
    return shuffleArray(questions).map((q) => {
      const choiceOrder = shuffleArray(q.choices.map((_, i) => i))
      return {
        ...q,
        choices: choiceOrder.map((i) => q.choices[i]),
        correctIndex: choiceOrder.indexOf(q.correctIndex),
      }
    })
  }, [])

  const [current, setCurrent] = useState(0)
  // answers: null = ยังไม่ตอบ/ข้าม, number = ตัวเลือกที่เลือก
  const [answers, setAnswers] = useState<(number | null)[]>(Array(shuffled.length).fill(null))
  const [showAnswer, setShowAnswer] = useState(false)

  const q = shuffled[current]
  const selected = answers[current]
  const isAnswered = selected !== null
  const isLast = current === shuffled.length - 1
  const skippedCount = answers.filter((a) => a === null).length

  function choose(idx: number) {
    if (showAnswer || isAnswered) return
    const newAnswers = [...answers]
    newAnswers[current] = idx
    setAnswers(newAnswers)
    setShowAnswer(true)
  }

  function goTo(idx: number) {
    setCurrent(idx)
    setShowAnswer(answers[idx] !== null)
  }

  function next() {
    if (isLast) {
      // ถ้ายังมีข้อที่ข้ามค้างไว้ ให้วนกลับไปข้อแรกที่ยังไม่ตอบ
      const firstSkipped = answers.findIndex((a) => a === null)
      if (firstSkipped !== -1) {
        goTo(firstSkipped)
      } else {
        const score = shuffled.reduce((s, q, i) => s + (answers[i] === q.correctIndex ? 1 : 0), 0)
        onFinish(score)
      }
    } else {
      goTo(current + 1)
    }
  }

  function skip() {
    if (isLast) {
      const firstSkipped = answers.findIndex((a, i) => a === null && i !== current)
      if (firstSkipped !== -1) {
        goTo(firstSkipped)
      } else {
        // ข้อสุดท้ายที่ยังไม่ตอบ — จบเลย
        const score = shuffled.reduce((s, q, i) => s + (answers[i] === q.correctIndex ? 1 : 0), 0)
        onFinish(score)
      }
    } else {
      goTo(current + 1)
    }
  }

  function prev() {
    if (current > 0) goTo(current - 1)
  }

  const correctCount = answers.filter((a, i) => a === shuffled[i].correctIndex).length

  // dot nav: แสดงสถานะแต่ละข้อ
  const allAnswered = answers.every((a) => a !== null)

  return (
    <div className="space-y-5">
      {/* Progress bar + counter */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(answers.filter(a => a !== null).length / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-slate-500 shrink-0">
          {current + 1}/{questions.length}
        </span>
        <span className="text-sm text-green-600 font-medium shrink-0">
          ✓ {correctCount}
        </span>
      </div>

      {/* Dot navigator */}
      <div className="flex flex-wrap gap-1.5">
        {shuffled.map((_, i) => {
          const ans = answers[i]
          const isCorrect = ans === shuffled[i].correctIndex
          let bg = 'bg-slate-200'
          if (ans !== null) bg = isCorrect ? 'bg-green-400' : 'bg-red-400'
          if (i === current) bg = ans !== null ? (isCorrect ? 'bg-green-500 ring-2 ring-green-300' : 'bg-red-500 ring-2 ring-red-300') : 'bg-blue-500 ring-2 ring-blue-300'
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-6 h-6 rounded-full text-xs font-bold text-white transition-all ${bg}`}
              title={`ข้อ ${i + 1}`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
            {current + 1}
          </span>
          <div className="flex-1 min-w-0">
            {q.imageUrl && (
              <img
                src={q.imageUrl}
                alt="โจทย์"
                className="mb-3 rounded-lg border border-slate-200 max-w-full"
              />
            )}
            <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line text-sm md:text-base">
              {q.text}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {q.choices.map((choice, idx) => {
            let style = 'border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
            if (showAnswer && isAnswered) {
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
                {showAnswer && isAnswered && idx === q.correctIndex && (
                  <CheckCircle size={16} className="ml-auto text-green-500 shrink-0" />
                )}
                {showAnswer && isAnswered && idx === selected && idx !== q.correctIndex && (
                  <XCircle size={16} className="ml-auto text-red-500 shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Explanation */}
      {showAnswer && isAnswered && q.explanation && (
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

      {/* Navigation buttons */}
      <div className="flex items-center gap-2">
        {/* ย้อนกลับ */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} /> ย้อนกลับ
        </button>

        <div className="flex-1" />

        {/* ข้าม (แสดงเฉพาะตอนที่ยังไม่ตอบ) */}
        {!isAnswered && (
          <button
            onClick={skip}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-amber-300 text-amber-600 rounded-xl hover:bg-amber-50 transition-colors"
          >
            ข้าม <SkipForward size={16} />
          </button>
        )}

        {/* ถัดไป / ดูผลลัพธ์ */}
        {isAnswered && (
          <button
            onClick={next}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            {isLast && allAnswered ? (
              <><Trophy size={18} /> ดูผลลัพธ์</>
            ) : isLast && skippedCount > 0 ? (
              <>ไปข้อที่ข้าม ({skippedCount}) <ArrowRight size={18} /></>
            ) : (
              <>ข้อถัดไป <ArrowRight size={18} /></>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
