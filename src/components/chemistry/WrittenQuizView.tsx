import { useState } from 'react'
import { ChevronLeft, ChevronRight, Eye, EyeOff, CheckCircle } from 'lucide-react'
import type { WrittenQuestion } from '../../data/chemistry/writtenExamQuestions'

interface Props {
  questions: WrittenQuestion[]
  onFinish: (answered: number) => void
}

export default function WrittenQuizView({ questions, onFinish }: Props) {
  const [idx, setIdx] = useState(0)
  const [revealedSubs, setRevealedSubs] = useState<Set<string>>(new Set())
  const [answeredQ, setAnsweredQ] = useState<Set<string>>(new Set())

  const q = questions[idx]
  if (!q) return null

  function toggleReveal(subKey: string) {
    setRevealedSubs((prev) => {
      const next = new Set(prev)
      next.has(subKey) ? next.delete(subKey) : next.add(subKey)
      return next
    })
  }

  function markAnswered(qid: string) {
    setAnsweredQ((prev) => new Set([...prev, qid]))
  }

  function next() {
    if (idx < questions.length - 1) {
      setIdx(idx + 1)
    } else {
      onFinish(answeredQ.size)
    }
  }

  function prev() {
    if (idx > 0) setIdx(idx - 1)
  }

  const isDone = answeredQ.has(q.id)
  const allSubsRevealed = q.subQuestions.every((s) => revealedSubs.has(`${q.id}-${s.label}`))

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 shrink-0">
          ข้อเขียน {idx + 1}/{questions.length}
        </span>
        <div className="flex-1 bg-slate-100 rounded-full h-1.5">
          <div
            className="bg-violet-500 h-1.5 rounded-full transition-all"
            style={{ width: `${((idx + 1) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-violet-600 font-medium shrink-0">
          {answeredQ.size}/{questions.length} ตอบแล้ว
        </span>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-violet-50 border-b border-violet-100">
          <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
            {q.questionNum}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
              ข้อเขียน · {q.totalPoints} คะแนน
            </span>
          </div>
          {isDone && (
            <CheckCircle size={18} className="text-emerald-500 shrink-0" />
          )}
        </div>

        {/* Context */}
        {(q.contextText || q.imageUrl) && (
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              ข้อมูลที่กำหนด
            </p>
            {q.imageUrl && (
              <img src={q.imageUrl} alt="โจทย์" className="mb-2 rounded-lg border border-slate-200 max-w-full" />
            )}
            {q.contextText && (
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {q.contextText}
              </p>
            )}
          </div>
        )}

        {/* Sub-questions */}
        <div className="divide-y divide-slate-50">
          {q.subQuestions.map((sub) => {
            const subKey = `${q.id}-${sub.label}`
            const revealed = revealedSubs.has(subKey)
            return (
              <div key={sub.label} className="px-4 py-4">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                    {sub.label}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed flex-1">
                    {sub.text}
                  </p>
                  <span className="text-xs text-slate-400 shrink-0">({sub.points} คะแนน)</span>
                </div>

                {/* Thinking area hint */}
                {!revealed && (
                  <div className="ml-6 mb-2 bg-slate-50 border border-dashed border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 italic">
                    คิดคำตอบก่อน แล้วกดดูเฉลย ↓
                  </div>
                )}

                {/* Answer reveal */}
                {revealed && (
                  <div className="ml-6 mb-2 pl-3 border-l-2 border-emerald-400 bg-emerald-50 rounded-r-lg px-3 py-2">
                    <p className="text-xs text-emerald-600 font-semibold mb-0.5">เฉลย</p>
                    <p className="text-sm text-emerald-800 leading-relaxed whitespace-pre-line">
                      {sub.answer}
                      {sub.unit && (
                        <span className="text-slate-500 ml-1">({sub.unit})</span>
                      )}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => toggleReveal(subKey)}
                  className={`ml-6 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                    revealed
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      : 'bg-violet-600 text-white hover:bg-violet-700'
                  }`}
                >
                  {revealed ? <EyeOff size={13} /> : <Eye size={13} />}
                  {revealed ? 'ซ่อนเฉลย' : 'ดูเฉลย'}
                </button>
              </div>
            )
          })}
        </div>

        {/* Mark as answered */}
        {allSubsRevealed && !isDone && (
          <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100">
            <button
              onClick={() => markAnswered(q.id)}
              className="w-full flex items-center justify-center gap-2 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              <CheckCircle size={15} />
              ทำเครื่องหมายว่าตอบแล้ว
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          disabled={idx === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} /> ก่อนหน้า
        </button>
        <div className="flex-1" />
        {idx < questions.length - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors"
          >
            ถัดไป <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={next}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
          >
            เสร็จสิ้น <CheckCircle size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
