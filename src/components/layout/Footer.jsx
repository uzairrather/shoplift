import { useNavigate } from 'react-router-dom'
import { SERVICES_LIST } from '../../data'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="#0f1825" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/61412969268',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const navigate = useNavigate()

  const goHome = (id) => {
    navigate('/')
    setTimeout(() => scrollTo(id), 100)
  }

  return (
    <footer className="bg-navy2 pt-14 pb-0">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="cursor-pointer mb-3" onClick={() => navigate('/')}>
              <div className="font-mont text-lg font-black text-white">ShopFittings</div>
              <div className="font-mont text-[9px] font-semibold text-orange tracking-[3px] uppercase mt-1">Solutions Group</div>
            </div>
            <p className="text-xs text-white/38 leading-relaxed max-w-[200px] mt-3 font-light">
              Specialist retail design & delivery. From jewellery boutiques to Mini Majors — we build retail environments that drive sales across Australia.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 mt-5 flex-wrap">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-8 h-8 bg-white/[0.06] flex items-center justify-center text-white/40 hover:bg-orange hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-orange mb-4">Services</div>
            <ul className="flex flex-col gap-2.5">
              {SERVICES_LIST.map(s => (
                <li key={s.key}>
                  <button
                    onClick={() => navigate(`/services/${s.key}`)}
                    className="text-xs text-white/40 hover:text-white transition-colors font-light text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-orange mb-4">Company</div>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home',         action: () => navigate('/') },
                { label: 'About Us',     action: () => goHome('why-us') },
                { label: 'Gallery',      action: () => goHome('gallery') },
                { label: 'Our Projects', action: () => goHome('projects') },
                { label: 'Testimonials', action: () => goHome('testimonials') },
                { label: 'Contact Us',   action: () => goHome('contact') },
              ].map(item => (
                <li key={item.label}>
                  <button onClick={item.action} className="text-xs text-white/40 hover:text-white transition-colors font-light text-left">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-orange mb-4">Contact</div>
            <ul className="flex flex-col gap-3">
              {[
                { icon: '📍', val: '717 Gympie Road, Lawnton QLD 4501' },
                { icon: '📞', val: '(07) 3889 9040' },
                { icon: '✉️', val: 'info@shopfittings.com.au' },
                { icon: '🕐', val: 'Mon–Fri: 7:00am – 5:00pm' },
              ].map(item => (
                <li key={item.val} className="flex items-start gap-2">
                  <span className="text-[13px] flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-xs text-white/40 font-light leading-relaxed">{item.val}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/[0.06] py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[11px] text-white/22 font-mont">© 2025 ShopFittings Solutions Group. All rights reserved.</span>
          <span className="text-[11px] text-white/22 font-mont">QBCC Licence No. 000000 · ABN: 00 000 000 000</span>
        </div>
      </div>
    </footer>
  )
}