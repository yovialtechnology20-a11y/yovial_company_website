import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FolderOpen, Clock, Star } from 'lucide-react';

const stats = [
  { icon: FolderOpen, value: 5, suffix: '', label: 'Projects Launched', color: 'text-blue-400' },
  { icon: Users, value: 5, suffix: '+', label: 'Happy Clients', color: 'text-violet-400' },
  { icon: Clock, value: 1, suffix: '+', label: 'Years Experience', color: 'text-cyan-400' },
  { icon: Star, value: 100, suffix: '%', label: 'Client Satisfaction', color: 'text-yellow-400' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl lg:text-5xl">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-600/10" />
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`flex justify-center mb-3 ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className={stat.color}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-dark-400 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
