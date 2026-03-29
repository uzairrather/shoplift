import { useNavigate } from 'react-router-dom'

export default function PageHero({ img, breadcrumbs, title, subtitle }) {
  const navigate = useNavigate()

  return (
    <div className="relative h-[400px] lg:h-[440px] flex items-end overflow-hidden bg-navy2">
      {img && (
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          onError={e => { e.target.style.display = 'none' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,16,28,0.95)] via-[rgba(10,16,28,0.4)] to-transparent" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pb-12 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mont text-[11px] font-semibold uppercase tracking-widest text-white/45 mb-3.5 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">›</span>}
              {crumb.href ? (
                <button onClick={crumb.href} className="hover:text-white transition-colors">{crumb.label}</button>
              ) : (
                <span className="text-orange">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        <h1 className="font-mont font-black text-white leading-none tracking-tight" style={{ fontSize: 'clamp(32px,4.5vw,54px)', letterSpacing: '-1.5px' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] text-white/50 mt-3 font-light max-w-[560px]">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
