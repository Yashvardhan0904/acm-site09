'use client'

import { motion } from 'framer-motion'
import CyberpunkButton from './cyberpunk-button'
import FloatingParticles from '../animations/floating-particles'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-acm-blue/20 via-transparent to-acm-cyan/20" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* ACM Logo Animation */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-acm-cyan to-acm-blue rounded-2xl flex items-center justify-center neon-glow"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <span className="text-4xl font-bold text-white">ACM</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-gradient">INNOVATE</span>
            <br />
            <span className="text-white">COLLABORATE</span>
            <br />
            <span className="text-gradient">DOMINATE</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Join the premier tech society pushing boundaries in software development, 
            AI, and cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <CyberpunkButton>
              Join Now
            </CyberpunkButton>
            <CyberpunkButton variant="secondary">
              View Events
            </CyberpunkButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-acm-cyan rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-acm-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}