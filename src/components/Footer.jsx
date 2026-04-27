import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin
} from 'lucide-react'

//data

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Product',
    links: [
      { name: 'Pricing', path: '/pricing' },
      { name: 'Workflow Automation', path: '/services' },
      { name: 'BI Dashboard', path: '/services' },
      { name: 'API Integration', path: '/services' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms of Service', path: '/' },
      { name: 'Cookie Policy', path: '/' },
      { name: 'Refund Policy', path: '/' },
    ],
  },
]

const socials = [
  { short: 'X', href: '#', label: 'Twitter' },
  { short: 'in', href: '#', label: 'LinkedIn' },
  { short: 'GH', href: '#', label: 'GitHub' },
  { short: 'IG', href: '#', label: 'Instagram' },
]

const contactInfo = [
  { icon: <MapPin size={15} />, text: '42 Duplication Road, Colombo 03, Sri Lanka' },
  { icon: <Phone size={15} />, text: '+94 11 456 7890' },
  { icon: <Mail size={15} />, text: 'hello@luminalsystems.com' },
]

//component
function Footer() {
  return (
    <footer className="bg-[#060A1A] text-white border-t border-white/10">

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              Luminal<span className="text-cyan-400">.</span>
            </Link>

            {/* Tagline */}
            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              Empowering businesses through intelligent automation and
              data-driven insights. Built for growth. Designed for simplicity.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-6">
              {contactInfo.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-2 text-gray-400 text-sm"
                >
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                >
                  <span className="text-[11px] font-semibold tracking-wide">{social.short}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>



      {/*  BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Luminal Systems (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link to="/" className="hover:text-gray-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer