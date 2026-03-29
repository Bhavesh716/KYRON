import { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X,
  Check,
  Calendar,
  DollarSign,
  Truck,
  Palette,
  Zap,
  BarChart3,
  Database,
  Code,
  Smartphone,
  Workflow,
  Globe,
  Server,
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  Layers,
  TrendingUp,
  Cpu,
  LayoutDashboard,
  BellRing,
  Play,
  Bot,
  RefreshCcw,
  ClipboardList,
  Megaphone,
  Share2,
  UserPlus,
  Scale,
  Rocket,
  Briefcase,
  Activity,
  Mic,
  Plug,
  Brain
} from 'lucide-react';
import { SiSlack, SiNotion, SiJira, SiGoogle, SiGmail, SiGithub, SiFigma, SiZendesk } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

// Custom colors
const colors = {
  bg: '#F8FAFC',
  card: '#FFFFFF',
  primary: '#3B82F6',
  textMain: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
};

// Logo Marquee Component
function LogoMarquee() {
  const logos = [
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Amazon', color: '#FF9900' },
    { name: 'PLAID', color: '#00D64F' },
    { name: 'OpenAI', color: '#10A37F' },
    { name: 'Brex', color: '#FF6B00' },
    { name: 'Ramp', color: '#FF4D00' },
    { name: 'Pinterest', color: '#E60023' },
    { name: 'Adobe', color: '#FF0000' },
    { name: 'DoorDash', color: '#FF3008' },
    { name: 'Snowflake', color: '#29B5E8' },
    { name: 'Databricks', color: '#FF3621' },
    { name: 'Notion', color: '#000000' },
  ];

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 z-0">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />
      <motion.div
        className="flex gap-8 sm:gap-16 items-center z-0"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <span 
            key={idx} 
            className="text-sm sm:text-lg font-semibold whitespace-nowrap opacity-45 hover:opacity-90 transition-opacity duration-300 cursor-default z-0"
            style={{ color: logo.color }}
          >
            {logo.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const platformItems = [
    { name: 'Autonomous Execution', icon: Bot, desc: 'Low human intervention', color: '#8B5CF6', bgColor: '#EDE9FE' },
    { name: 'Planning Engine', icon: Brain, desc: 'Adapts plans dynamically', color: '#06B6D4', bgColor: '#CFFAFE' },
    { name: 'Meeting Intelligence', icon: Mic, desc: 'Understands Meetings , extracts Decisions', color: '#3B82F6', bgColor: '#DBEAFE' },
    { name: 'Failure Detection & Recovery', icon: Activity , desc: 'Proactive execution', color: '#10B981', bgColor: '#D1FAE5' },
    { name: 'Multiple Agents', icon: Users , desc: 'Specialized AI agents workign together', color: '#F59E0B', bgColor: '#FEF3C7' },
    { name: 'Integrations', icon: Plug, desc: 'Connects tools, databases, and APIs', color: '#EC4899', bgColor: '#FCE7F3' },
    { name: 'Audit Trail', icon: ClipboardList, desc: 'All decisions are logged with reasoning', color: '#6366F1', bgColor: '#E0E7FF' },
    { name: 'Optimization', icon: TrendingUp, desc: 'Learns from past executions', color: '#14B8A6', bgColor: '#CCFBF1' },
  ];

    const navItems = [
    { label: 'Benefits', id: 'benefits' },
    { label: 'Use cases', id: 'use_cases' },
    { label: 'Platform Overview', id: 'platform' },
    { label: 'Reviews', id: 'reviews' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled 
          ? 'linear-gradient(to bottom, rgba(240, 249, 255, 0.7), rgba(255, 255, 255, 0.4))'
          : 'linear-gradient(to bottom, rgba(240, 249, 255, 0.4), rgba(255, 255, 255, 0.2))',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.08)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.a 
              href="/"
              className="flex items-center group"
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
            
            <div className="hidden lg:flex items-center gap-1">
              <div 
                className="relative"
                onMouseEnter={() => setPlatformDropdownOpen(true)}
                onMouseLeave={() => setPlatformDropdownOpen(false)}
              >
                <motion.button 
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all"
                  style={{ color: colors.textSecondary }}
                  whileHover={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: colors.primary 
                  }}
                >
                  Core Capabilities
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${platformDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </motion.button>
                
                <AnimatePresence>
                  {platformDropdownOpen && (
                    <motion.div 
                      className="absolute top-full left-0 pt-2"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0}}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div 
                        className="rounded-2xl shadow-2xl p-4 w-[480px]"
                        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {platformItems.map((item, idx) => (
                            <motion.a
                              key={item.name}
                              href="#"
                              className="flex items-start gap-3 p-4 rounded-2xl transition-all duration-300 group"
                              style={{ 
                                backgroundColor: 'transparent',
                              }}
                              whileHover={{ 
                                backgroundColor: item.bgColor,
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <div 
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                style={{ backgroundColor: item.bgColor }}
                              >
                                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                              </div>
                              <div>
                                <span 
                                  className="text-sm font-semibold block transition-colors"
                                  style={{ color: colors.textMain }}
                                >
                                  {item.name}
                                </span>
                                <span 
                                  className="text-xs block mt-0.5"
                                  style={{ color: colors.textSecondary }}
                                >
                                  {item.desc}
                                </span>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                        
                        <div 
                          className="mt-4 pt-4 border-t flex items-center justify-between"
                          style={{ borderColor: colors.border }}
                        >
                          <span 
                            className="text-xs"
                            style={{ color: colors.textSecondary }}
                          >
                            New: BYO-AI now available
                          </span>
                          <motion.a
                            href="/login"
                            className="text-xs font-medium flex items-center gap-1 px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: '#EDE9FE', color: '#8B5CF6' }}
                            whileHover={{ scale: 1.02 }}
                          >
                            Try it 
                            <ArrowRight className="w-3 h-3" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="px-3 py-2 text-sm rounded-lg transition-all"
                  style={{ color: colors.textSecondary }}
                  whileHover={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: colors.primary 
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <div className="relative">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 240, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 rounded-full text-sm border-2 focus:outline-none"
                      style={{ 
                        backgroundColor: colors.card, 
                        borderColor: colors.primary,
                        color: colors.textMain 
                      }}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: colors.textSecondary }} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button 
                className="p-2 rounded-lg transition-all relative z-10"
                style={{ color: colors.textSecondary }}
                onClick={() => setSearchOpen(!searchOpen)}
                whileHover={{ 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: colors.primary 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </motion.button>
            </div>
            
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
              <span className="hidden sm:inline">Get started</span>
              <span className="sm:hidden">Start</span>
            </motion.a>
            
            <motion.button 
              className="lg:hidden p-2 rounded-lg transition-all"
              style={{ color: colors.textSecondary }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40"
            style={{ backgroundColor: colors.bg }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-6 space-y-2 overflow-y-auto h-full">
              {['Benefits', 'Use Cases', 'Platform Overview', 'Reviews'].map((item, idx) => (
                <motion.a 
                  key={item}
                  href="/"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-2xl text-base font-medium transition-all"
                  style={{ color: colors.textMain, backgroundColor: colors.card }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.01 }}
                  whileHover={{ x: 4, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                >
                  {item}
                  <ArrowRight className="w-5 h-5" style={{ color: colors.textSecondary }} />
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <motion.a 
                  href="/demo"
                  className="block w-full px-4 py-3 rounded-2xl text-center font-medium transition-all"
                  style={{ color: colors.textMain, backgroundColor: colors.card }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  Demo
                </motion.a>
                <motion.a 
                  href="/login"
                  className="block w-full px-4 py-3 rounded-2xl text-center font-medium text-white transition-all"
                  style={{ backgroundColor: colors.primary }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  Get started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section 
      id="hero"
      className="pt-32 sm:pt-32 pb-16 sm:pb-12 px-4 sm:px-6 lg:px-6 relative overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 z-10"
          style={{ background: 'linear-gradient(135deg, #06B6D4, #10B981)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #EC4899, #F59E0B)' }}
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative min-h-[80vh] flex flex-col justify-center">
        <motion.div
          className="text-center mb-12 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4 sm:mb-6"
            style={{ backgroundColor: '#EDE9FE', color: '#8B5CF6' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.01, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Now with Bring-Your-Own Agents</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
          
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-4 leading-[1.1] tracking-tight"
            style={{ color: colors.textMain }}
          >
            Your decisions are not poor<br className="hidden sm:block" />
            <span style={{ color: colors.textSecondary }}> Execution is.</span>
          </h1>
          
          <p 
            className="text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4"
            style={{ color: colors.textSecondary }}
          >
            Replace manual coordination with autonomous workflow execution — ensure every task meets deadline, every delay is handled, and every outcome is delivered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.a 
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm font-medium text-white transition-all shadow-xl"
              style={{ backgroundColor: colors.primary, boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)' }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start achieving your goals
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
            <motion.a 
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm font-medium transition-all border-2"
              style={{ 
                color: colors.textMain, 
                backgroundColor: colors.card,
                borderColor: colors.border 
              }}
              whileHover={{ 
                scale: 1.02,
                borderColor: colors.primary,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4" />
              Watch demo
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t pt-2 sm:pt-8"
          style={{ borderColor: colors.border }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.01, duration: 0.2 }}
        >
          <p 
            className="text-center text-s sm:text-sm mb-1 sm:mb-1 uppercase tracking-wider"
            style={{ color: colors.textSecondary }}
          >
            Trusted by teams at
          </p>
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: 'Autonomous Workflow Execution',
      desc: 'From goal to completion — KYRON plans, assigns, executes, and tracks workflows without constant human coordination.',
      badges: ['Low Manual Intervention', 'Data security'],
      color: '#10B981',
      bgColor: '#D1FAE5'
    },
    {
      icon: RefreshCcw,
      title: 'Failure Prediction & Self-Recovery',
      desc: 'Predicts delays, missed deadlines, and workflow breakdowns — then automatically reassigns, escalate, or adapts the plan.',
      badges: ['Follow-ups', 'Smart Planning', 'Auto Recovery'],
      color: '#3B82F6',
      bgColor: '#DBEAFE'
    },
    {
      icon: ClipboardList,
      title: 'Full Decision Auditability',
      desc: 'Every action, decision, and system intervention is logged with reasoning — ensuring transparency and control.',
      badges: ['Action Logs', 'Reasoning', 'Decision Trace'],
      color: '#8B5CF6',
      bgColor: '#EDE9FE'
    },
  ];

  const stats = [
    { value: '80+', label: 'Hours a month', company: 'Time Saved', color: '#EC4899' },
    { value: '15-25%', label: 'Increase in output', company: 'Income Generation', color: '#FF9900' },
    { value: '₹400000', label: 'Operational cost saved', company: 'Money Saved', color: '#635BFF' },
    { value: '3x', label: 'Faster Issue Resolution', company: 'Work Efficiency', color: '#00D64F' },
  ];

  return (
    <section 
      id="benefits"
      className="scroll-mt-10 py-16 sm:py-14 px-4 sm:px-6 lg:px-6"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 
            className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6"
            style={{ color: colors.textMain }}
          >
            Measurable Impact & benefits
          </h3>

        <motion.div 
          className="grid md:grid-cols-3 gap-4 sm:gap-4 mb-12 sm:mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="rounded-2xl p-4 sm:p-5 border-2 transition-all duration-500 group cursor-pointer"
              style={{ 
                backgroundColor: colors.card, 
                borderColor: colors.border 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.005, duration: 0.2 }}
              whileHover={{ 
                y: -8,
                borderColor: feature.color,
                boxShadow: `0 20px 40px ${feature.bgColor}80`
              }}
            >
              <motion.div 
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{ backgroundColor: feature.bgColor }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
              </motion.div>
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: colors.textMain }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm leading-relaxed mb-4"
                style={{ color: colors.textSecondary }}
              >
                {feature.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {feature.badges.map((badge) => (
                  <motion.span 
                    key={badge} 
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ backgroundColor: feature.bgColor, color: feature.color }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2}}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="rounded-2xl p-4 sm:p-4 border-2 transition-all duration-300 group cursor-pointer"
              style={{ 
                backgroundColor: colors.card, 
                borderColor: colors.border 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + idx * 0.05, duration: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: stat.color,
                boxShadow: `0 12px 24px ${stat.color}20`
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Check className="w-4 h-4" style={{ color: stat.color }} />
                </motion.div>
                <span 
                  className="text-xs uppercase tracking-wider font-medium"
                  style={{ color: colors.textSecondary }}
                >
                  {stat.company}
                </span>
              </div>
              <motion.p 
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: colors.textMain }}
              >
                {stat.value}
              </motion.p>
              <p 
                className="text-xs sm:text-sm"
                style={{ color: colors.textSecondary }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Agents Section
function AgentsSection() {
  const useCases = [
    {
      icon: Megaphone,
      title: 'Launching a Marketing Campaign',
      desc: 'From strategy discussion to execution — plans campaign tasks, assigns teams, tracks deliverables, and ensures launch deadlines are met.',
      tools: [SiSlack, SiGoogle, SiGmail],
      color: '#8B5CF6',
      bgColor: '#EDE9FE'
    },
    {
      icon: Share2,
      title: 'Social Media Content Pipeline',
      desc: 'Plans content calendar, assigns creatives, tracks progress, and ensures consistent publishing without manual follow-ups.',
      tools: [SiNotion, SiFigma, SiSlack],
      color: '#3B82F6',
      bgColor: '#DBEAFE'
    },
    {
      icon: UserPlus,
      title: 'Employee Onboarding Workflow',
      desc: 'Coordinates onboarding steps — document submission, account setup, training tasks, and progress tracking automatically.',
      tools:  [SiGoogle, SiGmail, SiSlack],
      color: '#10B981',
      bgColor: '#D1FAE5'
    },
    {
      icon: Scale,
      title: 'Legal & Compliance Review Process',
      desc: 'Manages document review workflows, assigns stakeholders, tracks approvals, and ensures compliance deadlines are met.',
      tools: [SiGoogle, SiNotion, SiSlack],
      color: '#F59E0B',
      bgColor: '#FEF3C7'
    },
    {
      icon: Rocket,
      title: 'Product Release Coordination',
      desc: 'Aligns engineering, design, and marketing teams — ensuring tasks are completed, dependencies resolved, and releases happen on time.',
      tools: [SiGithub, SiJira, SiSlack],
      color: '#EC4899',
      bgColor: '#FCE7F3'
    },
    {
      icon: Briefcase,
      title: 'Client Delivery & Follow-Up System',
      desc: 'Tracks client deliverables, ensures deadlines are met, sends updates, and follows up automatically until completion.',
      tools: [SiSlack, SiZendesk, SiGmail],
      color: '#06B6D4',
      bgColor: '#CFFAFE'
    },
  ];

  return (
    <section 
      id="use_cases" 
      className="scroll-mt-12 py-10 sm:py-10 px-4 sm:px-6 lg:px-6"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h3 
            className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6"
            style={{ color: colors.textMain }}
          >
            Real life use cases 
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx}
                className="rounded-2xl p-3 sm:p-4 border-2 transition-all duration-500 group cursor-pointer"
                style={{ 
                  backgroundColor: colors.card, 
                  borderColor: colors.border 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.01, duration: 0.2 }}
                whileHover={{ 
                  y: -6,
                  borderColor: useCase.color,
                  boxShadow: `0 16px 32px ${useCase.bgColor}80`
                }}
              >
                <motion.div 
                  className="w-10 sm:w-9 h-9 sm:h-9 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300"
                  style={{ backgroundColor: useCase.bgColor }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  <useCase.icon className="w-5 sm:w-6 h-5 sm:h-6" style={{ color: useCase.color }} />
                </motion.div>
                <h4 
                  className="text-sm sm:text-base font-semibold mb-2"
                  style={{ color: colors.textMain }}
                >
                  {useCase.title}
                </h4>
                <p 
                  className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {useCase.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span 
                    className="text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    Integrates with
                  </span>
                  <div className="flex gap-1">
                    {useCase.tools.map((ToolIcon, i) => (
                      <motion.div 
                        key={i}
                        className="w-6 h-6 flex items-center justify-center rounded-md"
                        style={{ backgroundColor: useCase.bgColor }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <ToolIcon 
                          className="w-4 h-4"
                          style={{ color: useCase.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Platform Features Section
function PlatformSection() {
    const features = [
    {
      icon: LayoutDashboard,
      title: 'Execution Overview',
      desc: 'Track task status, goal progress, deadlines, and real-time team activity — all in one unified dashboard.',
      color: '#3B82F6',
      bgColor: '#DBEAFE'
    },
    {
      icon: BellRing,
      title: 'Human-in-the-Loop',
      desc: 'Critical decisions, approvals, and confirmations are surfaced instantly — keeping humans in control when needed.',
      color: '#8B5CF6',
      bgColor: '#EDE9FE'
    },
    {
      icon: Mic,
      title: 'Live Meeting Agent',
      desc: 'Attends meetings, responds in real time, fetches company data, and drives decisions like an intelligent assistant.',
      color: '#10B981',
      bgColor: '#D1FAE5'
    },
  ];

  return (
    <section 
      id="platform"
      className="scroll-mt-16 py-16 sm:py-16 px-4 sm:px-6 lg:px-6"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block font-medium"
              style={{ color: colors.primary }}
            >
              Platform Overview
            </motion.span>

            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-7 leading-tight"
              style={{ color: colors.textMain }}
            >
              Smart, Complete Execution,<br/>
              <span style={{ color: colors.textSecondary }}>
                not just another AI tool
              </span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">

              {/* TAB 1 */}
              <motion.div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#DBEAFE' }}>
                  <LayoutDashboard className="w-5 h-5 text-blue-500"/>
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.textMain }}>
                    Execution Overview
                  </h4>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    Tasks, goals, deadlines, and team activity — all tracked in real time.
                  </p>
                </div>
              </motion.div>

              {/* TAB 2 */}
              <motion.div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#EDE9FE' }}>
                  <BellRing className="w-5 h-5 text-purple-500"/>
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.textMain }}>
                    Human-in-the-Loop
                  </h4>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    Approvals, confirmations, and critical decisions — surfaced instantly when needed.
                  </p>
                </div>
              </motion.div>

              {/* TAB 3 */}
              <motion.div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#D1FAE5' }}>
                  <Mic className="w-5 h-5 text-green-500"/>
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.textMain }}>
                    Live Meeting Agent
                  </h4>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    Joins meetings, answers in real-time, fetches company data, and drives execution.
                  </p>
                </div>
              </motion.div>

            </div>
            
            <motion.a 
              href="/demo"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* RIGHT (ONLY CONTENT CHANGED) */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="rounded-3xl shadow-2xl overflow-hidden border-2"
              style={{ 
                backgroundColor: colors.card, 
                borderColor: colors.border
              }}
            >

              {/* TOP BAR */}
              <div 
                className="px-6 py-3 flex items-center gap-4 border-b"
                style={{ backgroundColor: '#EDE9FE', borderColor: '#DDD6FE' }}
              >
                <span className="text-sm font-semibold text-purple-600">
                  KYRON
                </span>
                <div className="flex gap-4 text-xs">
                  <span className="text-purple-400">Overview</span>
                  <span className="text-purple-400">Execution</span>
                  <span className="font-semibold px-3 py-1 rounded-full bg-white text-purple-600">
                    Dashboard
                  </span>
                  <span className="text-purple-400">Logs</span>
                </div>
              </div>

              {/* MAIN UI */}
              <div className="p-4">
                <div className="rounded-2xl p-5" style={{ backgroundColor: colors.bg }}>

                  {/* HEADER */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: colors.textMain }}>
                      Execution Dashboard
                    </span>
                    <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                      Live
                    </span>
                  </div>

                  {/* PROGRESS */}
                  <div className="space-y-3 mb-4">

                    <div>
                      <div className="flex justify-between text-xs">
                        <span>Task Status</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-blue-500 rounded w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs">
                        <span>Goal Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-purple-500 rounded w-[65%]" />
                      </div>
                    </div>

                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-3 text-center text-xs mb-4">
                    <div>
                      <p className="font-bold">12</p>
                      <p>Active Tasks</p>
                    </div>
                    <div>
                      <p className="font-bold">5</p>
                      <p>Approvals</p>
                    </div>
                    <div>
                      <p className="font-bold">3</p>
                      <p>Deadlines</p>
                    </div>
                  </div>

                  {/* LIVE AI FEEDBACK */}
                  <div className="text-xs p-3 rounded-lg bg-purple-50 text-purple-700">
                    AI: Campaign delayed — reallocating team & updating timeline.
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "KYRON completely changed how we handle execution. What used to take constant follow-ups now runs automatically.",
      name: "Aman Verma",
      role: "Product Lead, FinTech Startup",
      image: "/testimonials/user2.jpg"
    },
    {
      quote: "The biggest value is not automation — it's reliability. Workflows no longer break midway.",
      name: "Riya Sharma",
      role: "Operations Manager, SaaS Company",
      image: "/testimonials/user1.jpg"
    },
    {
      quote: "We reduced coordination overhead massively. Teams now focus on actual work instead of chasing updates.",
      name: "Karan Mehta",
      role: "Engineering Manager",
      image: "/testimonials/user3.jpg"
    },
    {
      quote: "The audit logs alone make this system enterprise-ready. Every decision is traceable.",
      name: "Neha Kapoor",
      role: "Compliance Head",
      image: "/testimonials/user4.png"
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // responsive detection (PROPER)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // position logic (STACK MODEL)
  const getPosition = (i: number) => {
    if (i === index) return "center";
    if (i === (index + 1) % testimonials.length) return "right";
    if (i === (index - 1 + testimonials.length) % testimonials.length) return "left";
    return "hidden";
  };

  return (
    <section id="reviews" className="scroll-mt-24 py-4 px-2" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto text-center relative">

        {/* subtle background */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 blur-2xl"></div>

        <h3 className="text-lg sm:text-2xl font-semibold mb-2" style={{ color: colors.textMain }}>
          What users say about us
        </h3>

        {/* CAROUSEL */}
        <div className="relative h-[260px] sm:h-[300px] flex items-center justify-center">

          {testimonials.map((t, i) => {
            const pos = getPosition(i);

            const offset = isMobile ? 60 : 140;

            let x = 0;
            let scale = 0.85;
            let opacity = 0;
            let zIndex = 0;

            if (pos === "center") {
              x = 0;
              scale = 1;
              opacity = 1;
              zIndex = 3;
            } 
            else if (pos === "right") {
              x = offset;
              scale = 0.9;
              opacity = 0.5;
              zIndex = 2;
            } 
            else if (pos === "left") {
              x = -offset;
              scale = 0.9;
              opacity = 0.5;
              zIndex = 2;
            }

            return (
              <motion.div
                key={i}
                className="absolute w-[90%] sm:w-[75%] md:w-[55%] lg:w-[45%] p-6 rounded-2xl border backdrop-blur-xl"
                style={{
                  borderColor: colors.border,
                  background: `linear-gradient(135deg, ${colors.card}, ${colors.bg})`,
                }}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.5 }}
                initial={false}
              >

                {/* subtle glow only for center */}
                {pos === "center" && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.12), transparent 70%)",
                    }}
                  />
                )}

                {/* CONTENT */}
                <div className="relative z-10">
                  <p
                    className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
                    style={{ color: colors.textMain }}
                  >
                    "{t.quote}"
                  </p>

                  <div className="flex flex-col items-center text-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border mb-2"
                    />
                    <p className="font-semibold" style={{ color: colors.textMain }}>
                      {t.name}
                    </p>
                    <p className="text-sm" style={{ color: colors.textSecondary }}>
                      {t.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section 
      className="py-16 sm:py-16 px-4 sm:px-6 lg:px-6"
      style={{ backgroundColor: colors.bg }}
    >
      <motion.div 
        className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #10B981)' }}
            animate={{ 
              scale: [1.3, 1, 1.3],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Let Execution Run Itself
          </motion.h2>
          <motion.p 
            className="text-slate-400 mb-4 sm:mb-6 max-w-lg mx-auto text-sm sm:text-sm px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Join big companies building products faster with Kyron.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.a 
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm sm:text-sm font-medium transition-all"
              style={{ backgroundColor: colors.primary, color: 'white' }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm sm:text-sm font-medium border-2 border-slate-600 text-white transition-all"
              whileHover={{ 
                scale: 1.05, 
                borderColor: colors.primary,
                backgroundColor: 'rgba(59, 130, 246, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book a demo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer
      className="py-6 px-4 border-t"
      style={{ backgroundColor: colors.card, borderColor: colors.border }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/icon.png" // 
            alt="KYRON"
            className="w-7 h-7 object-contain"
          />
          <span
            className="text-sm sm:text-base font-semibold"
            style={{ color: colors.textMain }}
          >
            KYRON
          </span>
        </div>

        {/* CENTER - LINKS */}
        <div className="flex gap-4 text-xs sm:text-sm">
          {["Terms", "Privacy", "Security"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              whileHover={{ color: colors.primary }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* RIGHT - COPYRIGHT */}
        <p
          className="text-xs"
          style={{ color: colors.textSecondary }}
        >
          © 2026 KYRON
        </p>

      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AgentsSection />
      <PlatformSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
