import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Showreel from '../pages/Showreel'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Hire from '../pages/Hire'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/showreel" element={<Showreel />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes