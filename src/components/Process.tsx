import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, FlaskConical, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Requirement Discussion',
    desc: 'We start with a deep-dive consultation to understand your business goals, target audience, and technical requirements.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design Planning',
    desc: 'Our designers craft wireframes and high-fidelity mockups that bring your vision to life before a single line of code is written.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development',
    desc: 'Our engineers build your project using modern technologies, clean code, and industry best practices.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FlaskConical,
    step: '04',
    title: 'Testing & QA',
    desc: 'Rigorous testing across devices, browsers, and scenarios ensures your product is bug-free and performs flawlessly.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Deployment',
    desc: 'We deploy your project on reliable servers with SSL, CDN, and performance optimizations for maximum speed.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: LifeBuoy,
    step: '06',
    title: 'Ongoing Support',
    desc: 'Post-launch, we provide dedicated support, updates, and maintenance to keep your digital product thriving.',
    color: 'from-cyan-500 to-sky-500',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
      <div className="orb w-96 h-96 bg-blue-700 bottom-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="section-heading mt-3">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subheading">
            A proven, transparent workflow that delivers exceptional results from kickoff to launch.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-3xl p-8 border border-white/5 hover:border-blue-500/20 card-hover h-full">
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon size={22} className="text-white" />
                    </div>
                    <span className="font-display font-bold text-4xl text-white/5 group-hover:text-white/10 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-dark-400 leading-relaxed text-sm">{step.desc}</p>

                  {/* Hover line */}
                  <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
