import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // detect scroll to add background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4">
      <div className="relative max-w-7xl mx-auto">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-[#050816]/95 border-indigo-300/15 backdrop-blur-xl shadow-[0_14px_48px_rgba(1,3,10,0.78)]'
              : 'bg-[#070B1F]/75 border-white/10 backdrop-blur-lg'
          }`}
        >
          <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group" aria-label="Luminal home">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 to-slate-700 shadow-[0_0_16px_rgba(99,102,241,0.4)]" />
              <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                Luminal
                <span className="text-indigo-200"> Systems</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-indigo-100 bg-indigo-500/20 border border-indigo-300/35'
                      : 'text-slate-300 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                to="/checkout"
                className="inline-flex items-center rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
              >
                Book Demo
              </Link>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white h-10 w-10"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden px-4 sm:px-6 pb-5 pt-1 border-t border-white/10">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-indigo-100 bg-indigo-500/20 border border-indigo-300/25'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/checkout"
                  className="mt-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold text-center px-4 py-3 transition-colors duration-200"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar