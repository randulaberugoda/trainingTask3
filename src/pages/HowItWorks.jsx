import { Link } from 'react-router-dom'
import {
  CalendarCheck, Settings2, Rocket, BarChart3,
  ArrowRight, CheckCircle2, Clock, HeartHandshake
} from 'lucide-react'
import { motion } from 'framer-motion'

// data

const steps = [
  {
    icon: <CalendarCheck size={36} className="text-cyan-400" />,
    step: '01',
    title: 'Book a Free Consultation',
    desc: 'Start with a free 30-minute discovery call with one of our specialists. Tell us about your business, your current challenges, and what you want to achieve. No pressure, no commitments — just an honest conversation.',
    bullets: [
      'Understand your current workflow pain points',
      'Identify the best Luminal modules for your needs',
      'Get a clear picture of what onboarding looks like',
    ],
    side: 'left',
  },
  {
    icon: <Settings2 size={36} className="text-cyan-400" />,
    step: '02',
    title: 'We Design Your System',
    desc: 'After the call, our team maps out your entire workflow and proposes a custom Luminal setup built specifically around how your business operates.',
    bullets: [
      'Full workflow mapping and process documentation',
      'Custom automation rule design',
      'Integration planning with your existing tools',
    ],
    side: 'right',
  },
  {
    icon: <Rocket size={36} className="text-cyan-400" />,
    step: '03',
    title: 'We Build & Integrate',
    desc: 'Our engineers configure your Luminal environment, connect it to your existing software stack, and run thorough testing before handing anything over to you.',
    bullets: [
      'Full platform setup and configuration',
      'API and third-party tool integration',
      'End-to-end testing before go-live',
    ],
    side: 'left',
  },
  {
    icon: <BarChart3 size={36} className="text-cyan-400" />,
    step: '04',
    title: 'Go Live & Grow',
    desc: 'Once everything is tested and you are trained up, we flip the switch. From here, you have a fully automated system working in the background — and our support team watching your back.',
    bullets: [
      'Live training session for your whole team',
      'Real-time monitoring dashboard access',
      '24/7 ongoing support and optimization',
    ],
    side: 'right',
  },
]

const benefits = [
  {
    icon: <Clock size={32} className="text-cyan-400" />,
    title: 'Fast Onboarding',
    desc: 'Most clients are fully set up and running within 3 to 5 business days. We handle the heavy lifting so you can focus on your business.',
  },
  {
    icon: <CheckCircle2 size={32} className="text-cyan-400" />,
    title: 'No Technical Skills Needed',
    desc: 'Luminal is built for business owners, not developers. Our visual tools and guided setup mean anyone on your team can use it confidently.',
  },
  {
    icon: <HeartHandshake size={32} className="text-cyan-400" />,
    title: 'A Partner, Not Just a Tool',
    desc: 'We do not disappear after onboarding. Our team stays involved, runs quarterly check-ins, and helps you scale as your business grows.',
  },
]

// animation

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

// component

function HowItWorks() {
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
            The Process
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Up and Running in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              4 Simple Steps
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We have designed the entire journey from your first call to full
            automation to be as smooth and stress free as possible.
          </p>
        </motion.div>
      </section>

      {/* steps section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-600/20 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={step.side === 'left' ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                step.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* content card */}
              <div className="md:w-[45%] bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">

                {/* step badge */}
                <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3 block">
                  Step {step.step}
                </span>

                {/* icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  {step.icon}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                {/* description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* bullet points */}
                <ul className="flex flex-col gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-0.5">✦</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* center circle with step number */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 border-4 border-[#0A0F2C] items-center justify-center z-10">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>

              {/* empty space for opposite side */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* why luminal benefits */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Businesses Choose Luminal</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              It is not just about the software — it is about the experience of working with a team that genuinely cares.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* final cta */}
      <section className="py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 border border-white/10 rounded-3xl p-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book your free consultation today or explore our pricing to find the right plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/pricing"
              className="border border-white/20 hover:border-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default HowItWorks