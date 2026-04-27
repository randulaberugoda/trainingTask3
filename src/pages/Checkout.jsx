import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Check, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

//  ANIMATION 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// COMPONENT 

function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()

  // Receive plan data from Pricing page
  const plan = location.state || {
    planName: 'Pro',
    price: 79,
    billing: 'monthly',
  }

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    country: '',
  })

  const [errors, setErrors] = useState({})
  const [createAccount, setCreateAccount] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  // Generate random order ID
  const orderId = `LMS-2025-${Math.floor(10000 + Math.random() * 90000)}`

  // Update form on change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // Validate form
  const validate = () => {
    const newErrors = {}

    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!form.address.trim()) newErrors.address = 'Address is required.'
    if (!form.country.trim()) newErrors.country = 'Country is required.'

    if (createAccount && password.length < 6) {
      setPasswordError('Password must be at least 6 characters.')
    }

    return newErrors
  }

  // Handle payment submit
  const handlePayment = async (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (createAccount && password.length < 6) {
      setPasswordError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    // Simulate payment processing delay
    // Later you will replace this with real PayHere integration
    setTimeout(() => {
      setLoading(false)
      navigate('/thank-you', {
        state: {
          orderId,
          planName: plan.planName,
          price: plan.price,
          billing: plan.billing,
          customerName: form.fullName,
          email: form.email,
          accountCreated: createAccount,
        },
      })
    }, 2000)
  }

  return (
    <div className="bg-[#0A0F2C] text-white min-h-screen">

      {/* HEADER */}
      <div className="pt-28 pb-12 text-center px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Secure Checkout
          </span>
          <h1 className="text-4xl font-extrabold mb-2">Complete Your Order</h1>
          <p className="text-gray-400 text-sm">
            You are just one step away from automating your business.
          </p>
        </motion.div>
      </div>

      {/*  MAIN LAYOUT */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/*LEFT — Billing Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold mb-6">Billing Details</h2>

            <form onSubmit={handlePayment} className="flex flex-col gap-5" noValidate>

              {/* Full Name */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
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
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+94 77 123 4567"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Company (optional) */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Company Name <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Billing Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main Street, City"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.address ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0F2C] border rounded-xl px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.country ? 'border-red-500' : 'border-white/10'
                  }`}
                >
                  <option value="">Select your country</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="IN">India</option>
                  <option value="SG">Singapore</option>
                  <option value="AU">Australia</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="other">Other</option>
                </select>
                {errors.country && (
                  <p className="text-red-400 text-xs mt-1">{errors.country}</p>
                )}
              </div>

              {/* Account Creation Checkbox  */}
              <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={createAccount}
                    onChange={() => setCreateAccount(!createAccount)}
                    className="mt-0.5 accent-indigo-500 w-4 h-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Create a Luminal account
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Save your details and manage your subscription from a personal dashboard.
                    </p>
                  </div>
                </label>

                {/* Password field — only shows if checkbox is checked */}
                {createAccount && (
                  <div className="mt-4">
                    <label className="text-sm text-gray-400 mb-1 block">
                      Create a Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordError('')
                      }}
                      placeholder="Min. 6 characters"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        passwordError ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {passwordError && (
                      <p className="text-red-400 text-xs mt-1">{passwordError}</p>
                    )}
                  </div>
                )}
              </div>

              {/*Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <CreditCard size={18} />
                    Pay ${plan.price} Now
                  </>
                )}
              </button>

            </form>
          </motion.div>

          {/*RIGHT — Order Summary  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >

            {/* Order Summary Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Plan */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold text-white">{plan.planName} Plan</p>
                  <p className="text-gray-400 text-xs mt-0.5 capitalize">
                    Billed {plan.billing}
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-white">
                  ${plan.price}
                  <span className="text-sm text-gray-400 font-normal">/mo</span>
                </span>
              </div>

              <div className="border-t border-white/10 my-4" />

              {/* What's included */}
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 font-medium">
                What is included
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'Full platform access',
                  'Onboarding & setup support',
                  '24/7 customer support',
                  'Monthly usage reports',
                  'Cancel anytime',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 my-4" />

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Total due today</span>
                <span className="text-xl font-extrabold text-cyan-400">
                  ${plan.price}
                </span>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <Shield size={18} className="text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Secure & Safe Payment</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Your payment is processed securely via PayHere. We never store your card details.
                </p>
              </div>
            </div>

            {/* Order ID */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Your Order ID
              </p>
              <p className="text-white font-mono font-bold text-lg">{orderId}</p>
              <p className="text-gray-500 text-xs mt-1">
                Save this for your records.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Checkout