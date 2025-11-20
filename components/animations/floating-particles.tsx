'use client'

import { motion } from 'framer-motion'

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  const getRandomX = () =>
    typeof window !== 'undefined' ? Math.random() * window.innerWidth : 1000

  const getRandomY = () =>
    typeof window !== 'undefined' ? Math.random() * window.innerHeight : 1000

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-acm-cyan rounded-full"
          initial={{
            x: getRandomX(),
            y: getRandomY(),
          }}
          animate={{
            x: getRandomX(),
            y: getRandomY(),
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
