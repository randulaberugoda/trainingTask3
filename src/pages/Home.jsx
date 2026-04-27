import { Link } from 'react-router-dom'
import { ArrowRight, Zap, BarChart3, Shield, Star } from 'lucide-react'
import { motion } from 'framer-motion'

//  DATA 

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '3x', label: 'Avg. Productivity Boost' },
  { value: '24/7', label: 'Customer Support' },
]

const features = [
  {
    icon: <Zap size={32} className="text-cyan-400" />,
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive tasks with intelligent trigger-based automations that run while you sleep.',
  },
  {
    icon: <BarChart3 size={32} className="text-cyan-400" />,
    title: 'Business Intelligence',
    desc: 'Real-time dashboards and custom reports that turn raw data into clear business decisions.',
  },
  {
    icon: <Shield size={32} className="text-cyan-400" />,
    title: 'Secure Cloud Storage',
    desc: 'Enterprise-grade encryption with automated backups and role-based access control.',
  },
]

const testimonials = [
  {
    name: 'Aiden Perera',
    role: 'CEO, NovaTech',
    quote: 'Luminal Systems transformed how we operate. We saved 20+ hours a week within the first month.',
  },
  {
    name: 'Sara Jayawardena',
    role: 'Operations Lead, BlueWave Corp',
    quote: 'The BI dashboard alone was worth it. We finally understand our data and can act on it fast.',
  },
  {
    name: 'Kasun Silva',
    role: 'Founder, Pinnacle Ltd',
    quote: 'Setup was incredibly smooth. The team had us fully onboarded in under 5 days.',
  },
]

// ANIMATION 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

//COMPONENT 

function Home() {
  return (
    <div className="bg-[#0A0F2C] text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl"
        >
          {/* Badge */}
          <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            AI-Powered Business Automation
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Automate Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Grow Faster.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Luminal Systems gives your business the power to automate workflows,
            visualize data, and scale all from one intelligent platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/how-it-works"
              className="border border-white/20 hover:border-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS BAR  */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-4xl font-extrabold text-cyan-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              One Platform to automate, analyze, and accelerate every part of your operation.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Real results from real businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  FINAL CTA SECTION */}
      <section className="py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 border border-white/10 rounded-3xl p-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Illuminate Your Business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join 500+ businesses already using Luminal Systems to automate, grow, and win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Pricing <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 hover:border-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default Home