import { motion } from 'framer-motion';
import { Globe, Building2, ShoppingCart, UtensilsCrossed, SearchCheck, Wrench, GraduationCap, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Custom, pixel-perfect websites built with the latest technologies for superior performance and user experience.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Building2,
    title: 'Hostel Management System',
    desc: 'Complete digital management systems for hostels — bookings, rooms, payments, and more in one platform.',
    color: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    desc: 'Powerful online stores with secure payments, inventory management, and seamless shopping experiences.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Hotel Websites',
    desc: 'Elegant, booking-enabled websites for restaurants and hotels that attract guests and drive reservations.',
    color: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/20',
  },
  {
    icon: SearchCheck,
    title: 'SEO Optimization',
    desc: 'Data-driven SEO strategies that boost your search rankings, drive organic traffic, and grow your business.',
    color: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Ongoing updates, security monitoring, performance optimization, and technical support for your website.',
    color: 'from-cyan-500 to-sky-500',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: GraduationCap,
    title: 'Educational Portals',
    desc: 'Feature-rich e-learning platforms and school/college websites with attendance, results, and more.',
    color: 'from-indigo-500 to-blue-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Briefcase,
    title: 'Business Portfolio Sites',
    desc: 'Professional portfolio and business websites that establish credibility and convert visitors into clients.',
    color: 'from-fuchsia-500 to-violet-500',
    glow: 'shadow-fuchsia-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="orb w-96 h-96 bg-blue-700 top-0 right-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="section-heading mt-3">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            From concept to deployment, we offer end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group glass rounded-3xl p-6 border border-white/5 hover:border-white/15 card-hover hover:shadow-xl ${service.glow} cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full rounded-2xl bg-dark-900 flex items-center justify-center">
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">{service.desc}</p>

              {/* Hover line */}
              <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-90" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 lg:p-12">
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white">
                Ready to build something amazing?
              </h3>
              <p className="text-blue-100 mt-2 text-lg">Let's discuss your project and bring your vision to life.</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
