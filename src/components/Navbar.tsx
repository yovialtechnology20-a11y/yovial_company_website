import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-dark-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLink('#home'); }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/assets/images/WhatsApp_Image_2026-06-20_at_12.32.55_PM_(1).jpeg"
            alt="Yovial Technologies"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/40 group-hover:ring-blue-400/70 transition-all duration-300"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-white text-lg tracking-tight">Yovial</span>
            <span className="text-xs font-medium tracking-[0.2em] text-blue-400/80 uppercase">Technologies</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
              className="text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-violet-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleLink('#contact'); }}
          className="hidden md:flex btn-primary text-sm py-2.5 px-5"
        >
          Get Free Quote
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg glass text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl glass-strong p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
              className="block px-4 py-3 rounded-xl text-dark-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLink('#contact'); }}
            className="block mt-2 btn-primary text-center justify-center"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
