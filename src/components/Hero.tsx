import { motion } from 'framer-motion';
import { ArrowRight, Play, Code2, Zap, Globe } from 'lucide-react';

const floatingCards = [
  { icon: Code2, label: 'Custom Dev', color: 'from-blue-500 to-cyan-500', delay: 0 },
  { icon: Zap, label: 'Fast Delivery', color: 'from-violet-500 to-purple-500', delay: 0.5 },
  { icon: Globe, label: 'SEO Ready', color: 'from-cyan-500 to-blue-500', delay: 1 },
];

const stats = [
  { value: '2', label: 'Projects Launched' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="orb w-96 h-96 bg-blue-600 top-20 -left-32 animate-float" />
      <div className="orb w-80 h-80 bg-violet-600 bottom-20 -right-20 animate-float-delayed" />
      <div className="orb w-64 h-64 bg-cyan-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-sm text-blue-300 font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Premium Web Development Agency
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6"
            >
              Transforming{' '}
              <span className="gradient-text">Ideas</span>{' '}
              Into Powerful
              <br />
              <span className="gradient-text">Digital</span>{' '}
              Experiences
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              We build modern websites, web applications, and digital solutions that
              help businesses grow and stand out in the digital world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-base px-8 py-4 rounded-xl"
              >
                Get Free Quote <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#portfolio')}
                className="btn-secondary text-base px-8 py-4 rounded-xl"
              >
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Play size={14} className="ml-0.5" />
                </span>
                View Portfolio
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-2xl gradient-text-blue">{stat.value}</div>
                  <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Central card */}
            <div className="relative w-96 h-96">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-violet-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full glass-strong border border-blue-500/30 flex items-center justify-center p-4 shadow-2xl shadow-blue-500/20">
                  <img
                    src="/assets/images/WhatsApp_Image_2026-06-20_at_12.32.55_PM_(1).jpeg"
                    alt="Yovial Technologies"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, i) => {
                const angles = [0, 120, 240];
                const r = 180;
                const angle = (angles[i] * Math.PI) / 180;
                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);
                return (
                  <motion.div
                    key={card.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, delay: card.delay, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute glass-strong border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px - 70px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                      <card.icon size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">{card.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
