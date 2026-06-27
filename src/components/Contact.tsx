import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, MessageCircle, CheckCircle, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 824747508',
    href: 'tel:+918247475087',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 8247475087',
    href: 'https://wa.me/918247475087?text=Hello%20Yovial%20Technologies%2C%20I%20need%20a%20website.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'yovialtechnologies@gmail.com',
    href: 'mailto:yovialtechnologies@gmail.com',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Remote Worldwide)',
    href: '#',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Yovial Technologies!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/91824747508?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
      <div className="orb w-96 h-96 bg-blue-700 top-0 right-0 opacity-10" />
      <div className="orb w-72 h-72 bg-violet-700 bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="section-heading mt-3">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subheading">
            Ready to start your project? Get in touch and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Get In Touch</h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to
                you within 24 hours with a free consultation.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-dark-400 text-xs mb-0.5">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-3xl overflow-hidden border border-white/5 h-48 flex items-center justify-center">
              <div className="text-center text-dark-400">
                <MapPin size={32} className="mx-auto mb-2 text-blue-500/50" />
                <p className="text-sm">Serving clients across India and worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Message Sent!</h4>
                  <p className="text-dark-400">Redirecting you to WhatsApp. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-dark-400 text-sm mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-dark-400 text-sm mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-dark-400 text-sm mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-dark-400 text-sm mb-1.5 block">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                      >
                        <option value="">Select a service</option>
                        <option>Website Development</option>
                        <option>E-Commerce Store</option>
                        <option>Hostel Management System</option>
                        <option>Restaurant / Hotel Website</option>
                        <option>SEO Optimization</option>
                        <option>Website Maintenance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-dark-400 text-sm mb-1.5 block">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 justify-center text-base">
                    <Send size={18} /> Send Message
                  </button>
                  <p className="text-dark-500 text-xs text-center">
                    By submitting, you'll be redirected to WhatsApp to confirm your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
