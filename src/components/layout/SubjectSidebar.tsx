import { Link, useLocation } from 'react-router-dom'
import { BookOpen, PenTool, FileText, LayoutDashboard, BarChart2 } from 'lucide-react'

interface SubjectSidebarProps {
  subject: 'chemistry'
}

const navItems = {
  chemistry: [
    { label: 'ภาพรวม',     path: '/chemistry',            icon: LayoutDashboard, exact: true },
    { label: 'บทเรียน',    path: '/chemistry/lessons',    icon: BookOpen },
    { label: 'แบบฝึกหัด', path: '/chemistry/practice',   icon: PenTool },
    { label: 'วิเคราะห์', path: '/chemistry/analytics',  icon: BarChart2 },
    { label: 'ข้อสอบเก่า', path: '/chemistry/exams',     icon: FileText },
  ],
}

export default function SubjectSidebar({ subject }: SubjectSidebarProps) {
  const location = useLocation()
  const items = navItems[subject]

  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-slate-200 bg-white min-h-[calc(100vh-3.5rem)]">
      <nav className="flex flex-col gap-1 p-3">
        {items.map((item) => {
          const Icon = item.icon
          const active = item.exact
            ? location.pathname === item.path
            : location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
