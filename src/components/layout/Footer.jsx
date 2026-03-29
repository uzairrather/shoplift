import { useNavigate } from 'react-router-dom'
import { SERVICES_LIST } from '../../data'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

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
              Brisbane's trusted shopfitters since 2002. 100% committed to delivering all fitouts on time and on budget.
            </p>
            <div className="flex gap-2 mt-4">
              {['f', 'in', 'ig'].map(s => (
                <a key={s} href="#" className="w-8 h-8 bg-white/5 flex items-center justify-center text-xs text-white/40 hover:bg-orange hover:text-white transition-all">
                  {s}
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
                { label: 'Home', action: () => navigate('/') },
                { label: 'About Us', action: () => goHome('why-us') },
                { label: 'Our Projects', action: () => goHome('projects') },
                { label: 'Testimonials', action: () => goHome('testimonials') },
                { label: 'Contact Us', action: () => goHome('contact') },
              ].map(item => (
                <li key={item.label}>
                  <button onClick={item.action} className="text-xs text-white/40 hover:text-white transition-colors font-light text-left">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-orange mb-4">Service Areas</div>
            <ul className="flex flex-col gap-2.5">
              {['Brisbane CBD', 'North Brisbane', 'South Brisbane', 'Gold Coast', 'Sunshine Coast', 'Toowoomba'].map(a => (
                <li key={a}><span className="text-xs text-white/40 font-light">{a}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[11px] text-white/22 font-mont">© 2024 ShopFittings Solutions Group. All rights reserved.</span>
          <span className="text-[11px] text-white/22 font-mont">QBCC Licence No. 000000 · ABN: 00 000 000 000</span>
        </div>
      </div>
    </footer>
  )
}
