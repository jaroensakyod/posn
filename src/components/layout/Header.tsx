import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlaskConical, ChevronRight, Home } from 'lucide-react'
import UserMenu from '../auth/UserMenu'
import LoginModal from '../auth/LoginModal'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[]
  title?: string
}

export default function Header({ breadcrumbs, title }: HeaderProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 px-4 md:px-6 h-14">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FlaskConical size={18} className="text-white" />
            </div>
            <span className="font-bold text-slate-800 hidden sm:block">POSN Academy</span>
          </Link>

          {breadcrumbs && breadcrumbs.length > 0 && (
            <>
              <ChevronRight size={16} className="text-slate-400 shrink-0" />
              <nav className="flex items-center gap-1 text-sm overflow-hidden flex-1 min-w-0">
                {!isHome && (
                  <>
                    <Link to="/" className="text-slate-500 hover:text-blue-600 shrink-0">
                      <Home size={14} />
                    </Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                  </>
                )}
                {breadcrumbs.map((b, i) => (
                  <div key={i} className="flex items-center gap-1 min-w-0">
                    {i > 0 && <ChevronRight size={14} className="text-slate-300 shrink-0" />}
                    {b.path && i < breadcrumbs.length - 1 ? (
                      <Link to={b.path} className="text-slate-500 hover:text-blue-600 truncate">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-slate-700 font-medium truncate">{b.label}</span>
                    )}
                  </div>
                ))}
              </nav>
            </>
          )}

          {title && !breadcrumbs && (
            <>
              <ChevronRight size={16} className="text-slate-400" />
              <h1 className="text-slate-700 font-semibold truncate flex-1">{title}</h1>
            </>
          )}

          <div className="ml-auto shrink-0">
            <UserMenu onLoginClick={() => setShowLogin(true)} />
          </div>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  )
}
