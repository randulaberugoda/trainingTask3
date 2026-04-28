import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load all pages
const Home       = lazy(() => import('./pages/Home'))
const About      = lazy(() => import('./pages/About'))
const Services   = lazy(() => import('./pages/Services'))
const Pricing    = lazy(() => import('./pages/Pricing'))
const Contact    = lazy(() => import('./pages/Contact'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Checkout   = lazy(() => import('./pages/Checkout'))
const ThankYou   = lazy(() => import('./pages/ThankYou'))

// Loading Spinner Component 
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0A0F2C] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        {/* Spinning circle */}
        <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-indigo-500 animate-spin" />

        {/* Logo text */}
        <p className="text-white font-bold text-lg tracking-tight">
          Luminal<span className="text-cyan-400">.</span>
        </p>

      </div>
    </div>
  )
}

//  Main App 
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense shows PageLoader while page is loading */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/services"   element={<Services />} />
          <Route path="/pricing"    element={<Pricing />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/checkout"   element={<Checkout />} />
          <Route path="/thank-you"  element={<ThankYou />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App