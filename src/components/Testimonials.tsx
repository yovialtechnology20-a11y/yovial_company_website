import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Owner, Blue Hostel',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Yovial Technologies transformed our hostel operations with a brilliant management system. Bookings, payments, everything automated. Absolutely outstanding work!',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    role: 'CEO, Spice Garden Restaurant',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Our restaurant website is stunning! Online reservations increased by 60% within the first month. The team understood exactly what we needed and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director, TechStar Academy',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Professional, responsive, and incredibly talented. Our school portal is now the best in the district. Parents love the results and attendance features. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Neha Singh',
    role: 'Founder, FashionHub Store',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Our e-commerce store went live in just 3 weeks! Sales doubled in the first quarter. The design is modern and customers love the smooth shopping experience.',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Manager, Grand Palace Hotel',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Exceptional quality and attention to detail. Our hotel website looks premium and the booking integration works perfectly. Best investment we made this year.',
    rating: 5,
  },
  {
    name: 'Anita Reddy',
    role: 'Owner, FitZone Gym',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The gym website Yovial built is exactly what we envisioned. Membership sign-ups tripled after launch. The support team is always available and extremely helpful.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/80 to-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="orb w-72 h-72 bg-pink-700 bottom-10 left-10 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="section-heading mt-3">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subheading">
            Real stories from real businesses who trusted us to build their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 border border-white/5 hover:border-blue-500/20 card-hover relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-6 right-6 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-300"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-dark-300 leading-relaxed mb-6 relative z-10">"{t.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-dark-400 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
