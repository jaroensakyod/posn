import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChemistryDashboard from './pages/chemistry/ChemistryDashboard'
import Lessons from './pages/chemistry/Lessons'
import LessonDetail from './pages/chemistry/LessonDetail'
import Practice from './pages/chemistry/Practice'
import Exams from './pages/chemistry/Exams'
import Analytics from './pages/chemistry/Analytics'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
