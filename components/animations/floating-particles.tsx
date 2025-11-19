'use client'

import { motion } from 'framer-motion'

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-acm-cyan rounded-full"
          initial={{
            x: Math.random() * typeof window !== 'undefined' ? window.innerWidth : 1000,
            y: Math.random() * typeof window !== 'undefined' ? window.innerHeight : 1000,
          }}
          animate={{
            x: Math.random() * typeof window !== 'undefined' ? window.innerWidth : 1000,
            y: Math.random() * typeof window !== 'undefined' ? window.innerHeight : 1000,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            boxShadow: '0 0 10px #0099CC, 0 0 20px #0099CC',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles