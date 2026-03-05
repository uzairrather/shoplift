import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Retail Space?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss your project. Our team is ready to bring your vision to life with expert
              design, quality craftsmanship, and seamless project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-gray-50 transition-colors"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:18007436748"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/30"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 scroll-reveal">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { Icon: Phone, label: 'Phone', content: '1800 SHOP FIT (1800 746 734)', href: 'tel:18007436748' },
                { Icon: Mail, label: 'Email', content: 'info@shopfitpro.com.au', href: 'mailto:info@shopfitpro.com.au' },
                { Icon: MapPin, label: 'Service Areas', content: 'Sydney • Melbourne • Brisbane • Perth • Adelaide • Gold Coast • All Australia', href: null },
              ].map(({ Icon, label, content, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-semibold hover:text-white/80">{content}</a>
                    ) : (
                      <p className="text-white font-semibold">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm mb-2">Business Hours</p>
              <p className="text-white">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
