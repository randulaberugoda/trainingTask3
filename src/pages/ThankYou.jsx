import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  CheckCircle2, ArrowRight,
  Mail, LayoutDashboard, Home
} from 'lucide-react'
import { motion } from 'framer-motion'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
}

function ThankYou() {
  const location = useLocation()
  const [order, setOrder]               = useState(null)
  const [accountStatus, setAccountStatus] = useState('idle')
  const [pageReady, setPageReady]       = useState(false)

  useEffect(() => {
    //  Read order from location state or storage 
    const stored =
      (location.state && JSON.stringify(location.state)) ||
      sessionStorage.getItem('luminal_order') ||
      localStorage.getItem('luminal_order')

    if (stored) {
      try {
        const orderData = JSON.parse(stored)
        setOrder(orderData)

        //  Create Firebase account if requested 
        if (
          orderData.accountCreated &&
          orderData.email &&
          orderData.password
        ) {
          setAccountStatus('creating')

          createUserWithEmailAndPassword(
            auth,
            orderData.email,
            orderData.password
          )
            .then(() => {
              setAccountStatus('created')
              // clear password from storage for security
              const cleaned = { ...orderData, password: null }
              sessionStorage.setItem('luminal_order', JSON.stringify(cleaned))
              localStorage.setItem('luminal_order', JSON.stringify(cleaned))
            })
            .catch((error) => {
              console.error('Firebase error:', error.message)
              // Email already exists is ok — user might have paid twice
              if (error.code === 'auth/email-already-in-use') {
                setAccountStatus('created')
              } else {
                setAccountStatus('failed')
              }
            })
        }

      } catch (err) {
        console.error('Could not parse order data:', err)
      }
    }

    setPageReady(true)
  }, [])

  //  Show spinner while loading 
  if (!pageReady) {
    return (
      <div className="min-h-screen bg-[#0A0F2C] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-indigo-500 animate-spin" />
      </div>
    )
  }

  //  Show fallback if no order data found 
  if (!order) {
    return (
      <div className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-white text-center px-6">
        <CheckCircle2 size={60} className="text-cyan-400 mb-6" />
        <h1 className="text-4xl font-extrabold mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. Our team will be in touch shortly.
        </p>
        <Link
          to="/"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  const nextSteps = [
    {
      icon: <Mail size={22} className="text-cyan-400" />,
      title: 'Check Your Email',
      desc: `A confirmation has been sent to ${order.email}.`,
    },
    {
      icon: <LayoutDashboard size={22} className="text-cyan-400" />,
      title: 'Access Your Dashboard',
      desc: 'Our team will set up your environment within 24 hours.',
    },
    {
      icon: <CheckCircle2 size={22} className="text-cyan-400" />,
      title: 'Onboarding Call',
      desc: 'Expect a call from our team within 1 business day.',
    },
  ]

  return (
    <div className="bg-[#0A0F2C] text-white min-h-screen">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">

        {/* Background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl w-full">

          {/*  Check Icon  */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-8"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 border border-cyan-400/30 flex items-center justify-center">
              <CheckCircle2 size={60} className="text-cyan-400" />
            </div>
          </motion.div>

          {/*  Heading  */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Payment Successful
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Luminal Systems!
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              {order.accountCreated
                ? `Your ${order.planName} Plan is active and your account is being set up, ${order.customerName}!`
                : `Thank you, ${order.customerName}! Your ${order.planName} Plan is now active.`
              }
            </p>
          </motion.div>

          {/* Order Details  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 text-left"
          >
            <h2 className="text-lg font-bold mb-6 text-center">Order Confirmation</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Order ID</p>
                <p className="text-white font-mono font-bold">{order.orderId}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Plan</p>
                <p className="text-white font-bold">{order.planName} Plan</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Billing</p>
                <p className="text-white font-bold capitalize">{order.billing}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Amount Paid</p>
                <p className="text-cyan-400 font-extrabold text-xl">${order.price}</p>
              </div>
            </div>

            {/* Account Status Banner  */}
            {order.accountCreated && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`mt-6 rounded-xl px-5 py-4 flex items-start gap-3 ${
                  accountStatus === 'created'
                    ? 'bg-indigo-600/20 border border-indigo-500/30'
                    : accountStatus === 'failed'
                    ? 'bg-red-500/10 border border-red-500/30'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 ${
                  accountStatus === 'created' ? 'text-indigo-400'
                  : accountStatus === 'failed'  ? 'text-red-400'
                  : 'text-gray-400'
                }`} />
                <div>
                  {accountStatus === 'creating' && (
                    <>
                      <p className="text-gray-300 font-semibold text-sm">Creating Your Account...</p>
                      <p className="text-gray-400 text-xs mt-0.5">Please wait a moment.</p>
                    </>
                  )}
                  {accountStatus === 'created' && (
                    <>
                      <p className="text-indigo-300 font-semibold text-sm">
                        Account Created Successfully! 🎉
                      </p>
                      <p className="text-indigo-400 text-xs mt-0.5">
                        You can log in using {order.email}.
                      </p>
                    </>
                  )}
                  {accountStatus === 'failed' && (
                    <>
                      <p className="text-red-300 font-semibold text-sm">Account Creation Failed</p>
                      <p className="text-red-400 text-xs mt-0.5">
                        Please contact support to set up your account manually.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/*  Next Steps  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <h2 className="text-xl font-bold mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nextSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3 block">
                    Step {index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/*  CTA Buttons  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Home size={18} /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 hover:border-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default ThankYou