import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { SERVICES, SERVICES_LIST, PROJECTS } from '../data'
import PageHero from '../components/ui/PageHero'

export default function ServiceDetail() {
  const { key } = useParams()
  const navigate = useNavigate()
  const svc = SERVICES[key]

  useEffect(() => { window.scrollTo(0, 0) }, [key])

  if (!svc) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="font-mont text-2xl font-black text-navy mb-4">Service not found</h2>
        <button onClick={() => navigate('/')} className="btn-orange">Go Home</button>
      </div>
    </div>
  )

  const relatedProjects = svc.relatedProjects.map(k => PROJECTS[k]).filter(Boolean)

  return (
    <>
      <PageHero
        img={svc.heroImg}
        breadcrumbs={[
          { label: 'Home', href: () => navigate('/') },
          { label: 'Services', href: () => { navigate('/'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
          { label: svc.name },
        ]}
        title={svc.name}
        subtitle={svc.tagline}
      />

      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* MAIN CONTENT */}
            <div>
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div>
                  <h2 className="font-mont text-[26px] font-black text-navy mb-4 tracking-tight">{svc.bodyTitle}</h2>
                  {svc.bodyText.map((p, i) => (
                    <p key={i} className="text-[14px] text-mgray leading-relaxed mb-4 font-light last:mb-0">{p}</p>
                  ))}
                </div>
                <div className="relative">
                  <img src={svc.detailImg} alt={svc.name} className="w-full h-[340px] object-cover" onError={e => e.target.style.display = 'none'} />
                  <div className="absolute bottom-0 left-0 right-0 bg-navy/88 px-4 py-3">
                    <span className="font-mont text-[9px] font-bold uppercase tracking-[2px] text-white/50">Featured Project</span>
                    <strong className="block font-mont text-[13px] text-white mt-0.5">{svc.imgCap}</strong>
                  </div>
                </div>
              </div>

              {/* Gallery Row 1 */}
              <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-4 flex items-center gap-2.5">
                <span className="w-5 h-0.5 bg-orange" />Project Gallery
              </div>
              <div className="grid grid-cols-3 gap-1 mb-12">
                {svc.gallery1.map((src, i) => (
                  <img key={i} src={src} alt="Project" className="w-full h-[220px] object-cover brightness-85 hover:brightness-100 transition-all duration-400" onError={e => e.target.style.display = 'none'} />
                ))}
              </div>

              {/* Features */}
              <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-4 flex items-center gap-2.5">
                <span className="w-5 h-0.5 bg-orange" />What's Included
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {svc.features.map(f => (
                  <div key={f.title} className="bg-offwhite p-6 border-l-4 border-orange">
                    <div className="font-mont text-[12px] font-black text-navy uppercase tracking-[0.5px] mb-2">✓ {f.title}</div>
                    <div className="text-[13px] text-mgray leading-relaxed font-light">{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* Gallery Row 2 */}
              <div className="grid grid-cols-[2fr_1fr] gap-1 mb-12">
                {svc.gallery2.map((src, i) => (
                  <img key={i} src={src} alt="Project" className="w-full h-[300px] object-cover brightness-85 hover:brightness-100 transition-all duration-400" onError={e => e.target.style.display = 'none'} />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="bg-navy px-8 py-9 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <div className="font-mont text-[11px] font-bold uppercase tracking-[2px] text-orange mb-1.5">Ready to Start?</div>
                  <div className="font-mont text-[18px] font-black text-white">Do You Have A Project We Can Help With?</div>
                </div>
                <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }} className="btn-orange whitespace-nowrap">
                  Get a Free Quote →
                </button>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-navy p-6 mb-3.5">
                <div className="font-mont text-[11px] font-bold uppercase tracking-[1.5px] text-orange mb-4">Our Services</div>
                <div className="flex flex-col">
                  {SERVICES_LIST.map(s => (
                    <button
                      key={s.key}
                      onClick={() => navigate(`/services/${s.key}`)}
                      className={`text-left px-3 py-2.5 font-mont text-[12px] font-semibold border-b border-white/[0.06] transition-all duration-200 last:border-b-0
                        ${s.key === key
                          ? 'text-white bg-white/[0.04] border-l-[3px] border-l-orange pl-4'
                          : 'text-white/50 hover:text-white hover:bg-white/[0.04] hover:pl-4'
                        }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-orange p-6 text-center">
                <div className="font-mont text-[14px] font-black text-white mb-1.5">Get a Free Quote</div>
                <div className="text-[12px] text-white/70 mb-4">No obligation · 24hr response</div>
                <button
                  onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
                  className="block w-full font-mont text-[11px] font-bold uppercase tracking-[1.5px] py-3 bg-white text-orange hover:bg-navy hover:text-white transition-colors text-center"
                >
                  Request a Quote →
                </button>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-3 flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-orange" />Related Work
            </div>
            <h2 className="font-mont text-[26px] font-black text-navy tracking-tight mb-4">{svc.name.replace(' Fitouts', '').replace(' Joinery', '')} Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {relatedProjects.map(p => (
                <div key={p.key} onClick={() => navigate(`/projects/${p.key}`)} className="group relative h-[200px] overflow-hidden cursor-pointer bg-slate-300">
                  <img src={p.heroImg} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={e => e.target.style.display = 'none'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,16,28,0.9)] to-transparent flex flex-col justify-end p-4">
                    <div className="font-mont text-[9px] font-bold uppercase tracking-[2px] text-orange mb-1">{p.cat}</div>
                    <div className="font-mont text-[14px] font-bold text-white">{p.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
