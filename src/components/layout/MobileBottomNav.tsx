import { Link, useLocation } from 'react-router-dom'
import { BookOpen, PenTool, FileText, LayoutDashboard, BarChart2 } from 'lucide-react'

interface MobileBottomNavProps {
  subject: 'chemistry'
}

const navItems = {
  chemistry: [
    { label: 'หน้าหลัก', path: '/chemistry',           icon: LayoutDashboard, exact: true },
    { label: 'บทเรียน',  path: '/chemistry/lessons',   icon: BookOpen },
    { label: 'ฝึกหัด',   path: '/chemistry/practice',  icon: PenTool },
    { label: 'วิเคราะห์',path: '/chemistry/analytics', icon: BarChart2 },
    { label: 'ข้อสอบ',   path: '/chemistry/exams',     icon: FileText },
  ],
}

export default function MobileBottomNav({ subject }: MobileBottomNavProps) {
  const location = useLocation()
  const items = navItems[subject]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 flex safe-area-pb">
      {items.map((item) => {
        const Icon = item.icon
        const active = item.exact
          ? location.pathname === item.path
          : location.pathname.startsWith(item.path)
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
              active ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <Icon size={19} strokeWidth={active ? 2.5 : 1.5} />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
