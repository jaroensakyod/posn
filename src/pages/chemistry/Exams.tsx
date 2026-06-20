import { useState } from 'react'
import { ExternalLink, FileText, Calendar, X, PencilLine, RotateCcw, Trophy } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'
import QuizView from '../../components/chemistry/QuizView'
import { Question } from '../../data/chemistry/questions'
import { getExamPracticeByYear, getAnswerableCountByYear } from '../../data/chemistry/examPractice'

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
  phase: 'quiz' | 'result'
  score: number
}

export default function Exams() {
  const [viewing, setViewing] = useState<ExamEntry | null>(null)
  const [quiz, setQuiz] = useState<QuizState | null>(null)
  const answerableCount = getAnswerableCountByYear()

  function startQuiz(exam: ExamEntry) {
    const questions = getExamPracticeByYear(exam.thYear)
    if (questions.length === 0) return
    setQuiz({ exam, questions, phase: 'quiz', score: 0 })
  }

  function finishQuiz(score: number) {
    setQuiz((q) => (q ? { ...q, phase: 'result', score } : q))
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
                    เปิดดู
                  </button>
                  <a
                    href={`/exams/${exam.filename}`}
                    download
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
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

      {/* Online quiz modal */}
      {quiz && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-3">
            <div className="flex items-center gap-3">
              <PencilLine size={18} />
              <span className="font-medium text-sm truncate">{quiz.exam.label}</span>
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
                <QuizView questions={quiz.questions} onFinish={finishQuiz} />
              )}
              {quiz.phase === 'result' && (
                <div className="flex flex-col items-center text-center space-y-5 py-6">
                  {(() => {
                    const pct = Math.round((quiz.score / quiz.questions.length) * 100)
                    const level =
                      pct >= 80 ? { label: 'ยอดเยี่ยม! 🎉', color: 'text-green-600', bg: 'bg-green-50', ring: 'ring-green-300' }
                      : pct >= 60 ? { label: 'ดี! 👍', color: 'text-blue-600', bg: 'bg-blue-50', ring: 'ring-blue-300' }
                      : { label: 'ลองอีกครั้ง 💪', color: 'text-orange-600', bg: 'bg-orange-50', ring: 'ring-orange-300' }
                    return (
                      <>
                        <div className={`w-32 h-32 rounded-full ${level.bg} ring-4 ${level.ring} flex flex-col items-center justify-center`}>
                          <div className={`text-4xl font-bold ${level.color}`}>{pct}%</div>
                          <div className="text-xs text-slate-500">{quiz.score}/{quiz.questions.length} ข้อ</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center gap-2 text-xl font-bold">
                            <Trophy size={20} className={level.color} />
                            <span className={level.color}>{level.label}</span>
                          </div>
                          <p className="text-slate-500 text-sm mt-1">{quiz.exam.label}</p>
                          <p className="text-xs text-slate-400 mt-1">
                            (เฉพาะข้อที่ตอบในเว็บได้ ไม่รวมข้อที่ต้องดูรูปประกอบ)
                          </p>
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
