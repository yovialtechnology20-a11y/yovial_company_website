import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918247475087?text=Hello%20Yovial%20Technologies%2C%20I%20need%20a%20website."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/40">
        <MessageCircle size={26} className="text-white" />
      </div>
      <span className="absolute right-16 bottom-3 whitespace-nowrap glass-strong text-white text-sm font-medium px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
