import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Check, Sparkles, Zap, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const colors = {
  bg: '#F8FAFC',
  card: '#FFFFFF',
  primary: '#3B82F6',
  textMain: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
};

export default function Demo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    teamSize: '',
    useCase: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Live product walkthrough',
      desc: 'See Kyron in action with a personalized demo tailored to your use case.',
      color: '#F59E0B',
      bgColor: '#FEF3C7'
    },
    {
      icon: Users,
      title: 'Expert consultation',
      desc: 'Get advice from our solutions engineers on your specific requirements.',
      color: '#3B82F6',
      bgColor: '#DBEAFE'
    },
    {
      icon: Shield,
      title: 'Security review',
      desc: 'Learn about our enterprise security features and compliance certifications.',
      color: '#10B981',
      bgColor: '#D1FAE5'
    },
  ];

  const testimonials = [
    { company: '', stat: '3x faster', metric: 'issue resolution', color: '#FF3008' },
    { company: '', stat: '₹4L+ saved', metric: 'annually', color: '#FF4D00' },
    { company: '', stat: '15-25% increase', metric: 'in profit', color: '#635BFF' },
  ];

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
            <motion.a
              href="/login"
              className="text-sm"
              style={{ color: colors.textSecondary }}
              whileHover={{ color: colors.primary }}
            >
              Sign in
            </motion.a>

          </div>
        </div>
      </motion.nav>

      <div className="pt-16 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Form */}
        <motion.div 
          className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-8 sm:py-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-lg w-full mx-auto">
            {step === 1 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm mb-4 sm:mb-6"
                    style={{ backgroundColor: '#EDE9FE', color: '#8B5CF6' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Free 30-minute session</span>
                  </motion.div>
                  <h1 
                    className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3"
                    style={{ color: colors.textMain }}
                  >
                    Book your personalized demo
                  </h1>
                  <p 
                    className="text-sm sm:text-base mb-6 sm:mb-8"
                    style={{ color: colors.textSecondary }}
                  >
                    See how Kyron can help your team grow 3x faster.
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div 
                  className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer"
                      style={{ 
                        backgroundColor: colors.card, 
                        borderColor: colors.border 
                      }}
                      whileHover={{ 
                        borderColor: benefit.color,
                        x: 4
                      }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: benefit.bgColor }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <benefit.icon className="w-5 h-5" style={{ color: benefit.color }} />
                      </motion.div>
                      <div>
                        <h4 
                          className="font-semibold text-sm mb-0.5"
                          style={{ color: colors.textMain }}
                        >
                          {benefit.title}
                        </h4>
                        <p 
                          className="text-xs sm:text-sm"
                          style={{ color: colors.textSecondary }}
                        >
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.textMain }}
                    >
                      Work email *
                    </label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="py-3 rounded-xl border-2 focus:border-blue-500"
                      style={{ 
                        backgroundColor: colors.card, 
                        borderColor: colors.border,
                        color: colors.textMain 
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.textMain }}
                    >
                      Company name *
                    </label>
                    <Input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Inc."
                      className="py-3 rounded-xl border-2 focus:border-blue-500"
                      style={{ 
                        backgroundColor: colors.card, 
                        borderColor: colors.border,
                        color: colors.textMain 
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.textMain }}
                    >
                      Team size *
                    </label>
                    <Select 
                      value={formData.teamSize}
                      onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                    >
                      <SelectTrigger 
                        className="w-full py-3 rounded-xl border-2"
                        style={{ 
                          backgroundColor: colors.card, 
                          borderColor: colors.border,
                          color: colors.textMain 
                        }}
                      >
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.textMain }}
                    >
                      What are you building? *
                    </label>
                    <Select
                      value={formData.useCase}
                      onValueChange={(value) => setFormData({ ...formData, useCase: value })}
                    >
                      <SelectTrigger 
                        className="w-full py-3 rounded-xl border-2"
                        style={{ 
                          backgroundColor: colors.card, 
                          borderColor: colors.border,
                          color: colors.textMain 
                        }}
                      >
                        <SelectValue placeholder="Select use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internal-tools">Internal tools & dashboards</SelectItem>
                        <SelectItem value="ai-agents">AI agents & automation</SelectItem>
                        <SelectItem value="customer-portals">Customer portals</SelectItem>
                        <SelectItem value="data-pipelines">Data pipelines</SelectItem>
                        <SelectItem value="other">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.primary }}
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule your demo
                  </motion.button>

                  <p 
                    className="text-xs text-center"
                    style={{ color: colors.textSecondary }}
                  >
                    By submitting, you agree to our{' '}
                    <a 
                      href="#" 
                      className="transition-colors"
                      style={{ color: colors.textMain }}
                    >
                      Privacy Policy
                    </a>
                    {' '}and consent to receive communications.
                  </p>
                </motion.form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 sm:py-12"
              >
                <motion.div 
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  style={{ backgroundColor: '#D1FAE5' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <Check className="w-8 sm:w-10 h-8 sm:h-10" style={{ color: '#10B981' }} />
                </motion.div>
                <h2 
                  className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                  style={{ color: colors.textMain }}
                >
                  Demo request received!
                </h2>
                <p 
                  className="text-sm sm:text-base mb-6 sm:mb-8"
                  style={{ color: colors.textSecondary }}
                >
                  Our team will reach out within 24 hours to schedule your personalized demo.
                </p>
                <div 
                  className="rounded-2xl p-4 sm:p-4 mb-6 sm:mb-8 border-2"
                  style={{ backgroundColor: colors.card, borderColor: colors.border }}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <Clock 
                      className="w-5 h-5" 
                      style={{ color: colors.textSecondary }} 
                    />
                    <span 
                      className="text-sm"
                      style={{ color: colors.textMain }}
                    >
                      30 minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users 
                      className="w-5 h-5" 
                      style={{ color: colors.textSecondary }} 
                    />
                    <span 
                      className="text-sm"
                      style={{ color: colors.textMain }}
                    >
                      With a solutions engineer
                    </span>
                  </div>
                </div>
                <motion.a
                  href="/"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: colors.textSecondary }}
                  whileHover={{ x: -4, color: colors.textMain }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to home
                </motion.a>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Right side - Visual */}
        <motion.div 
          className="hidden lg:flex flex-1 relative overflow-hidden max-w-full items-center justify-center"
          style={{ 
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 right-0 w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
            
            <motion.div 
              className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, #34D399, #10B981)' }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-20"
              style={{ background: 'linear-gradient(135deg, #6EE7B7, #34D399)' }}
              animate={{ 
                scale: [1.3, 1, 1.3],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-12 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                Trusted by industry leaders
              </h2>
            </motion.div>

            {/* Testimonials */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {testimonials.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="rounded-2xl p-4 sm:p-5 border backdrop-blur-sm cursor-pointer"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    borderColor: 'rgba(255,255,255,0.2)' 
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    x: 4
                  }}
                >
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{item.stat}</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {item.metric} <span style={{ color: item.color }}>{item.company}</span>
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              className="text-white/60 text-sm mt-6 sm:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Only Modern companies looking to increase their Efficiency use Kyron to run their business.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
