import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Timeline depends on the project scope. A basic landing page takes 5-7 days, a professional dynamic website takes 10-15 days, and a custom web application can take 4-8 weeks. We always provide a clear timeline before starting.',
  },
  {
    q: 'Do you provide website hosting and domain services?',
    a: 'Yes! We can assist with domain registration and hosting setup. We recommend reliable providers and can handle the complete deployment process for you.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we build is mobile-first and fully responsive. We test across all major devices and screen sizes to ensure a perfect experience for every visitor.',
  },
  {
    q: 'Can I update the website content myself after it\'s launched?',
    a: 'Yes, for dynamic websites we build an easy-to-use admin panel that lets you update content, images, and data without any technical knowledge.',
  },
  {
    q: 'Do you provide SEO services?',
    a: 'Yes. We offer on-page SEO optimization as part of every project, and full SEO strategy services as a standalone offering. We\'ll help your business rank higher on Google.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily use React, Next.js, Node.js, and modern databases like PostgreSQL and MongoDB. We choose the tech stack based on your specific project requirements.',
  },
  {
    q: 'What kind of support do you provide after launch?',
    a: 'We offer post-launch support packages ranging from 1 to 6 months depending on your plan. This includes bug fixes, security updates, performance monitoring, and content updates.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out via our contact form, WhatsApp, or email. We\'ll schedule a free consultation to discuss your requirements and provide a detailed proposal at no cost.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="section-heading mt-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subheading">
            Everything you need to know about working with Yovial Technologies.
          </p>
        </div>

        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className="glass rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/20 transition-colors duration-300"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
                >
                  <ChevronDown size={15} className="text-blue-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-dark-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
