import {
  MessageSquare, Pencil, ClipboardCheck, Hammer, CheckCircle,
} from 'lucide-react';
import { processSteps } from '../data/siteData';

const iconMap = {
  'message-square': MessageSquare,
  pencil: Pencil,
  'clipboard-check': ClipboardCheck,
  hammer: Hammer,
  'check-circle': CheckCircle,
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-lg text-white/70">
            Our proven 5-step process ensures every project runs smoothly, on time, and within budget —
            with no surprises.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.num} className="text-center scroll-reveal">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center relative z-10">
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-sky-600">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{step.desc}</p>
                  <span className="inline-block px-3 py-1 bg-white/10 text-sky-300 text-xs font-medium rounded-full">
                    {step.duration}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center scroll-reveal">
          <p className="text-white/70 mb-6">Ready to start your project? Get your free consultation today.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
