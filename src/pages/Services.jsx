import { Link } from 'react-router-dom'
import {
  Zap, BarChart3, Shield, Code2,
  Check, ArrowRight, Clock, Users, Headphones, Rocket
} from 'lucide-react'
import { motion } from 'framer-motion'

// data
const services = [
  {
    icon: <Zap size={40} className="text-cyan-400" />,
    title: 'Workflow Automation',
    desc: 'Eliminate manual, repetitive tasks with intelligent automations that trigger based on your business rules.',
    features: [
      'Visual drag-and-drop process builder',
      'Trigger-based automation rules',
      'Third-party app integrations',
      'Real-time automation logs',
      'Custom rule & condition builder',
    ],
  },
  {
    icon: <BarChart3 size={40} className="text-cyan-400" />,
    title: 'Business Intelligence Dashboard',
    desc: 'Transform raw data into clear, actionable insights with real-time dashboards built for decision makers.',
    features: [
      'Real-time KPI tracking',
      'Custom drag-and-drop reports',
      'Data visualization & charts',
      'CSV & Excel export',
      'Scheduled automated reports',
    ],
  },
  {
    icon: <Shield size={40} className="text-cyan-400" />,
    title: 'Cloud Data Management',
    desc: 'Store, manage, and protect your business data with enterprise-grade cloud infrastructure.',
    features: [
      'Secure cloud storage (up to 500GB)',
      'Automated daily backups',
      'Role-based access control',
      'Full audit trail & activity logs',
      'GDPR-compliant data handling',
    ],
  },
  {
    icon: <Code2 size={40} className="text-cyan-400" />,
    title: 'API & Systems Integration',
    desc: 'Connect Luminal to your existing tools and systems with our powerful REST API and integration suite.',
    features: [
      'Full REST API access',
      'CRM & ERP integrations',
      'Webhook support',
      'Developer documentation portal',
      'Dedicated integration support',
    ],
  },
]

const process = [
  {
    icon: <Users size={28} className="text-cyan-400" />,
    step: '01',
    title: 'Discovery Call',
    desc: 'We start with a free 30-minute consultation to understand your business challenges and goals.',
  },
  {
    icon: <Rocket size={28} className="text-cyan-400" />,
    step: '02',
    title: 'Custom Setup',
    desc: 'Our team designs and configures your Luminal environment tailored specifically to your workflows.',
  },
  {
    icon: <Clock size={28} className="text-cyan-400" />,
    step: '03',
    title: 'Onboarding & Training',
    desc: 'We walk your team through the platform with live training sessions and detailed documentation.',
  },
  {
    icon: <Headphones size={28} className="text-cyan-400" />,
    step: '04',
    title: 'Ongoing Support',
    desc: 'After launch, our 24/7 support team is always available to help you scale and optimize.',
  },
]

// animation

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// component

function Services() {
  return (
    <div className="bg-[#0A0F2C] text-white">

      {/* hero section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 relative overflow-hidden">

        {/* background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Powerful Services Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Modern Business
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From automation to analytics, Luminal Systems gives you everything
            you need to run a smarter, faster, and more efficient operation.
          </p>
        </motion.div>
      </section>

      {/* service cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 flex flex-col"
            >
              {/* icon */}
              <div className="mb-5">{service.icon}</div>

              {/* title and desc */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* feature list */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-cyan-400" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* cta button */}
              <Link
                to="/contact"
                className="mt-auto flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* process section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How We Deliver</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A simple, proven process that gets you from sign-up to fully operational — fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                {/* step number */}
                <span className="text-5xl font-extrabold text-white/5 absolute top-4 right-4">
                  {item.step}
                </span>

                {/* icon */}
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                {/* connector arrow between steps */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-indigo-400 z-10">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* bottom cta */}
      <section className="py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 border border-white/10 rounded-3xl p-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Choose a plan that fits your business or talk to our team for a custom solution.
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
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default Services