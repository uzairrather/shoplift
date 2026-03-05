import { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/siteData';

const filters = ['all', 'jewellery', 'supermarket', 'cafe', 'fashion'];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projects We're Proud Of
          </h2>
          <p className="text-lg text-gray-600">
            Browse our recent work across Australia's retail landscape. Each project is a testament to
            our commitment to excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                active === f
                  ? 'bg-sky-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2 py-1 bg-sky-50 text-sky-600 text-xs font-medium rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
