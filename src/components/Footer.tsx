import { Github, Twitter, Linkedin, Instagram, Facebook, ArrowUp, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Website Development',
  'E-Commerce Solutions',
  'Hostel Management System',
  'Restaurant & Hotel Sites',
  'SEO Optimization',
  'Website Maintenance',
];

const social = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="orb w-96 h-96 bg-blue-800 bottom-0 left-0 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/WhatsApp_Image_2026-06-20_at_12.32.55_PM_(1).jpeg"
                alt="Yovial Technologies"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/30"
              />
              <div>
                <div className="font-display font-bold text-white text-lg">Yovial</div>
                <div className="text-xs font-medium tracking-widest text-blue-400/80 uppercase">Technologies</div>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-5">
              Building powerful digital experiences that drive business growth and create lasting impressions.
            </p>
            <div className="flex gap-3 flex-wrap">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-dark-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-dark-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-dark-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500/50 group-hover:bg-violet-400 transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917893549978" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={13} className="text-blue-400" />
                  </div>
                  <span className="text-sm">+91 7893549978</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917893549978?text=Hello%20Yovial%20Technologies%2C%20I%20need%20a%20website."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone size={13} className="text-emerald-400" />
                  </div>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:yovialtechnologies@gmail.com" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Mail size={13} className="text-violet-400" />
                  </div>
                  <span className="text-sm">yovialtechnologies@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Yovial Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-dark-500 hover:text-dark-300 text-xs transition-colors">Privacy Policy</a>
            <span className="text-dark-700">|</span>
            <a href="#" className="text-dark-500 hover:text-dark-300 text-xs transition-colors">Terms of Service</a>
            <span className="text-dark-700">|</span>
            <a href="#admin" className="text-dark-600 hover:text-blue-400 text-xs transition-colors">Admin</a>
            <button
              onClick={scrollTop}
              className="ml-2 w-8 h-8 glass rounded-xl flex items-center justify-center text-dark-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
