import { ReactNode } from 'react'
import Header from './Header'
import SubjectSidebar from './SubjectSidebar'
import MobileBottomNav from './MobileBottomNav'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface SubjectLayoutProps {
  subject: 'chemistry'
  breadcrumbs?: BreadcrumbItem[]
  children: ReactNode
}

export default function SubjectLayout({ subject, breadcrumbs, children }: SubjectLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header breadcrumbs={breadcrumbs} />
      <div className="flex flex-1 overflow-hidden">
        <SubjectSidebar subject={subject} />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-6">
          {children}
        </main>
      </div>
      <MobileBottomNav subject={subject} />
    </div>
  )
}
