import { useState, useEffect } from 'react';
import {
  Phone, Menu, X,
} from 'lucide-react';

const navLinks = ['Home', 'About', 'Services', 'Industries', 'Process', 'Portfolio', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Shop Fitting Solutions
              </span>
              <span className="text-xs font-medium text-sky-400">SSI</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:18007436748"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              1800 SHOP FIT
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-sky-500 py-2 border-b"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-3 bg-sky-500 text-white text-center font-semibold rounded-full mt-4"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
