import { Gem, ShoppingCart, Store, Coffee, Shirt, Sparkles } from 'lucide-react';
import { industries } from '../data/siteData';

const iconMap = {
  gem: Gem,
  'shopping-cart': ShoppingCart,
  store: Store,
  coffee: Coffee,
  shirt: Shirt,
  sparkles: Sparkles,
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Specialised Solutions for Every Retail Sector
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're opening a luxury boutique or a bustling supermarket, we bring
            industry-specific expertise to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon];
            return (
              <div
                key={ind.title}
                className={`group relative overflow-hidden rounded-2xl ${ind.bg} p-8 hover:shadow-xl transition-all duration-300 scroll-reveal`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className={`w-8 h-8 ${ind.iconColor}`} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">{ind.desc}</p>
                  <ul className="space-y-2">
                    {ind.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:bg-white" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center scroll-reveal">
          <p className="text-gray-600">
            Don't see your industry?{' '}
            <a href="#contact" className="text-sky-600 font-medium hover:text-sky-700 underline">
              Contact us
            </a>{' '}
            — we work with all retail sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
