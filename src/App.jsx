import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import OtherSites from './pages/OtherSites'
import './App.css'

function App() {
  return (
    <Router basename="/dev">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/other-sites" element={<OtherSites />} />
      </Routes>
    </Router>
  )
}

export default App