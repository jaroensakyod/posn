import { Link } from 'react-router-dom'
import { FlaskConical, ArrowRight, BookOpen, PenTool, FileText, Trophy } from 'lucide-react'
import Header from '../components/layout/Header'

const subjects = [
  {
    id: 'chemistry',
    name: 'เคมี',
    nameEn: 'Chemistry',
    emoji: '⚗️',
    description: 'อะตอม พันธะเคมี สมดุล ไฟฟ้าเคมี และอีกมากมาย',
    path: '/chemistry',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    border: 'border-blue-100',
    textColor: 'text-blue-700',
    available: true,
    topicsCount: 12,
  },
  {
    id: 'physics',
    name: 'ฟิสิกส์',
    nameEn: 'Physics',
    emoji: '⚡',
    description: 'กลศาสตร์ ไฟฟ้า คลื่น และควอนตัม',
    path: '/physics',
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    border: 'border-violet-100',
    textColor: 'text-violet-700',
    available: false,
    topicsCount: 0,
  },
  {
    id: 'biology',
    name: 'ชีววิทยา',
    nameEn: 'Biology',
    emoji: '🧬',
    description: 'เซลล์ พันธุศาสตร์ นิเวศวิทยา และสรีรวิทยา',
    path: '/biology',
    color: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    border: 'border-green-100',
    textColor: 'text-green-700',
    available: false,
    topicsCount: 0,
  },
  {
    id: 'math',
    name: 'คณิตศาสตร์',
    nameEn: 'Mathematics',
    emoji: '📐',
    description: 'พีชคณิต แคลคูลัส ความน่าจะเป็น และจำนวนเต็ม',
    path: '/math',
    color: 'from-orange-500 to-red-500',
    bgLight: 'bg-orange-50',
    border: 'border-orange-100',
    textColor: 'text-orange-700',
    available: false,
    topicsCount: 0,
  },
]

const features = [
  { icon: BookOpen, label: 'เนื้อหาครบถ้วน', desc: 'บทเรียนพร้อมสูตรและตัวอย่าง' },
  { icon: PenTool, label: 'แบบฝึกหัด', desc: 'โจทย์พร้อมเฉลยอธิบาย' },
  { icon: FileText, label: 'ข้อสอบเก่า', desc: 'ย้อนหลังตั้งแต่ปี 60–68' },
  { icon: Trophy, label: 'ติดตามความก้าวหน้า', desc: 'ดูสถิติและคะแนนของคุณ' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
          <FlaskConical size={32} className="text-white" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-3 leading-tight">
          POSN Academy
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-2 font-medium">
          เตรียมสอบคัดเลือก <span className="text-blue-600 font-semibold">ค่าย สอวน</span>
        </p>
        <p className="text-slate-400 text-sm md:text-base max-w-md">
          เรียนรู้เนื้อหา ฝึกทำโจทย์ และทบทวนข้อสอบเก่าเพื่อเตรียมพร้อมสำหรับการสอบคัดเลือกค่าย 1
        </p>
      </section>

      {/* Features */}
      <section className="px-4 mb-10">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((f) => (
            <div key={f.label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-center">
              <f.icon size={24} className="text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-slate-700 mb-0.5">{f.label}</div>
              <div className="text-xs text-slate-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Cards */}
      <section className="flex-1 px-4 pb-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-slate-600 mb-4 text-center">เลือกวิชาที่ต้องการเรียน</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subjects.map((subject) => (
              subject.available ? (
                <Link
                  key={subject.id}
                  to={subject.path}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-3xl mb-2 block">{subject.emoji}</span>
                        <h3 className="text-lg font-bold text-slate-800">{subject.name}</h3>
                        <p className="text-xs text-slate-400 mb-2">{subject.nameEn}</p>
                        <p className="text-sm text-slate-500">{subject.description}</p>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-1 shrink-0"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${subject.bgLight} ${subject.textColor}`}>
                        {subject.topicsCount} หัวข้อ
                      </span>
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">
                        พร้อมใช้งาน
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={subject.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm opacity-60 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${subject.color} opacity-40`} />
                  <div className="p-5">
                    <span className="text-3xl mb-2 block grayscale">{subject.emoji}</span>
                    <h3 className="text-lg font-bold text-slate-600">{subject.name}</h3>
                    <p className="text-xs text-slate-400 mb-2">{subject.nameEn}</p>
                    <p className="text-sm text-slate-400">{subject.description}</p>
                    <div className="mt-4">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-400">
                        เร็วๆ นี้
                      </span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-xs text-slate-400">
        POSN Academy — เตรียมพร้อมสำหรับสอวน ค่าย 1
      </footer>
    </div>
  )
}
