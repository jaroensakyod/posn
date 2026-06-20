import { useState } from 'react'
import { ExternalLink, FileText, Calendar, X } from 'lucide-react'
import SubjectLayout from '../../components/layout/SubjectLayout'

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

export default function Exams() {
  const [viewing, setViewing] = useState<ExamEntry | null>(null)

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
          <p className="text-slate-500 text-sm">รวมข้อสอบคัดเลือกค่าย 1 ย้อนหลังตั้งแต่ปี 2560–2568</p>
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

                <div className="flex gap-2 mt-3">
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
    </SubjectLayout>
  )
}
