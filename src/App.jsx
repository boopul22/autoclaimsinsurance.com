import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmergencyBar from './components/EmergencyBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MobileStickyCta from './components/MobileStickyCta'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import PrivacyChoices from './pages/PrivacyChoices'
import WaHealth from './pages/WaHealth'
import Partners from './pages/Partners'
import Resources from './pages/Resources'

function App() {
  return (
    <BrowserRouter>
      <EmergencyBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/your-privacy-choices" element={<PrivacyChoices />} />
        <Route path="/wa-health-policy" element={<WaHealth />} />
        <Route path="/partners-and-sponsors" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <MobileStickyCta />
    </BrowserRouter>
  )
}

export default App
