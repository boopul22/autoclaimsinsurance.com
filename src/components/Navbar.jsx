import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/#contact' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (to) => {
    setOpen(false)
    if (to.includes('#contact')) {
      if (location.pathname === '/') {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-[26px] sm:top-[28px] w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-18">
          <Link to="/" className="font-serif text-brand-700 text-base sm:text-lg lg:text-2xl tracking-tight font-bold truncate mr-2">
            InsuranceAutoClaim
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-gray-600 hover:text-brand-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8886263214"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              (888) 626-3214
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
            <a
              href="tel:8886263214"
              className="inline-flex items-center gap-1 bg-accent hover:bg-accent-dark text-white font-semibold px-3 py-1.5 rounded-full text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 text-gray-600 hover:text-brand-700"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="block text-gray-700 hover:text-brand-700 font-medium py-2 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8886263214"
              className="flex items-center gap-2 text-accent font-semibold py-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              (888) 626-3214
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
