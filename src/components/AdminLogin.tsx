import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function AdminLogin({ onBack }: { onBack: () => void }) {
  const { login } = useAdmin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(username.trim(), password);
    setLoading(false);
    if (!res.ok) setError(res.error || 'Login failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 px-4 relative overflow-hidden">
      <div className="orb w-96 h-96 bg-blue-700 top-0 left-0 opacity-15" />
      <div className="orb w-80 h-80 bg-violet-700 bottom-0 right-0 opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-4 shadow-xl shadow-blue-500/30">
              <ShieldCheck size={30} className="text-white" />
            </div>
            <h1 className="font-display font-bold text-2xl text-white">Admin Login</h1>
            <p className="text-dark-400 text-sm mt-1">Yovial Technologies Admin Panel</p>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-dark-300 text-sm mb-1.5 block">Username</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-dark-300 text-sm mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <button
            onClick={onBack}
            className="mt-6 w-full flex items-center justify-center gap-2 text-dark-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={15} /> Back to Website
          </button>

          <p className="mt-6 text-center text-dark-500 text-xs">
            Default credentials: <span className="text-blue-400 font-mono">admin / admin123</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
