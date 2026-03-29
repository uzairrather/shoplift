import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { STATS } from '../../data'
import { useCountUp } from '../../hooks'

function StatItem({ num, suffix, label }) {
  const ref = useCountUp(num)
  return (
    <div className="pr-7 mr-7 border-r border-white/10 last:border-r-0 last:mr-0 last:pr-0">
      <div className="font-mont text-[34px] font-black text-white leading-none">
        <span ref={ref}>0</span>
        <em className="not-italic text-orange text-[22px]">{suffix}</em>
      </div>
      <div className="font-mont text-[9px] font-bold uppercase tracking-[2px] text-white/35 mt-1">{label}</div>
    </div>
  )
}

const PROJECT_TYPES = ['Retail Fitout', 'Commercial Fitout', 'Office Fitout', 'Hospitality Fitout', 'Medical / Healthcare', 'Bespoke Joinery']

export default function Hero() {
  const heroRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('[data-anim]')
    items?.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 130)
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[91vh] flex items-center overflow-hidden bg-navy2">
      {/* BG */}
      <div
        className="absolute inset-0 opacity-[0.17]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,16,28,0.97)] via-[rgba(10,16,28,0.92)] to-[rgba(10,16,28,0.7)]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px)' }} />

      <div className="max-w-[1240px] mx-auto px-6 py-20 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center" ref={heroRef}>
        {/* LEFT */}
        <div>
          <div data-anim className="inline-flex items-center gap-2.5 font-mont text-[11px] font-bold tracking-[3px] uppercase text-orange mb-5">
            <span className="w-7 h-0.5 bg-orange" />
            Brisbane's Trusted Shopfitters Since 2002
          </div>

          <h1 data-anim className="font-mont font-black leading-[0.95] tracking-[-2px] text-white mb-3" style={{ fontSize: 'clamp(42px,5.5vw,72px)' }}>
            QUALITY<br />
            <span className="text-orange">FITOUTS.</span>
          </h1>

          <p data-anim className="font-mont font-semibold text-white/45 tracking-[2px] uppercase mb-6" style={{ fontSize: 'clamp(13px,1.8vw,17px)' }}>
            On Spec · On Time · On Budget
          </p>

          <p data-anim className="text-[15px] leading-[1.85] text-white/55 max-w-[520px] mb-10 font-light">
            100% committed to completing all retail, office, medical and commercial fitouts on time and on budget. Quality workmanship and client satisfaction are our fundamental values.
          </p>

          <div data-anim className="flex flex-wrap gap-3.5 mb-12">
            <button onClick={() => scrollTo('contact')} className="btn-orange">Get a Free Quote</button>
            <button onClick={() => scrollTo('projects')} className="btn-white-outline">View Our Work</button>
          </div>

          <div data-anim className="flex flex-wrap gap-0 pt-5 border-t border-white/10">
            {STATS.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>

        {/* QUOTE CARD */}
        <div data-anim className="hidden lg:block bg-white/[0.04] border border-white/10 p-9">
          <div className="font-mont text-[15px] font-black uppercase tracking-[0.5px] text-white mb-1">Get a Free Quote</div>
          <div className="text-[11px] text-white/35 mb-6">We'll respond within 24 hours</div>

          {['Your full name', 'Phone number', 'Email address'].map(p => (
            <input
              key={p}
              type="text"
              placeholder={p}
              className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 text-white text-[13px] placeholder-white/28 outline-none focus:border-orange transition-colors mb-2.5 font-sans"
            />
          ))}

          <select className="w-full px-4 py-3 bg-[rgba(25,35,50,0.95)] border border-white/10 text-white/55 text-[13px] outline-none mb-2.5 appearance-none cursor-pointer" defaultValue="">
            <option value="" disabled>Project type</option>
            {PROJECT_TYPES.map(t => <option key={t} style={{ background: '#1a2332' }}>{t}</option>)}
          </select>

          <button
            onClick={() => scrollTo('contact')}
            className="btn-orange w-full text-center mt-2 py-3.5 text-[11px] tracking-[2px]"
          >
            Request Free Quote →
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-white/28 font-mont">
            <span className="w-1 h-1 rounded-full bg-orange" />
            No obligation
            <span className="w-1 h-1 rounded-full bg-orange" />
            Free
            <span className="w-1 h-1 rounded-full bg-orange" />
            24hr response
          </div>
        </div>
      </div>
    </section>
  )
}
