import { motion } from 'framer-motion';
import { Zap, DollarSign, Palette, Smartphone, Search, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'We deliver projects on time, every time. Our agile process ensures quick turnarounds without sacrificing quality.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Premium quality at competitive prices. We offer transparent pricing with no hidden fees.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    desc: 'Cutting-edge designs that capture your brand identity and impress your visitors from the first click.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Every website we build is fully responsive and optimized for all screen sizes and devices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    desc: 'Built with best SEO practices from the ground up so your site ranks higher on search engines.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Round-the-clock support and maintenance to keep your website running smoothly at all times.',
    color: 'from-cyan-500 to-teal-500',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/80 to-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="orb w-80 h-80 bg-violet-600 top-20 right-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="section-heading mt-3">
            The <span className="gradient-text">Yovial</span> Advantage
          </h2>
          <p className="section-subheading">
            We go beyond writing code — we build digital experiences that deliver real business results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-8 border border-white/5 hover:border-white/15 overflow-hidden card-hover"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <reason.icon size={24} className="text-white" />
              </div>
              <h3 className="relative z-10 font-display font-semibold text-xl text-white mb-3">{reason.title}</h3>
              <p className="relative z-10 text-dark-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
