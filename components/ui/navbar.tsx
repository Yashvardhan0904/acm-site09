'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Benefits', href: '/benefits' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Join', href: '/join' },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolling ? 'backdrop-blur-xl bg-black/30 border-b border-acm-cyan/20' 
                     : 'backdrop-blur-lg bg-black/10 border-b border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
              className="w-12 h-12 rounded-xl flex items-center justify-center
                bg-gradient-to-br from-acm-cyan/40 to-acm-blue/40 
                group-hover:shadow-[0_0_30px_#00eaff70] transition"
            >
              <span className="font-extrabold text-white tracking-wider">ACM</span>
            </motion.div>
            <span className="text-xl font-bold neon-text tracking-wide">TECH SOCIETY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                onMouseEnter={() => setActiveItem(item.name)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white transition"
                >
                  {item.name}
                </Link>

                {activeItem === item.name && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-lg bg-acm-cyan/20 neon-glow"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 neon-glow"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10 px-6 pb-4"
          >
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-gray-200 text-lg hover:text-white"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
