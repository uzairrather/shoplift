import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { PROJECTS, PROJECTS_LIST } from '../data'
import PageHero from '../components/ui/PageHero'

export default function ProjectDetail() {
  const { key } = useParams()
  const navigate = useNavigate()
  const proj = PROJECTS[key]

  useEffect(() => { window.scrollTo(0, 0) }, [key])

  if (!proj) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="font-mont text-2xl font-black text-navy mb-4">Project not found</h2>
        <button onClick={() => navigate('/')} className="btn-orange">Go Home</button>
      </div>
    </div>
  )

  const relatedProjects = proj.relatedLinks.map(k => PROJECTS[k]).filter(Boolean)
  const otherProjects = PROJECTS_LIST.filter(p => p.key !== key)

  const goContact = () => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }

  return (
    <>
      <PageHero
        img={proj.heroImg}
        breadcrumbs={[
          { label: 'Home', href: () => navigate('/') },
          { label: 'Projects', href: () => { navigate('/'); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
          { label: proj.name },
        ]}
        title={proj.name}
        subtitle={`${proj.location} · ${proj.cat}`}
      />

      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* MAIN */}
            <div>
              {/* Meta Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 bg-navy mb-10">
                {proj.sidebarMeta.slice(0, 4).map(m => (
                  <div key={m.label} className="text-center px-4 py-6 border-r border-white/[0.07] last:border-r-0">
                    <div className="font-mont text-[9px] font-bold uppercase tracking-[2px] text-white/40 mb-1.5">{m.label}</div>
                    <div className="font-mont text-[13px] font-bold text-white">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Photo Gallery */}
              <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-4 flex items-center gap-2.5">
                <span className="w-5 h-0.5 bg-orange" />Project Gallery
              </div>
              <div className="grid grid-cols-2 gap-1 mb-10">
                {proj.gallery.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={proj.name}
                    loading="lazy"
                    className={`w-full object-cover brightness-85 hover:brightness-100 transition-all duration-400 ${i === 0 ? 'col-span-2 h-[420px]' : 'h-[300px]'}`}
                    onError={e => e.target.style.display = 'none'}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="font-mont text-[24px] font-black text-navy tracking-tight mb-5">{proj.bodyTitle}</h2>
                {proj.bodyText.map((p, i) => (
                  <p key={i} className="text-[14px] text-mgray leading-relaxed mb-4 font-light last:mb-0">{p}</p>
                ))}
              </div>

              {/* Challenge / Solution boxes */}
              <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-4 flex items-center gap-2.5">
                <span className="w-5 h-0.5 bg-orange" />Project Highlights
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {proj.features.map(f => (
                  <div key={f.title} className="bg-offwhite p-6 border-l-4 border-orange">
                    <div className="font-mont text-[12px] font-black text-navy uppercase tracking-[0.5px] mb-2">{f.title}</div>
                    <div className="text-[13px] text-mgray leading-relaxed font-light">{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* Gallery 2 */}
              <div className="grid grid-cols-3 gap-1 mb-10">
                {proj.gallery2.map((src, i) => (
                  <img key={i} src={src} alt={proj.name} loading="lazy" className="w-full h-[200px] object-cover brightness-85 hover:brightness-100 transition-all duration-400" onError={e => e.target.style.display = 'none'} />
                ))}
              </div>

              {/* CTA */}
              <div className="bg-navy px-8 py-9 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <div className="font-mont text-[11px] font-bold uppercase tracking-[2px] text-orange mb-1.5">Start Your Project</div>
                  <div className="font-mont text-[18px] font-black text-white">Have a similar project in mind?</div>
                </div>
                <button onClick={goContact} className="btn-orange whitespace-nowrap">Get a Free Quote →</button>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:sticky lg:top-24 self-start flex flex-col gap-3.5">
              {/* Project details */}
              <div className="bg-navy p-6">
                <div className="font-mont text-[11px] font-bold uppercase tracking-[1.5px] text-orange mb-4">Project Details</div>
                <div className="flex flex-col">
                  {proj.sidebarMeta.map(m => (
                    <div key={m.label} className="flex justify-between gap-3 py-2.5 border-b border-white/[0.07] last:border-b-0">
                      <span className="font-mont text-[9px] font-bold uppercase tracking-widest text-white/35">{m.label}</span>
                      <span className="font-mont text-[11px] font-semibold text-white text-right">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-orange p-6 text-center">
                <div className="font-mont text-[13px] font-black text-white mb-1">Similar Project?</div>
                <div className="text-[12px] text-white/70 mb-4">Let's talk about what we can do for you</div>
                <button onClick={goContact} className="block w-full font-mont text-[11px] font-bold uppercase tracking-[1.5px] py-3 bg-white text-orange hover:bg-navy hover:text-white transition-colors text-center">
                  Get a Free Quote →
                </button>
              </div>

              {/* More projects */}
              <div className="bg-navy p-6">
                <div className="font-mont text-[11px] font-bold uppercase tracking-[1.5px] text-orange mb-4">More Projects</div>
                <div className="flex flex-col">
                  {otherProjects.map(p => (
                    <button
                      key={p.key}
                      onClick={() => navigate(`/projects/${p.key}`)}
                      className="text-left px-3 py-2.5 font-mont text-[12px] font-semibold text-white/50 hover:text-white hover:bg-white/[0.04] hover:pl-4 border-b border-white/[0.06] transition-all last:border-b-0"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <div className="font-mont text-[11px] font-bold uppercase tracking-[3px] text-orange mb-3 flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-orange" />Related Work
            </div>
            <h2 className="font-mont text-[26px] font-black text-navy tracking-tight mb-4">Similar Projects</h2>
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
