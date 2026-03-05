import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/siteData';

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  const goTo = (index) => {
    let next = index;
    if (next >= heroSlides.length) next = 0;
    if (next < 0) next = heroSlides.length - 1;
    setCurrent(next);
  };

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
  };

  const resetAuto = () => {
    clearInterval(intervalRef.current);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNav = (dir) => {
    goTo(current + dir);
    resetAuto();
  };

  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) handleNav(diff > 0 ? 1 : -1);
  };

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <img src={slide.img} alt={slide.title} />
          <div className="hero-slide-caption">
            <p className="text-white font-semibold">{slide.title}</p>
            <p className="text-white/70 text-sm">{slide.location}</p>
          </div>
        </div>
      ))}

      <button className="hero-slide-nav hero-slide-prev" onClick={() => handleNav(-1)}>
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="hero-slide-nav hero-slide-next" onClick={() => handleNav(1)}>
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="hero-slide-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-slide-dot ${i === current ? 'active' : ''}`}
            onClick={() => { goTo(i); resetAuto(); }}
          />
        ))}
      </div>
    </div>
  );
}
