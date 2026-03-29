import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:key" element={<ServiceDetail />} />
          <Route path="/projects/:key" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
