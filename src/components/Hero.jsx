import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Award, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/siteData';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const pausedRef = useRef(false);
  const touchStartX = useRef(0);

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => (c + 1) % heroSlides.length);
      }
    }, 3000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    let next = index;
    if (next >= heroSlides.length) next = 0;
    if (next < 0) next = heroSlides.length - 1;
    setCurrent(next);
  };

  const handleNav = (dir) => {
    goTo(current + dir);
    // restart the 3s timer fresh after manual click
    startAuto();
  };

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX; }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) handleNav(diff > 0 ? 1 : -1);
      }}
    >
      {/* FULL-SCREEN BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-gray-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
      </div>

      {/* ARROWS */}
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNav(-1)}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-sky-500 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNav(1)}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-sky-500 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* SLIDE CAPTION bottom-right */}
      <div className="absolute bottom-20 right-8 z-20 text-right hidden lg:block">
        <div className="inline-block bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
          <p className="text-white font-semibold text-sm">{heroSlides[current].title}</p>
          <p className="text-white/60 text-xs mt-0.5">{heroSlides[current].location}</p>
        </div>
      </div>

      {/* SLIDE COUNTER top-right */}
      <div className="absolute top-28 right-8 z-20 hidden lg:flex items-center gap-2 text-sm">
        <span className="text-white font-bold text-2xl">{String(current + 1).padStart(2, '0')}</span>
        <span className="text-white/40 text-lg">/</span>
        <span className="text-white/40">{String(heroSlides.length).padStart(2, '0')}</span>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); startAuto(); }}
            style={{ border: 'none', cursor: 'pointer', padding: 0 }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2.5 bg-sky-400' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="animate-slide-up delay-100 inline-block px-4 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-sm font-medium mb-6">
            Australia's Leading Shop Fitting Experts
          </span>

          <h1 className="animate-headline text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Transform Your<br />
            Retail Space Into a <span className="shimmer-text">Customer Magnet</span>
          </h1>

          <p className="animate-slide-up delay-300 text-lg sm:text-xl text-white/80 mb-10 max-w-2xl">
            From jewellery boutiques to supermarkets, kiosks to cafes — we design and build retail
            environments that drive sales and create unforgettable customer experiences across Australia.
          </p>

          <div className="animate-slide-up delay-400 flex flex-col sm:flex-row gap-4 mb-14">
            <a href="#contact" className="group px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/30 text-center backdrop-blur-sm">
              Explore Our Services
            </a>
            <a
              href="https://raw.githubusercontent.com/deependdirect/ShopfittingsolutionsFinal/main/brochure.pdf"
              download
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/30 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </div>

          <div className="animate-slide-up delay-500 flex flex-wrap gap-6">
            {[
              { Icon: Award, text: 'Award Winning Design' },
              { Icon: Clock, text: 'On-Time Delivery' },
              { Icon: Shield, text: '10-Year Warranty' },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <Icon className="w-5 h-5 text-sky-400" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div key={current} className="h-full bg-sky-400" style={{ animation: 'progressBar 3s linear forwards' }} />
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}