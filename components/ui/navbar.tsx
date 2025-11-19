'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

  return (
    <nav className="glass-morphism border-b border-acm-cyan/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-acm-cyan to-acm-blue rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">ACM</span>
            </div>
            <span className="text-xl font-bold neon-text">TECH SOCIETY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-300"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem('Home')}
              >
                <span className="relative z-10">{item.name}</span>
                {activeItem === item.name && (
                  <motion.div
                    className="absolute inset-0 bg-acm-cyan/20 rounded-lg neon-glow"
                    layoutId="navbar-active"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-acm-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg glass-morphism neon-glow">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}