import { useState } from 'react'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: <MapPin size={22} className="text-cyan-400" />,
    label: 'Address',
    value: '42 Duplication Road, Colombo 03, Sri Lanka',
  },
  {
    icon: <Phone size={22} className="text-cyan-400" />,
    label: 'Phone',
    value: '+94 11 456 7890',
  },
  {
    icon: <Mail size={22} className="text-cyan-400" />,
    label: 'Email',
    value: 'hello@luminalsystems.com',
  },
]

const faqs = [
  {
    question: 'How quickly will you respond to my message?',
    answer: 'We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.',
  },
  {
    question: 'Can I request a live demo before signing up?',
    answer: 'Absolutely! Just mention it in your message and we will schedule a free 30-minute live demo of the Luminal platform.',
  },
  {
    question: 'Do you offer support in languages other than English?',
    answer: 'Yes. Our support team can assist in Sinhala and Tamil as well. Let us know your preference in your message.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Contact() {
  const [openFaq, setOpenFaq]     = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false) // ← NEW

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (form.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.'
    }
    return newErrors
  }

  // ── NEW handleSubmit — actually calls PHP ──
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(
        `${apiBaseUrl}/contact.php`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      )

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Something went wrong: ' + result.message)
      }
    } catch (error) {
      alert('Could not connect to the server. Please try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0A0F2C] text-white">

      {/* ── HERO ── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            We Would Love to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Hear From You
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, want to book a demo, or are ready to get
            started — our team is here and happy to help.
          </p>
        </motion.div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-xl px-5 py-4 mb-6 text-sm font-medium">
                ✅ Your message has been sent! We will get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.subject ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* updated submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200 mt-2"
              >
                {submitting
                  ? 'Sending...'
                  : <> Send Message <ArrowRight size={18} /> </>
                }
              </button>

            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-5 flex items-start gap-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="text-white text-sm font-medium">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex-1 min-h-[200px] relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <MapPin size={36} className="text-indigo-400 mb-3" />
                <p className="text-white font-semibold text-sm">Colombo 03, Sri Lanka</p>
                <p className="text-gray-500 text-xs mt-1">42 Duplication Road</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-cyan-400 text-xs font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
              <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* faq */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-gray-400">
              Can not find your answer?{' '}
              <span className="text-cyan-400">Send us a message above.</span>
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
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-sm">{faq.question}</span>
                  <span className={`text-cyan-400 text-xl font-bold transition-transform duration-300 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>+</span>
                </button>
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

export default Contact