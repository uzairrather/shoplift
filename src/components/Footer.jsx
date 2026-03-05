import { Facebook, Instagram, Linkedin, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = ['Home', 'Services', 'Industries', 'Process', 'Portfolio', 'Contact'];
const serviceLinks = [
  'Design & Planning', 'Interior Fit-Out', 'Custom Joinery',
  'Lighting Solutions', 'Project Management', 'Maintenance',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">Shop Fitting Solutions SSI</span>
                <span className="text-xs font-medium text-sky-400">PRO</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Australia's leading shop fitting company, transforming retail spaces across the nation
              for over 25 years.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/70 hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:18007436748"
                  className="text-white/70 hover:text-sky-400 transition-colors flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>1800 SHOP FIT (1800 746 734)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shopfitpro.com.au"
                  className="text-white/70 hover:text-sky-400 transition-colors flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@shopfitpro.com.au</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Servicing all major cities:<br />
                  Sydney, Melbourne, Brisbane,<br />
                  Perth, Adelaide & more
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2024 ShopFit Pro. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
                <a key={l} href="#" className="text-white/60 hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
