import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    price: '₹5,000',
    suffix: '+',
    tagline: 'Perfect for small businesses',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Static / Landing Page Website',
      'Up to 5 Pages',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'WhatsApp Button',
      '1 Month Free Support',
      'Fast Delivery (5-7 Days)',
    ],
    popular: false,
  },
  {
    icon: Star,
    name: 'Professional',
    price: '₹15,000',
    suffix: '+',
    tagline: 'Best for growing businesses',
    color: 'from-violet-500 to-purple-500',
    features: [
      'Dynamic / CMS Website',
      'Up to 15 Pages',
      'Premium UI/UX Design',
      'Advanced SEO Optimization',
      'Blog & News Section',
      'Admin Dashboard',
      'Payment Integration',
      '3 Months Free Support',
      'Delivery in 10-15 Days',
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: 'Enterprise',
    price: 'Custom',
    suffix: '',
    tagline: 'For large-scale applications',
    color: 'from-cyan-500 to-teal-500',
    features: [
      'Custom Web Application',
      'Unlimited Pages',
      'Bespoke Design System',
      'Full SEO & Analytics Suite',
      'E-Commerce / Booking System',
      'Custom Integrations & APIs',
      'User Auth & Admin Panel',
      '6 Months Priority Support',
      'Dedicated Project Manager',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
      <div className="orb w-96 h-96 bg-violet-700 top-0 left-0 opacity-10" />
      <div className="orb w-72 h-72 bg-cyan-700 bottom-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Pricing</span>
          <h2 className="section-heading mt-3">
            Transparent <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="section-subheading">
            Quality web development at prices that make sense for your business. No hidden fees, ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden border ${
                plan.popular
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                  : 'border-white/5 glass'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-violet-600/10" />
                </div>
              )}
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-dark-900/80 backdrop-blur-xl' : ''}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon size={22} className="text-white" />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-2xl text-white">{plan.name}</h3>
                <p className="text-dark-400 text-sm mt-1 mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-display font-bold text-4xl lg:text-5xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-dark-400 font-medium text-xl">{plan.suffix}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-dark-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'glass border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Request Quote' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-dark-500 text-sm mt-10 reveal">
          * All prices are starting prices. Final cost depends on project scope and requirements. Contact us for a detailed quote.
        </p>
      </div>
    </section>
  );
}
