import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(href), 100);
    } else {
      scrollToSection(href);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/[0.06] backdrop-blur-md ${scrolled ? "bg-[rgba(15,24,37,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-[rgba(15,24,37,1)]"}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={goHome}>
          <img
            src="/ssi-logo-1.png"
            alt="Shopfitting Solutions Intl"
            className="h-[42px] w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA only — phone number removed to free up space */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            onClick={() => handleNav("contact")}
            className="btn-orange text-[11px] tracking-widest py-3 px-6 whitespace-nowrap"
          >
            Get a Quote
          </button>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu — phone shown here instead */}
      {open && (
        <div className="lg:hidden fixed top-[68px] left-0 right-0 bg-navy2 z-50 border-t border-white/10 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-6 py-3.5 font-mont text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0738899040"
            className="block px-6 py-3.5 font-mont text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
          >
            📞 (07) 3889 9040
          </a>
          <div className="px-6 pt-4">
            <button
              onClick={() => handleNav("contact")}
              className="btn-orange w-full text-center py-3.5"
            >
              Get a Free Quote →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
