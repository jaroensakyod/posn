import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const ChemistryDashboard = lazy(() => import('./pages/chemistry/ChemistryDashboard'))
const Lessons = lazy(() => import('./pages/chemistry/Lessons'))
const LessonDetail = lazy(() => import('./pages/chemistry/LessonDetail'))
const Practice = lazy(() => import('./pages/chemistry/Practice'))
const Exams = lazy(() => import('./pages/chemistry/Exams'))
const Analytics = lazy(() => import('./pages/chemistry/Analytics'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chemistry" element={<ChemistryDashboard />} />
          <Route path="/chemistry/lessons" element={<Lessons />} />
          <Route path="/chemistry/lessons/:topicId" element={<LessonDetail />} />
          <Route path="/chemistry/practice" element={<Practice />} />
          <Route path="/chemistry/practice/:topicId" element={<Practice />} />
          <Route path="/chemistry/exams" element={<Exams />} />
          <Route path="/chemistry/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
