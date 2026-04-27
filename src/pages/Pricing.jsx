import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

//  DATA 
const plans = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 23,
    desc: 'Perfect for freelancers and early stage startups.',
    highlight: false,
    features: [
      '1 user account',
      '3 active automations',
      '5GB cloud storage',
      'Email support',
      'Basic analytics dashboard',
      'API access (read only)',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 63,
    desc: 'The most popular choice for growing businesses.',
    highlight: true,
    features: [
      'Up to 10 user accounts',
      'Unlimited automations',
      '50GB cloud storage',
      'Priority support (24/7)',
      'Full BI dashboard',
      'Full API access',
      'Third-party integrations',
      'Custom reports',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 159,
    desc: 'For large organizations that need full power and control.',
    highlight: false,
    features: [
      'Unlimited user accounts',
      'Unlimited automations',
      '500GB cloud storage',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee (99.9% uptime)',
      'On site training available',
      'Custom contract & billing',
    ],
  },
]

const trustedBy = [
  'NovaTech',
  'BlueWave Corp',
  'Pinnacle Ltd',
  'Orion Media',
  'Crest Analytics',
]

const faqs = [
  {
    question: 'How long does onboarding take?',
    answer: 'Most clients are fully onboarded and operational within 3 to 5 business days. Our team handles the entire setup process for you.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes. There are no long-term contracts on the Basic or Pro plans. You can cancel at any time from your account dashboard with no penalties.',
  },
  {
    question: 'Do you offer custom plans?',
    answer: 'Absolutely. If none of our standard tiers fit your needs, contact our sales team and we will put together a tailored solution and pricing for you.',
  },
]

//  ANIMATION 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

//  COMPONENT 

function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const navigate = useNavigate()

  // When user clicks Buy Now pass plan data to checkout page
  const handleBuyNow = (plan) => {
    navigate('/checkout', {
      state: {
        planName: plan.name,
        price: yearly ? plan.yearlyPrice : plan.monthlyPrice,
        billing: yearly ? 'yearly' : 'monthly',
      },
    })
  }

  return (
    <div className="bg-[#0A0F2C] text-white">

      {/* HERO SECTION */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Simple Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Plans That Grow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              With Your Business
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No confusing tiers. Just powerful tools at a price
            that makes sense for where you are right now.
          </p>
        </motion.div>
      </section>

      {/* TOGGLE */}
      <div className="flex items-center justify-center gap-4 pb-12">
        <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-gray-400'}`}>
          Monthly
        </span>

        {/* Toggle Switch */}
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
            yearly ? 'bg-indigo-600' : 'bg-white/20'
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
              yearly ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>

        <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-gray-400'}`}>
          Yearly
        </span>

        {/* Save badge */}
        {yearly && (
          <span className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
            Save 20%
          </span>
        )}
      </div>

      {/* PRICING CARDS */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-indigo-600 border-2 border-indigo-400 shadow-2xl shadow-indigo-500/30 scale-105'
                  : 'bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40'
              }`}
            >
              {/* Best Value Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-400 text-[#0A0F2C] text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Zap size={12} /> BEST VALUE
                  </span>
                </div>
              )}

              {/* Plan Name & Desc */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-extrabold">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                  / mo
                </span>
                {yearly && (
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                    Billed Annually 
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight
                        ? 'bg-white/20'
                        : 'bg-cyan-400/10 border border-cyan-400/30'
                    }`}>
                      <Check size={12} className={plan.highlight ? 'text-white' : 'text-cyan-400'} />
                    </span>
                    <span className={plan.highlight ? 'text-white' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buy Now Button */}
              <button
                onClick={() => handleBuyNow(plan)}
                className={`w-full py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  TRUSTED BY  */}
      <section className="py-16 px-6 border-y border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8 font-medium">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {trustedBy.map((company) => (
              <span
                key={company}
                className="text-gray-400 font-bold text-lg tracking-tight hover:text-white transition-colors duration-200"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION  */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Still have questions? Feel free to{' '}
              <a href="/contact" className="text-cyan-400 hover:underline">contact us</a>.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-sm">{faq.question}</span>
                  <span className={`text-cyan-400 text-xl font-bold transition-transform duration-300 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>

                {/* Answer */}
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Pricing