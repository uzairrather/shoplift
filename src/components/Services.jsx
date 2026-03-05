import { Ruler, Paintbrush, Hammer, Lightbulb, Truck, Wrench, ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';

const iconMap = {
  ruler: Ruler,
  paintbrush: Paintbrush,
  hammer: Hammer,
  lightbulb: Lightbulb,
  truck: Truck,
  wrench: Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Shop Fitting Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From initial concept to final handover, we handle every aspect of your retail fit-out project
            with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-reveal"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
