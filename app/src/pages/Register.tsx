import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

const colors = {
  bg: '#F8FAFC',
  card: '#FFFFFF',
  primary: '#3B82F6',
  textMain: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!name) return setError("Name is required");
    if (!email) return setError("Email is required");
    if (password.length < 8) return setError("Password must be at least 8 characters");

    setIsLoading(true);

    try {
        const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, password })
        });

        const data = await res.json();

        if (!res.ok) {
        setError(data.detail || "Something went wrong");
        } else {
        setError("Registration successful! Redirecting...");
        setTimeout(() => {
            window.location.replace("/login");
        }, 2000);
        }

    } catch (err) {
        setError("Server not responding");
    } finally {
        setIsLoading(false);   // 🔥 ALWAYS RUNS
    }
    };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.bg }}>

      {/* Navigation */}
      <motion.nav 
            className="fixed top-0 left-0 right-0 z-50 border-b"
            style={{ backgroundColor: 'rgba(248, 250, 252, 0.95)', borderColor: colors.border }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">

                <motion.a 
                    href="/"
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <img 
                    src="/icon.png" 
                    alt="KYRON Logo"
                    className="w-14 h-14 object-contain"
                    />
                    <span 
                    className="text-base font-semibold tracking-tight"
                    style={{ color: colors.textMain }}
                    >
                    KYRON
                    </span>
                </motion.a>

                {/* Back link */}
                <motion.a 
                    href="/"
                    className="flex items-center gap-1 text-sm"
                    style={{ color: colors.textSecondary }}
                    whileHover={{ x: -4, color: colors.textMain }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </motion.a>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">
                <motion.a
                    href="/demo"
                    className="hidden sm:block px-4 py-2 text-sm rounded-lg transition-all"
                    style={{ color: colors.textSecondary }}
                    whileHover={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: colors.primary 
                    }}
                >
                    Book a demo
                </motion.a>
                
                <motion.a 
                    href="/login"
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium text-white transition-all shadow-lg"
                    style={{ backgroundColor: colors.primary, boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)' }}
                    whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.5)'
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="sm:inline">Login</span>
                </motion.a>

                </div>

            </div>
            </div>
        </motion.nav>

      {/* MAIN */}
      <div className="mt-10 flex flex-1 flex-col lg:flex-row">

        {/* LEFT */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-10">
          <div className="max-w-md w-full">

            <h1 className="text-3xl font-semibold mb-7" style={{ color: colors.textMain }}>
              Create your account
            </h1>
            

            {/* GOOGLE */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => window.open("http://localhost:8000/login/google", "_self")}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 bg-white"
                style={{ borderColor: colors.border }}
              >
                <img src="/google-icon.png" className="w-5 h-5" />
                <span className="text-sm font-medium">Continue with Google</span>
              </button>
            </div>

            {/* DIVIDER */}
            <div className="relative my-6">
              <div className="border-t" style={{ borderColor: colors.border }} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 text-sm"
                style={{ backgroundColor: colors.bg }}>
                or continue with email
              </span>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="text-sm mb-2 block">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                  <Input
                    className="pl-10 py-6 rounded-xl border-2"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                  <Input
                    type="email"
                    className="pl-10 py-6 rounded-xl border-2"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className="pl-10 pr-10 py-6 rounded-xl border-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2">
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white"
                style={{ backgroundColor: colors.primary }}
              >
                {isLoading ? 'Loading...' : 'Create account'}
              </button>

              {/* ERROR */}
              {error && (
                <p className="text-sm text-red-500 text-center">
                  {error}
                </p>
              )}

            </form>

          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-6 hidden lg:flex flex-1 relative overflow-hidden items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
        >

          {/* FLOATING BLOBS */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #10B981)' }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, #EC4899, #F59E0B)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* GRID */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center px-12">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Build execution, not chaos
            </h2>

            <p className="text-slate-400 max-w-sm mx-auto mb-8">
              Autonomous agents plan, execute, and recover workflows — so your team doesn’t chase work, it completes it.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">3x</p>
                <p className="text-sm text-white">Faster operations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">80%</p>
                <p className="text-sm text-white">Less manual work</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-white">Execution</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}