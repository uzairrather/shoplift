import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReveal, useCountUp } from '../../hooks'
import { TRUST_ITEMS, SERVICES_LIST, PROJECTS_LIST, TESTIMONIALS, BRANDS, SECTORS, PROCESS_STEPS } from '../../data'

/* ── REVEAL WRAPPER ── */
function Reveal({ children, className = '', dir = 'up', delay = 0 }) {
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : 'reveal'
  const ref = useReveal()
  return (
    <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>
      {children}
    </div>
  )
}

/* ── TRUST STRIP ── */
export function TrustStrip() {
  return (
    <div className="bg-orange">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-3.5 py-5 px-5 border-r border-white/20 last:border-r-0">
            <span className="text-[26px] flex-shrink-0">{item.icon}</span>
            <div>
              <div className="font-mont text-[12px] font-black text-white uppercase tracking-[0.5px]">{item.title}</div>
              <div className="text-[11px] text-white/70 mt-0.5">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── SERVICES GRID ── */
export function ServicesGrid() {
  const navigate = useNavigate()
  return (
    <section id="services" className="py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
          <div>
            <Reveal><div className="section-eyebrow">What We Do</div></Reveal>
            <Reveal delay={80}><h2 className="section-title">Our Fitout Services</h2></Reveal>
            <Reveal delay={160}><p className="text-[14px] text-mgray leading-relaxed max-w-[520px] mt-3 font-light">From boutique retail stores to large commercial spaces — we handle everything in-house with expert tradespeople and dedicated project managers.</p></Reveal>
          </div>
          <Reveal><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="font-mont text-[11px] font-bold uppercase tracking-[1.5px] text-orange border-b-2 border-orange pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap">Get a Quote →</button></Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
          {SERVICES_LIST.map((svc, i) => (
            <Reveal key={svc.key} delay={i * 60}>
              <div
                onClick={() => navigate(`/services/${svc.key}`)}
                className="group bg-white hover:bg-offwhite transition-colors p-11 relative overflow-hidden cursor-pointer h-full"
                style={{ borderBottom: '4px solid transparent' }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#16a34a'}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
              >
                <div className="font-mont text-[46px] font-black text-navy/[0.055] absolute top-4 right-5 leading-none select-none">{svc.num}</div>
                <div className="w-[54px] h-[54px] bg-orange flex items-center justify-center text-[22px] mb-5 group-hover:scale-105 transition-transform">{svc.icon}</div>
                <h3 className="font-mont text-[15px] font-black text-navy uppercase tracking-[0.5px] mb-3">{svc.name}</h3>
                <p className="text-[13px] text-mgray leading-relaxed font-light">{svc.cardDesc}</p>
                <div className="inline-flex items-center gap-1.5 mt-4 font-mont text-[10px] font-bold uppercase tracking-[1.5px] text-orange">
                  Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ── SECTORS SECTION ── (NEW)
══════════════════════════════════════════════════ */
export function SectorsSection() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
          <div>
            <Reveal><div className="section-eyebrow">Industries We Serve</div></Reveal>
            <Reveal delay={80}><h2 className="section-title">We Work Across All Retail Sectors</h2></Reveal>
            <Reveal delay={160}>
              <p className="text-[14px] text-mgray leading-relaxed max-w-[520px] mt-3 font-light">
                Whether you're opening a luxury boutique or a bustling Mini Major — we bring industry-specific expertise to every project.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.name} delay={i * 60}>
              <div className="bg-white p-8 border-l-4 border-orange h-full hover:shadow-md transition-shadow">
                <h3 className="font-mont text-[15px] font-black text-navy uppercase tracking-[0.5px] mb-2">
                  {sector.name}
                </h3>
                <p className="text-[13px] text-mgray leading-relaxed font-light mb-4">
                  {sector.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.features.map(f => (
                    <span key={f} className="font-mont text-[10px] font-bold uppercase tracking-[1px] text-orange bg-orange/10 px-2.5 py-1">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ── PROCESS SECTION ── (NEW)
══════════════════════════════════════════════════ */
export function ProcessSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-14">
          <Reveal><div className="section-eyebrow text-orange">How It Works</div></Reveal>
          <Reveal delay={80}><h2 className="section-title text-white">Our Process</h2></Reveal>
          <Reveal delay={160}>
            <p className="text-[14px] text-white/45 leading-relaxed max-w-[500px] mt-3 font-light mx-auto">
              From first conversation to final handover — a clear, structured process that keeps you informed at every stage.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="bg-navy p-8 relative group hover:bg-navy2 transition-colors">
                {/* Step number */}
                <div className="font-mont text-[64px] font-black text-white/[0.05] absolute top-4 right-6 leading-none select-none">
                  {step.num}
                </div>
                {/* Orange accent line */}
                <div className="w-8 h-0.5 bg-orange mb-5" />
                {/* Title */}
                <h3 className="font-mont text-[14px] font-black text-white uppercase tracking-[0.5px] mb-2">
                  {step.title}
                </h3>
                {/* Desc */}
                <p className="text-[13px] text-white/45 leading-relaxed font-light mb-4">
                  {step.desc}
                </p>
                {/* Duration badge */}
                {step.duration && (
                  <span className="inline-block font-mont text-[10px] font-black uppercase tracking-[2px] text-orange bg-orange/10 px-3 py-1">
                    {step.duration}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ── GALLERY SECTION ──
══════════════════════════════════════════════════ */
const GALLERY_ITEMS = [
  // RETAIL
  { src: '/OPTIMIZED/Laloma HR/LLMAtville081212_008.webp', label: 'Premium Retail Fitout', cat: 'Retail' },
  { src: '/OPTIMIZED/NJ hires shots (1)/8.webp', label: 'Fashion Boutique Display', cat: 'Retail' },
  { src: '/OPTIMIZED/NJ hires shots (1)/14.webp', label: 'Jewellery Store Interior', cat: 'Retail' },
  { src: '/OPTIMIZED/Laloma HR/LLMAtville081212_045.webp', label: 'Luxury Display Shelving', cat: 'Retail' },
  { src: '/OPTIMIZED/NJ hires shots (1)/7.webp', label: 'Retail Shopfront', cat: 'Retail' },
  { src: '/OPTIMIZED/Laloma HR/LLMAtville081212_029.webp', label: 'Clothing Store Fitout', cat: 'Retail' },
  // HOSPITALITY
  { src: '/OPTIMIZED/IDS_ Sea Feul_1216 (1)/SeaFuel_1216_043.webp', label: 'Specialty Café Interior', cat: 'Hospitality' },
  { src: '/OPTIMIZED/IDS_ Sea Feul_1216 (1)/SeaFuel_1216_010.webp', label: 'Restaurant Dining Room', cat: 'Hospitality' },
  { src: '/OPTIMIZED/IDS_ Sea Feul_1216 (1)/SeaFuel_1216_020.webp', label: 'Bar & Pub Fitout', cat: 'Hospitality' },
  { src: '/OPTIMIZED/IDS_ Sea Feul_1216 (1)/SeaFuel_1216_022.webp', label: 'Coffee Shop Counter', cat: 'Hospitality' },
  { src: '/OPTIMIZED/IDS_ Sea Feul_1216 (1)/SeaFuel_1216_095.webp', label: 'QSR National Rollout', cat: 'Hospitality' },
  // COMMERCIAL
  { src: '/OPTIMIZED/DIAMOND LAB HI RES/ID_DL_0624_0186.webp', label: 'Corporate HQ Fitout', cat: 'Commercial' },
  { src: '/OPTIMIZED/DIAMOND LAB HI RES/ID_DL_0624_0093.webp', label: 'Open Plan Commercial', cat: 'Commercial' },
  { src: '/OPTIMIZED/DIAMOND LAB HI RES/ID_DL_0624_0128.webp', label: 'Commercial Building', cat: 'Commercial' },
  { src: '/OPTIMIZED/DIAMOND LAB HI RES/ID_DL_0624_0043.webp', label: 'Commercial Reception', cat: 'Commercial' },
  // OFFICE
  { src: '/OPTIMIZED/DIAMOND LAB HI RES/ID_DL_0624_0036.webp', label: 'Modern Open Plan Office', cat: 'Office' },
  { src: '/OPTIMIZED/PRINCESS NAILS 1/Princess_Nails_290519_0514.webp', label: 'Boardroom Fitout', cat: 'Office' },
  { src: '/OPTIMIZED/JEWELL PACK/Gordon/boxes/DSC05132.webp', label: 'Breakout Space', cat: 'Office' },
  // MEDICAL
  { src: '/OPTIMIZED/TOOMBUL B/TYoombul_Beauty_290519_0576.webp', label: 'Pharmacy Fitout', cat: 'Medical' },
  { src: '/OPTIMIZED/TOOMBUL B/Toombul_Beauty_290519_0587.webp', label: 'Medical Centre', cat: 'Medical' },
  { src: '/OPTIMIZED/TOOMBUL B/Toombul_Beauty_290519_0614.webp', label: 'Waiting Area', cat: 'Medical' },
  // JOINERY
  { src: '/OPTIMIZED/mazzone/IMG-0471 (1)-gigapixel-standard-scale-6_00x.webp', label: 'Bespoke Joinery', cat: 'Joinery' },
  { src: '/OPTIMIZED/mazzone/IMG-0485 (2)-gigapixel-standard-scale-6_00x (2).webp', label: 'Cabinet Work', cat: 'Joinery' },
  { src: '/OPTIMIZED/Diamonds international/DI_ch_018.webp', label: 'Kitchen Joinery', cat: 'Joinery' },
  { src: '/OPTIMIZED/NATHANS DIAMONDS PHOTOS/6.webp', label: 'Executive Cabinetry', cat: 'Joinery' },
]

const ALL_CATS = ['All', 'Retail', 'Hospitality', 'Commercial', 'Office', 'Medical', 'Joinery']

/* ── Shared IntersectionObserver ── */
const galleryObserver = typeof window !== 'undefined'
  ? new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            galleryObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    )
  : null

/* ── Lazy image ── */
function LazyImg({ src, alt }) {
  const [errored, setErrored] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (errored) {
    return (
      <div className="w-full bg-[#1a2332] flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
        <span className="text-white/20 text-xs font-mont uppercase tracking-widest">Photo</span>
      </div>
    )
  }

  return (
    <div className="w-full relative">
      {!loaded && (
        <div className="w-full bg-[#e8e8e8] animate-pulse" style={{ aspectRatio: '4/3' }} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-auto block transition-opacity duration-300 ${loaded ? 'opacity-100' : 'absolute inset-0 opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  )
}

/* ── Gallery Card ── */
function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el && galleryObserver) {
      galleryObserver.observe(el)
      return () => galleryObserver.unobserve(el)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="gallery-card break-inside-avoid mb-2 group relative overflow-hidden cursor-pointer bg-gray-100"
      onClick={onClick}
    >
      <LazyImg src={item.src} alt={item.label} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="font-mont text-[9px] font-bold uppercase tracking-[3px] text-orange mb-1">{item.cat}</div>
        <div className="font-mont text-[14px] font-black text-white leading-tight">{item.label}</div>
      </div>
      <div className="absolute top-3 right-3 w-9 h-9 bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </div>
    </div>
  )
}

export function GallerySection() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === active)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (lightbox === null) return
      if (e.key === 'ArrowLeft') setLightbox(i => (i - 1 + filtered.length) % filtered.length)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % filtered.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, filtered.length])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(i => (i + 1) % filtered.length)

  const counts = ALL_CATS.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(g => g.cat === cat).length
    return acc
  }, {})

  return (
    <section id="gallery" className="py-20 bg-white">
      <style>{`
        .gallery-card { opacity: 0; transform: translateY(8px); transition: opacity 0.25s ease, transform 0.25s ease; }
        .gallery-card.revealed { opacity: 1; transform: none; }
      `}</style>

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <Reveal><div className="section-eyebrow">Our Gallery</div></Reveal>
            <Reveal delay={80}><h2 className="section-title">Project Photo Gallery</h2></Reveal>
            <Reveal delay={160}>
              <p className="text-[14px] text-mgray leading-relaxed max-w-[540px] mt-3 font-light">
                Browse our portfolio of {GALLERY_ITEMS.length}+ completed fitouts across retail, hospitality, commercial, office, and medical sectors. Click any photo to view full screen.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="text-right flex-shrink-0">
              <div className="font-mont text-[48px] font-black text-navy leading-none">{filtered.length}</div>
              <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-mgray mt-1">
                {active === 'All' ? 'Total Projects' : `${active} Projects`}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-10">
            {ALL_CATS.map(cat => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightbox(null) }}
                className={`font-mont text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-200 border flex items-center gap-2
                  ${active === cat ? 'bg-orange text-white border-orange' : 'bg-white text-mgray border-lg hover:border-orange hover:text-orange'}`}
              >
                {cat}
                <span className={`text-[10px] font-black ${active === cat ? 'text-white/70' : 'text-mgray/60'}`}>{counts[cat]}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2">
          {filtered.map((item, i) => (
            <GalleryCard key={`${active}-${i}`} item={item} index={i} onClick={() => setLightbox(i)} />
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/96 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-orange flex items-center justify-center text-white text-lg transition-colors z-10">✕</button>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 font-mont text-[11px] font-bold uppercase tracking-[2px] text-white/40 z-10">{lightbox + 1} / {filtered.length}</div>
          <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-orange flex items-center justify-center text-white text-3xl transition-colors z-10">‹</button>
          <div className="relative mx-16 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.label} className="w-full max-h-[75vh] object-contain" onError={e => { e.target.style.opacity = '0.3' }} />
            <div className="absolute bottom-0 left-0 right-0 bg-navy px-6 py-4 flex items-center justify-between">
              <div>
                <div className="font-mont text-[9px] font-bold uppercase tracking-[3px] text-orange mb-1">{filtered[lightbox]?.cat}</div>
                <div className="font-mont text-[16px] font-black text-white leading-tight">{filtered[lightbox]?.label}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={e => { e.stopPropagation(); prev() }} className="w-9 h-9 bg-white/10 hover:bg-orange flex items-center justify-center text-white text-xl transition-colors">‹</button>
                <button onClick={e => { e.stopPropagation(); next() }} className="w-9 h-9 bg-white/10 hover:bg-orange flex items-center justify-center text-white text-xl transition-colors">›</button>
              </div>
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-orange flex items-center justify-center text-white text-3xl transition-colors z-10">›</button>
          <div className="absolute left-0 right-0 flex gap-1.5 p-2 overflow-x-auto bg-black/80 z-10" style={{ bottom: '68px' }}>
            {filtered.map((item, i) => (
              <div key={i} onClick={e => { e.stopPropagation(); setLightbox(i) }} className={`flex-shrink-0 w-16 h-16 overflow-hidden cursor-pointer border-2 transition-all ${i === lightbox ? 'border-orange' : 'border-transparent opacity-40 hover:opacity-80'}`}>
                <img src={item.src} alt="" loading="lazy" className="w-full h-full object-cover" onError={e => { e.target.style.opacity = '0' }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

/* ── WHY US ── */
const FEATURES = [
  { icon: '🏭', title: 'In-House Manufacturing', desc: "Our joinery manufacturing ensures quality control and keeps costs down — no outsourcing mark-up, ever." },
  { icon: '👷', title: 'Qualified Trades Team', desc: "Qualified tradespeople means quality workmanship and attention to detail. Done right the first time." },
  { icon: '📋', title: 'Dedicated Project Manager', desc: "Single point of contact from estimation to completion. Always updated, always on schedule." },
  { icon: '💰', title: 'Big Budget Savings', desc: "In-house capacity — tradespeople, machinery, and experience — adds up to big savings on your budget." },
]

const WHY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80', label: 'Retail Fitout', tall: true },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', label: 'Office', tall: false },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', label: 'Café', tall: false },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal dir="left">
            <div className="section-eyebrow text-orange">Why Choose Us</div>
            <h2 className="section-title text-white mt-0">Building Inspiring<br />Spaces Since 2002</h2>
            <p className="text-[14px] text-white/45 leading-relaxed mt-3 font-light max-w-[480px]">
              With over 20 years of shopfitting experience, we offer a high level of professionalism and expertise trusted by Australia's most recognisable brands.
            </p>
            <div className="mt-8 flex flex-col">
              {FEATURES.map(f => (
                <div key={f.title} className="flex gap-4 py-5 border-b border-white/[0.07] first:border-t first:border-white/[0.07] items-start">
                  <div className="w-11 h-11 bg-orange/[0.14] border border-orange/28 flex items-center justify-center text-[18px] flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-mont text-[13px] font-bold text-white mb-1.5">{f.title}</div>
                    <div className="text-[13px] text-white/45 leading-relaxed font-light">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right">
            <div className="relative">
              <div className="grid grid-cols-2 grid-rows-2 gap-1">
                {WHY_IMGS.map((img, i) => (
                  <div key={i} className={`overflow-hidden bg-[#1a2a3a] ${img.tall ? 'row-span-2' : ''}`}>
                    <img src={img.src} alt={img.label} loading="lazy" decoding="async" className={`w-full object-cover brightness-75 hover:brightness-90 transition-all duration-500 hover:scale-105 ${img.tall ? 'h-[424px]' : 'h-[210px]'}`} onError={e => { e.target.style.display = 'none' }} />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange px-6 py-5 text-center">
                <div className="font-mont text-[40px] font-black text-white leading-none">20+</div>
                <div className="font-mont text-[9px] font-bold uppercase tracking-[2px] text-white/75 mt-1">Years of Excellence</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── PROJECTS GRID ── */
export function ProjectsGrid() {
  const navigate = useNavigate()
  const [pandora, ...rest] = PROJECTS_LIST
  return (
    <section id="projects" className="bg-offwhite py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-14">
          <div>
            <Reveal><div className="section-eyebrow">Our Work</div></Reveal>
            <Reveal delay={80}><h2 className="section-title">Recent Projects</h2></Reveal>
            <Reveal delay={160}><p className="text-[14px] text-mgray leading-relaxed max-w-[520px] mt-3 font-light">A sample of the quality fitouts we've delivered across Queensland for major Australian brands and local businesses.</p></Reveal>
          </div>
          <Reveal><button className="font-mont text-[11px] font-bold uppercase tracking-[1.5px] text-orange border-b-2 border-orange pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap">View All Projects →</button></Reveal>
        </div>
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-1">
            <ProjectCard proj={pandora} className="col-span-2 lg:col-span-7 h-[370px]" />
            <ProjectCard proj={rest[0]} className="col-span-2 lg:col-span-5 h-[370px]" />
            {rest.slice(1).map(p => (
              <ProjectCard key={p.key} proj={p} className="col-span-1 lg:col-span-4 h-[250px]" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectCard({ proj, className }) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/projects/${proj.key}`)} className={`group relative overflow-hidden cursor-pointer bg-slate-300 ${className}`}>
      <img src={proj.thumbImg} alt={proj.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={e => { e.target.style.display = 'none' }} />
      <div className="absolute inset-0 flex items-center justify-center"><span className="text-7xl opacity-10">{proj.icon}</span></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,14,24,0.96)] via-[rgba(8,14,24,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="font-mont text-[9px] font-bold tracking-[3px] uppercase text-orange mb-1.5">{proj.cat}</div>
        <div className="font-mont text-[18px] font-black text-white tracking-tight">{proj.name}</div>
        <div className="text-[11px] text-white/45 mt-1">{proj.location}</div>
      </div>
      <div className="absolute top-4 right-4 w-9 h-9 bg-orange flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">↗</div>
    </div>
  )
}

/* ── STATS BAND ── */
function BigStat({ num, suffix, label }) {
  const ref = useCountUp(num)
  return (
    <div className="text-center px-5 border-r border-white/[0.07] last:border-r-0 py-2">
      <div className="font-mont font-black text-white leading-none" style={{ fontSize: 'clamp(44px,5vw,68px)' }}>
        <span ref={ref}>0</span>
        <em className="not-italic text-orange" style={{ fontSize: '0.6em', verticalAlign: 'super' }}>{suffix}</em>
      </div>
      <div className="font-mont text-[11px] font-bold uppercase tracking-[2px] text-white/35 mt-2">{label}</div>
    </div>
  )
}

const BAND_STATS = [
  { num: 500, suffix: '+', label: 'Projects Completed' },
  { num: 20, suffix: 'yr', label: 'In Business' },
  { num: 98, suffix: '%', label: 'On-Time Delivery' },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
]

export function StatsBand() {
  return (
    <div className="bg-navy2 py-16">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
        {BAND_STATS.map(s => <BigStat key={s.label} {...s} />)}
      </div>
    </div>
  )
}

/* ── TESTIMONIALS ── */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-14">
          <Reveal><div className="section-eyebrow">Client Feedback</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">What Our Clients Say</h2></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-offwhite p-8 border-b-4 border-transparent hover:border-orange transition-colors h-full">
                <div className="font-serif text-[72px] text-orange opacity-15 leading-[0.65] mb-3">"</div>
                <div className="text-[13px] text-orange tracking-[3px] mb-3">★★★★★</div>
                <p className="text-[13px] text-dgray leading-relaxed italic mb-5 font-light">{t.text}</p>
                <div className="font-mont text-[13px] font-bold text-navy">{t.name}</div>
                <div className="text-[11px] text-mgray mt-0.5">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── BRANDS ── */
export function Brands() {
  return (
    <div className="bg-white border-t border-lg py-11">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-mgray text-center mb-7">Trusted by Australia's best-known brands</div>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {BRANDS.map(b => (
            <span key={b} className="font-mont text-[15px] font-black text-[#ccc] hover:text-mgray transition-colors cursor-default tracking-tight">{b}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── CTA BANNER ── */
export function CtaBanner() {
  return (
    <div className="bg-orange py-16">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-7">
        <div>
          <div className="font-mont font-black text-white tracking-tight mb-1.5" style={{ fontSize: 'clamp(20px,2.8vw,30px)' }}>Do You Have A Project We Can Help With?</div>
          <div className="text-[14px] text-white/72 font-light">Get an obligation-free quote from Brisbane's most trusted shopfitters.</div>
        </div>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-white whitespace-nowrap flex-shrink-0 py-4 px-10 text-[11px] tracking-[2px]">Get a Quote Now →</button>
      </div>
    </div>
  )
}

/* ── CONTACT ── */
export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ fn: '', ln: '', phone: '', email: '', company: '', type: '', location: '', message: '' })
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false); setSent(true)
  }
  const inputCls = "w-full px-4 py-3.5 bg-white border-2 border-lg text-[14px] outline-none focus:border-orange transition-colors font-sans placeholder-[#bbb]"
  return (
    <section id="contact" className="bg-offwhite py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-12">
          <Reveal><div className="section-eyebrow">Start a Project</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Get in Touch</h2></Reveal>
          <Reveal delay={160}><p className="text-[14px] text-mgray leading-relaxed max-w-[500px] mt-3 font-light">Fill in the form and we'll get back to you within 24 hours with a free, no-obligation quote.</p></Reveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal dir="left">
            {[
              { icon: '📍', label: 'Address', val: '717 Gympie Road, Lawnton QLD 4501' },
              { icon: '📞', label: 'Phone', val: '(07) 3889 9040 · 0412 969 268' },
              { icon: '✉️', label: 'Email', val: 'info@shopfittings.com.au' },
              { icon: '🕐', label: 'Hours', val: 'Monday – Friday: 7:00am – 5:00pm' },
              { icon: '🗺️', label: 'Service Areas', val: 'Brisbane · Gold Coast · Sunshine Coast · Toowoomba · All of SEQ' },
            ].map(item => (
              <div key={item.label} className="flex gap-4 mb-6 items-start">
                <div className="w-11 h-11 bg-navy flex items-center justify-center text-base flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-mont text-[10px] font-bold uppercase tracking-[1.5px] text-mgray mb-1">{item.label}</div>
                  <div className="text-[14px] font-semibold text-navy">{item.val}</div>
                </div>
              </div>
            ))}
            <div className="bg-navy p-6 mt-2">
              <div className="font-mont text-[10px] font-bold uppercase tracking-[2px] text-orange mb-3">Licences & Certifications</div>
              <div className="text-[13px] text-white/50 leading-loose">✅ QBCC Licensed Builder<br />✅ Public Liability Insured<br />✅ WHS Compliant<br />✅ IFA Member</div>
            </div>
          </Reveal>
          <Reveal dir="right">
            {sent ? (
              <div className="bg-white p-12 text-center border-2 border-green-500">
                <div className="text-5xl mb-4">✅</div>
                <div className="font-mont text-xl font-black text-navy mb-2">Enquiry Received!</div>
                <p className="text-[13px] text-mgray">Thanks! We'll get back to you within 24 hours with your free quote.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-xs text-mgray underline hover:text-navy">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-2 gap-3.5">
                  <input className={inputCls} name="fn" value={form.fn} onChange={handle} placeholder="First name *" required />
                  <input className={inputCls} name="ln" value={form.ln} onChange={handle} placeholder="Last name *" required />
                  <input className={inputCls} name="phone" value={form.phone} onChange={handle} placeholder="Phone *" required />
                  <input className={inputCls} name="email" type="email" value={form.email} onChange={handle} placeholder="Email *" required />
                  <input className={`${inputCls} col-span-2`} name="company" value={form.company} onChange={handle} placeholder="Company name" />
                  <select className={`${inputCls} col-span-2 appearance-none`} name="type" value={form.type} onChange={handle}>
                    <option value="" disabled>Project type *</option>
                    {['Retail Fitout', 'Commercial Fitout', 'Office Fitout', 'Hospitality Fitout', 'Medical / Healthcare', 'Bespoke Joinery', 'Other'].map(t => <option key={t}>{t}</option>)}
                  </select>
                  <input className={`${inputCls} col-span-2`} name="location" value={form.location} onChange={handle} placeholder="Project suburb / location" />
                  <textarea className={`${inputCls} col-span-2 resize-y min-h-[110px]`} name="message" value={form.message} onChange={handle} placeholder="Tell us about your project — size, timeline, budget range..." />
                </div>
                <button type="submit" disabled={loading} className="btn-orange w-full py-4 text-center disabled:opacity-60 mt-1 text-[11px] tracking-[2px]">
                  {loading ? 'Sending…' : 'Send Enquiry — Free & No Obligation'}
                </button>
                <p className="text-[12px] text-mgray text-center">📞 Prefer to talk? Call (07) 3889 9040 during business hours.</p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}