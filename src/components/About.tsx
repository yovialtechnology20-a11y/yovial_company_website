import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Rocket, Shield } from 'lucide-react';

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To deliver cutting-edge digital solutions that empower businesses to thrive in the modern online landscape.' },
  { icon: Eye, title: 'Our Vision', desc: 'To become the most trusted web development partner for startups and growing businesses across India and beyond.' },
  { icon: Award, title: 'Our Promise', desc: 'Quality-first development with pixel-perfect designs, clean code, and on-time delivery — every single time.' },
];

const highlights = [
  { icon: Rocket, label: 'Fast Delivery', desc: 'Projects delivered on time without compromising quality.' },
  { icon: Users, label: 'Expert Team', desc: 'Skilled developers, designers, and digital strategists.' },
  { icon: Shield, label: 'Reliable Support', desc: '24/7 post-launch support and maintenance services.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
      <div className="orb w-72 h-72 bg-violet-700 bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="section-heading mt-3">
            We Are <span className="gradient-text">Yovial Technologies</span>
          </h2>
          <p className="section-subheading">
            A passionate team of developers and designers dedicated to building extraordinary digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team at work"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass-strong border border-blue-500/20 rounded-2xl p-5 shadow-xl">
              <div className="font-display font-bold text-3xl gradient-text">100%</div>
              <div className="text-dark-300 text-sm mt-1">Project Success</div>
            </div>
            <div className="absolute -top-6 -left-6 glass-strong border border-violet-500/20 rounded-2xl p-5 shadow-xl">
              <div className="font-display font-bold text-3xl gradient-text">3+</div>
              <div className="text-dark-300 text-sm mt-1">Years in Business</div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white">
              Building Digital Solutions That Drive <span className="gradient-text">Real Results</span>
            </h3>
            <p className="text-dark-300 leading-relaxed">
              Yovial Technologies is a premier web development startup based in India, specializing in creating 
              high-impact digital solutions for businesses of all sizes. From sleek business websites to powerful 
              hostel management systems, we combine technical excellence with creative design.
            </p>
            <p className="text-dark-300 leading-relaxed">
              We believe every business deserves a strong online presence. Our team works closely with clients 
              to understand their unique needs and deliver tailored solutions that exceed expectations.
            </p>
            {highlights.map((item) => (
              <div key={item.label} className="flex gap-4 items-start p-4 glass rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">{item.label}</div>
                  <div className="text-dark-400 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mission/Vision/Promise cards */}
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-blue-500/20 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/20 flex items-center justify-center mb-6">
                <item.icon size={24} className="text-blue-400" />
              </div>
              <h4 className="font-display font-semibold text-xl text-white mb-3">{item.title}</h4>
              <p className="text-dark-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
