import { Heart, Lightbulb, Shield, Users, Globe, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const heroImage =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'

const timeline = [
  {
    year: '2019',
    title: 'A simple idea',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '2020',
    title: 'Listening closely',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    year: '2021',
    title: 'Building the foundation',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    year: '2022',
    title: 'Growing with purpose',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    year: '2023',
    title: 'Refining the experience',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    year: '2024',
    title: 'A broader vision',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
]

const values = [
  {
    icon: <Sparkles size={36} className="text-cyan-400" />,
    title: 'Innovation',
    desc: 'We explore new ideas and turn them into useful, practical products that create measurable value.',
  },
  {
    icon: <Heart size={36} className="text-cyan-400" />,
    title: 'Trust',
    desc: 'We communicate clearly, act with integrity, and build relationships that last beyond a single project.',
  },
  {
    icon: <Globe size={36} className="text-cyan-400" />,
    title: 'Impact',
    desc: 'We design with outcomes in mind, focusing on solutions that help teams work faster and smarter.',
  },
]

const team = [
  {
    name: 'Aiden Perera',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sara Jayawardena',
    role: 'Lead UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kasun Silva',
    role: 'Development Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Priya Raj',
    role: 'Head of Support',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Leila Hassan',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Nimal Fernando',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
]

// ANIMATION 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// COMPONENT

function About() {
  return (
    <div className="bg-[#0A0F2C] text-white">
      <section className="px-6 pt-28 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl">
            <span className="inline-block bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              About Luminal Systems
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Our mission is to build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                software that helps teams do their best work
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We create thoughtful digital tools that make everyday business work clearer,
              faster, and easier to manage. Our team combines product thinking, design,
              and engineering to help organizations move with confidence.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-400">500+</p>
                <p className="text-sm text-gray-400 mt-1">Projects delivered</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-400">30+</p>
                <p className="text-sm text-gray-400 mt-1">Team specialists</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-400">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Support coverage</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <img
                src={heroImage}
                alt="Luminal Systems team collaborating in a modern office"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-[#0A0F2C]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-sm rounded-2xl border border-white/10 bg-[#0A0F2C]/70 backdrop-blur-md p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">Team & office</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    A collaborative space where strategy, design, and development work together.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A short timeline of how our company evolved from a small idea into a product-focused team.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-[140px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <div>
                  <span className="text-cyan-400 font-bold text-sm tracking-[0.3em]">{item.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              These are the principles that guide the way we design, build, and support every product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Team</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A small team of builders, thinkers, and problem-solvers working across product, design, and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300 group"
              >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white/10 group-hover:ring-cyan-400/30 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="h-full w-full object-cover"
                    />
                </div>

                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-current text-[10px] font-semibold uppercase">
                      in
                    </span>
                  </button>
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-current text-[10px] font-semibold">
                      t
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About