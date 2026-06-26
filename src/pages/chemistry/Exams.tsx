import { useState } from 'react'
import { ExternalLink, FileText, Calendar, X, PencilLine, RotateCcw, Trophy, BookOpen, ChevronDown, ChevronUp, PenLine } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import QuizView from '../../components/chemistry/QuizView'
import WrittenQuizView from '../../components/chemistry/WrittenQuizView'
import { Question } from '../../data/chemistry/questions'
import { getExamPracticeByYear, getAnswerableCountByYear } from '../../data/chemistry/examPractice'
import { getWrittenQuestionsByYear, getWrittenTotalPoints, WrittenQuestion } from '../../data/chemistry/writtenExamQuestions'
import { getExamQuestionsByYear, PastExamQuestion } from '../../data/chemistry/pastExamQuestions'

interface ExamEntry {
  year: number
  thYear: number
  filename: string
  label: string
  topics: string[]
}

const exams: ExamEntry[] = [
  {
    year: 2017,
    thYear: 60,
    filename: 'posn1-60-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 60 (2560)',
    topics: ['อะตอม', 'พันธะเคมี', 'สมดุล', 'กรด-เบส'],
  },
  {
    year: 2018,
    thYear: 61,
    filename: 'posn1-61-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 61 (2561)',
    topics: ['ปริมาณสาร', 'เทอร์โมเคมี', 'จลนพลศาสตร์', 'สมดุล'],
  },
  {
    year: 2019,
    thYear: 62,
    filename: 'posn1-62-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 62 (2562)',
    topics: ['อะตอม', 'สถานะของสาร', 'ไฟฟ้าเคมี', 'เคมีอินทรีย์'],
  },
  {
    year: 2021,
    thYear: 64,
    filename: 'posn1-64-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 64 (2564)',
    topics: ['ตารางธาตุ', 'พันธะเคมี', 'กรด-เบส', 'ไฟฟ้าเคมี'],
  },
  {
    year: 2022,
    thYear: 65,
    filename: 'posn1-65-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 65 (2565)',
    topics: ['จลนพลศาสตร์', 'สมดุล', 'เทอร์โมเคมี', 'เคมีอินทรีย์'],
  },
  {
    year: 2023,
    thYear: 66,
    filename: 'posn1-66-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 66 (2566)',
    topics: ['อะตอม', 'สารละลาย', 'กรด-เบส', 'ปริมาณสาร'],
  },
  {
    year: 2024,
    thYear: 67,
    filename: 'posn1-67-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 67 (2567)',
    topics: ['ตารางธาตุ', 'พันธะเคมี', 'จลนพลศาสตร์', 'ไฟฟ้าเคมี'],
  },
  {
    year: 2025,
    thYear: 68,
    filename: 'posn1-68-chem.pdf',
    label: 'สอวน เคมี ค่าย 1 ปี 68 (2568)',
    topics: ['สมดุล', 'กรด-เบส', 'เทอร์โมเคมี', 'เคมีอินทรีย์'],
  },
]

interface QuizState {
  exam: ExamEntry
  questions: Question[]
  writtenQuestions: WrittenQuestion[]
  phase: 'quiz' | 'written' | 'result'
  score: number
  writtenAnswered: number
}

// ===== MC Answer Modal (ข้อ 1-60) =====
function MCAnswerModal({ exam, onClose }: { exam: ExamEntry; onClose: () => void }) {
  const questions = getExamQuestionsByYear(exam.thYear)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const choiceLabels = ['ก', 'ข', 'ค', 'ง']
  const topicColor: Record<string, string> = {
    'atomic-structure': 'bg-blue-100 text-blue-700',
    'chemical-bonding': 'bg-purple-100 text-purple-700',
    'stoichiometry': 'bg-emerald-100 text-emerald-700',
    'solutions': 'bg-cyan-100 text-cyan-700',
    'states-of-matter': 'bg-amber-100 text-amber-700',
    'equilibrium': 'bg-red-100 text-red-700',
    'thermochemistry': 'bg-orange-100 text-orange-700',
    'acid-base': 'bg-pink-100 text-pink-700',
    'electrochemistry': 'bg-indigo-100 text-indigo-700',
  }
  const topicName: Record<string, string> = {
    'atomic-structure': 'โครงสร้างอะตอม',
    'chemical-bonding': 'พันธะเคมี',
    'stoichiometry': 'สโตอิชิโอเมทรี',
    'solutions': 'สารละลาย',
    'states-of-matter': 'สถานะของสาร',
    'equilibrium': 'สมดุลเคมี',
    'thermochemistry': 'เทอร์โมเคมี',
    'acid-base': 'กรด-เบส',
    'electrochemistry': 'เคมีไฟฟ้า',
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
      <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3 shrink-0">
        <div className="flex items-center gap-3">
          <FileText size={18} />
          <div>
            <div className="font-medium text-sm">{exam.label}</div>
            <div className="text-xs text-slate-400">เฉลยข้อ 1–60 | {questions.length} ข้อ</div>
          </div>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-2">
          {questions.map((q) => {
            const isOpen = expandedId === q.id
            const colorClass = topicColor[q.topicId] ?? 'bg-slate-100 text-slate-600'
            const name = topicName[q.topicId] ?? q.topicId
            const correctLabel = choiceLabels[q.correctIndex]
            const correctText = q.choices[q.correctIndex]

            return (
              <div key={q.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setExpandedId(isOpen ? null : q.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {q.questionNum}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>{name}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        เฉลย: {correctLabel}
                      </span>
                      {q.imageUrl && (
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">📷 มีรูป</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{q.text}</p>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100">
                    {/* Question text */}
                    <div className="px-4 py-3 bg-slate-50">
                      <p className="text-sm text-slate-700 leading-relaxed">{q.text}</p>
                    </div>
                    {/* Choices */}
                    <div className="px-4 py-2 space-y-1.5">
                      {q.choices.map((choice, i) => {
                        const isCorrect = i === q.correctIndex
                        return (
                          <div
                            key={i}
                            className={`flex items-start gap-2 px-3 py-2 rounded-lg text-sm ${
                              isCorrect
                                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium'
                                : 'bg-slate-50 text-slate-600'
                            }`}
                          >
                            <span className={`font-bold shrink-0 ${isCorrect ? 'text-emerald-600' : 'text-slate-400'}`}>
                              {choiceLabels[i]}.
                            </span>
                            <span>{choice}</span>
                            {isCorrect && <span className="ml-auto shrink-0">✅</span>}
                          </div>
                        )
                      })}
                    </div>
                    {/* Explanation */}
                    {q.explanation && !q.explanation.startsWith('(verified)') && (
                      <div className="mx-4 mb-3 pl-3 border-l-2 border-blue-400 bg-blue-50 rounded-r-lg px-3 py-2">
                        <p className="text-xs text-blue-600 font-semibold mb-0.5">💡 คำอธิบาย</p>
                        <p className="text-sm text-blue-800 leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ===== Written Question Modal =====
function WrittenAnswerModal({ exam, onClose }: { exam: ExamEntry; onClose: () => void }) {
  const questions = getWrittenQuestionsByYear(exam.thYear)
  const totalPoints = getWrittenTotalPoints(exam.thYear)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const topicColor: Record<string, string> = {
    'atomic-structure': 'bg-blue-100 text-blue-700',
    'chemical-bonding': 'bg-purple-100 text-purple-700',
    'stoichiometry': 'bg-emerald-100 text-emerald-700',
    'solutions': 'bg-cyan-100 text-cyan-700',
    'states-of-matter': 'bg-amber-100 text-amber-700',
    'equilibrium': 'bg-red-100 text-red-700',
    'thermochemistry': 'bg-orange-100 text-orange-700',
    'acid-base': 'bg-pink-100 text-pink-700',
    'electrochemistry': 'bg-indigo-100 text-indigo-700',
  }
  const topicName: Record<string, string> = {
    'atomic-structure': 'โครงสร้างอะตอม',
    'chemical-bonding': 'พันธะเคมี',
    'stoichiometry': 'สโตอิชิโอเมทรี',
    'solutions': 'สารละลาย',
    'states-of-matter': 'สถานะของสาร',
    'equilibrium': 'สมดุลเคมี',
    'thermochemistry': 'เทอร์โมเคมี',
    'acid-base': 'กรด-เบส',
    'electrochemistry': 'เคมีไฟฟ้า',
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3 shrink-0">
        <div className="flex items-center gap-3">
          <BookOpen size={18} />
          <div>
            <div className="font-medium text-sm">{exam.label}</div>
            <div className="text-xs text-slate-400">ข้อเขียน ข้อ 61–75 | รวม {totalPoints} คะแนน</div>
          </div>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Note */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-800 shrink-0">
        ⚠️ บางข้ออ้างอิงตาราง/รูปในข้อสอบต้นฉบับ ควรเปิด PDF ควบคู่ด้วย
      </div>

      {/* Question list */}
      <div className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-3">
          {questions.map((q) => {
            const isOpen = expandedId === q.id
            const colorClass = topicColor[q.topicId] ?? 'bg-slate-100 text-slate-600'
            const name = topicName[q.topicId] ?? q.topicId
            return (
              <div key={q.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                {/* Question header — always visible */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : q.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {q.questionNum}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>{name}</span>
                      <span className="text-xs text-slate-400">{q.totalPoints} คะแนน</span>
                    </div>
                    {q.contextText && (
                      <p className="text-xs text-slate-500 mt-0.5 truncate">{q.contextText}</p>
                    )}
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                </button>

                {/* Expanded: sub-questions + answers */}
                {isOpen && (
                  <div className="border-t border-slate-100 divide-y divide-slate-50">
                    {/* Context */}
                    {q.contextText && (
                      <div className="px-4 py-3 bg-slate-50">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">ข้อมูลที่กำหนด</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{q.contextText}</p>
                      </div>
                    )}
                    {/* Sub-questions */}
                    {q.subQuestions.map((sub) => (
                      <div key={sub.label} className="px-4 py-3">
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-xs font-bold text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded shrink-0">ข้อ {sub.label}</span>
                          <p className="text-sm text-slate-700 leading-relaxed flex-1">{sub.text}</p>
                          <span className="text-xs text-slate-400 shrink-0">({sub.points} คะแนน)</span>
                        </div>
                        <div className="ml-2 pl-3 border-l-2 border-emerald-400">
                          <p className="text-xs text-emerald-600 font-semibold mb-0.5">เฉลย</p>
                          <p className="text-sm text-emerald-800 leading-relaxed">
                            {sub.answer}
                            {sub.unit ? <span className="text-slate-400 ml-1">({sub.unit})</span> : null}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Exams() {
  const [viewing, setViewing] = useState<ExamEntry | null>(null)
  const [quiz, setQuiz] = useState<QuizState | null>(null)
  const [writtenExam, setWrittenExam] = useState<ExamEntry | null>(null)
  const [mcExam, setMcExam] = useState<ExamEntry | null>(null)
  const answerableCount = getAnswerableCountByYear()

  function startQuiz(exam: ExamEntry) {
    const questions = getExamPracticeByYear(exam.thYear)
    const writtenQuestions = getWrittenQuestionsByYear(exam.thYear)
    if (questions.length === 0 && writtenQuestions.length === 0) return
    setQuiz({ exam, questions, writtenQuestions, phase: questions.length > 0 ? 'quiz' : 'written', score: 0, writtenAnswered: 0 })
  }

  function finishMC(score: number) {
    setQuiz((q) => {
      if (!q) return q
      if (q.writtenQuestions.length > 0) return { ...q, phase: 'written', score }
      return { ...q, phase: 'result', score }
    })
  }

  function finishWritten(answered: number) {
    setQuiz((q) => (q ? { ...q, phase: 'result', writtenAnswered: answered } : q))
  }

  return (
    <SubjectLayout
      subject="chemistry"
      breadcrumbs={[
        { label: 'เคมี', path: '/chemistry' },
        { label: 'ข้อสอบเก่า' },
      ]}
    >
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-1">ข้อสอบเก่า สอวน เคมี ค่าย 1</h1>
          <p className="text-slate-500 text-sm">รวมข้อสอบคัดเลือกค่าย 1 ย้อนหลังตั้งแต่ปี 2560–2568 — เปิดดู PDF หรือทำข้อสอบออนไลน์พร้อมเฉลย</p>
        </div>

        {/* Tip box */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-sm text-amber-800 font-medium">💡 คำแนะนำ</p>
          <p className="text-sm text-amber-700 mt-1">
            ข้อสอบ สอวน เคมี มักครอบคลุมหลายหัวข้อในกระดาษสอบเดียว
            แนะนำให้ทำโดยไม่ดูเนื้อหาก่อน แล้วค่อยตรวจสอบและกลับไปทบทวนหัวข้อที่ผิด
          </p>
        </div>

        {/* Exam list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exams.map((exam) => (
            <div
              key={exam.thYear}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-sm transition-all"
            >
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-slate-400" />
                      <span className="text-xs text-slate-400">ปี {exam.thYear}</span>
                    </div>
                    <h3 className="font-semibold text-slate-700 text-sm mt-0.5">{exam.label}</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {exam.topics.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {answerableCount[exam.thYear] > 0 && (
                  <button
                    onClick={() => startQuiz(exam)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 mt-3 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-colors"
                  >
                    <PencilLine size={14} />
                    ทำข้อสอบออนไลน์ ({answerableCount[exam.thYear]} ข้อ)
                  </button>
                )}

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setViewing(exam)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FileText size={14} />
                    เปิดดู PDF
                  </button>
                  <a
                    href={`/exams/${exam.filename}`}
                    download
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <button
                  onClick={() => setMcExam(exam)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 mt-2 text-sm font-medium bg-sky-50 text-sky-700 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors"
                >
                  <FileText size={14} />
                  เฉลยข้อ 1–60 (ปรนัย)
                </button>
                <button
                  onClick={() => setWrittenExam(exam)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 mt-2 text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200 rounded-lg hover:bg-violet-100 transition-colors"
                >
                  <BookOpen size={14} />
                  เฉลยข้อเขียน (ข้อ 61–75)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {viewing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3">
            <div className="flex items-center gap-3">
              <FileText size={18} />
              <span className="font-medium text-sm truncate">{viewing.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`/exams/${viewing.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink size={13} /> เปิดแท็บใหม่
              </a>
              <button
                onClick={() => setViewing(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`/exams/${viewing.filename}`}
              className="w-full h-full border-0"
              title={viewing.label}
            />
          </div>
        </div>
      )}

      {/* MC answer modal */}
      {mcExam && (
        <MCAnswerModal exam={mcExam} onClose={() => setMcExam(null)} />
      )}

      {/* Written questions modal */}
      {writtenExam && (
        <WrittenAnswerModal exam={writtenExam} onClose={() => setWrittenExam(null)} />
      )}

      {/* Online quiz modal */}
      {quiz && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3">
            <div className="flex items-center gap-3">
              {quiz.phase === 'written' ? <PenLine size={18} /> : <PencilLine size={18} />}
              <div>
                <span className="font-medium text-sm truncate">{quiz.exam.label}</span>
                {quiz.phase === 'written' && (
                  <span className="ml-2 text-xs bg-violet-500 text-white px-2 py-0.5 rounded-full">ข้อเขียน</span>
                )}
              </div>
            </div>
            <button
              onClick={() => setQuiz(null)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-slate-50">
            <div className="max-w-2xl mx-auto px-4 py-6">
              {quiz.phase === 'quiz' && (
                <QuizView questions={quiz.questions} onFinish={finishMC} />
              )}
              {quiz.phase === 'written' && (
                <div>
                  {quiz.questions.length > 0 && (
                    <div className="mb-4 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                      <Trophy size={16} className="text-emerald-600 shrink-0" />
                      <p className="text-sm text-emerald-700 font-medium">
                        ปรนัย: {quiz.score}/{quiz.questions.length} ข้อ — ต่อด้วยข้อเขียน
                      </p>
                    </div>
                  )}
                  <WrittenQuizView questions={quiz.writtenQuestions} onFinish={finishWritten} />
                </div>
              )}
              {quiz.phase === 'result' && (
                <div className="flex flex-col items-center text-center space-y-5 py-6">
                  {(() => {
                    const hasMC = quiz.questions.length > 0
                    const pct = hasMC ? Math.round((quiz.score / quiz.questions.length) * 100) : 0
                    const level =
                      !hasMC ? { label: 'เสร็จแล้ว!', color: 'text-violet-600', bg: 'bg-violet-50', ring: 'ring-violet-300' }
                      : pct >= 80 ? { label: 'ยอดเยี่ยม! 🎉', color: 'text-green-600', bg: 'bg-green-50', ring: 'ring-green-300' }
                      : pct >= 60 ? { label: 'ดี! 👍', color: 'text-blue-600', bg: 'bg-blue-50', ring: 'ring-blue-300' }
                      : { label: 'ลองอีกครั้ง 💪', color: 'text-orange-600', bg: 'bg-orange-50', ring: 'ring-orange-300' }
                    return (
                      <>
                        <div className={`w-32 h-32 rounded-full ${level.bg} ring-4 ${level.ring} flex flex-col items-center justify-center`}>
                          {hasMC ? (
                            <>
                              <div className={`text-4xl font-bold ${level.color}`}>{pct}%</div>
                              <div className="text-xs text-slate-500">{quiz.score}/{quiz.questions.length} ข้อ</div>
                            </>
                          ) : (
                            <div className="text-4xl">✏️</div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center justify-center gap-2 text-xl font-bold">
                            <Trophy size={20} className={level.color} />
                            <span className={level.color}>{level.label}</span>
                          </div>
                          <p className="text-slate-500 text-sm mt-1">{quiz.exam.label}</p>
                          {quiz.writtenQuestions.length > 0 && (
                            <p className="text-xs text-violet-600 mt-1 font-medium">
                              ข้อเขียน: ตอบแล้ว {quiz.writtenAnswered}/{quiz.writtenQuestions.length} ข้อ
                            </p>
                          )}
                          {hasMC && (
                            <p className="text-xs text-slate-400 mt-1">
                              (ปรนัยเฉพาะข้อที่ตอบในเว็บได้)
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                          <button
                            onClick={() => startQuiz(quiz.exam)}
                            className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 bg-white rounded-xl font-medium text-slate-600 hover:border-blue-300 transition-colors"
                          >
                            <RotateCcw size={16} /> ทำใหม่
                          </button>
                          <button
                            onClick={() => setQuiz(null)}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                          >
                            ปิด
                          </button>
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </SubjectLayout>
  )
}
