import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(href), 100)
    } else {
      scrollToSection(href)
    }
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`bg-navy sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'shadow-[0_2px_20px_rgba(0,0,0,0.3)]'}`}>
      <div className="max-w-[1240px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={() => navigate('/')}>
          <div className="font-mont text-[19px] font-black text-white leading-tight">ShopFittings</div>
          <div className="font-mont text-[10px] font-semibold text-orange tracking-[2.5px] uppercase mt-0.5">Solutions Group</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:0738899040" className="font-mont text-[13px] font-semibold text-white hover:text-orange transition-colors whitespace-nowrap">
            (07) 3889 9040
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="btn-orange text-[11px] tracking-widest py-3 px-6 whitespace-nowrap"
          >
            Get a Quote
          </button>
        </div>

        {/* Burger */}
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed top-[68px] left-0 right-0 bg-navy2 z-50 border-t border-white/10 pb-4">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-6 py-3.5 font-mont text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-4">
            <button
              onClick={() => handleNav('contact')}
              className="btn-orange w-full text-center py-3.5"
            >
              Get a Free Quote →
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
