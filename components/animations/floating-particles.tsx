'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 28

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const size = Math.random() * 6 + 3
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 6
    const duration = Math.random() * 12 + 8
    const blur = Math.random() * 12 + 6

    return { id: i, size, left, top, delay, duration, blur }
  })

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 transform-gpu" style={{ willChange: 'transform' }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            initial={{
              x: `${p.left}%`,
              y: `${p.top}%`,
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              x: [
                `${p.left}%`,
                `${p.left + (Math.random() * 10 - 5)}%`,
                `${p.left}%`
              ],
              y: [
                `${p.top}%`,
                `${p.top + (Math.random() * 10 - 5)}%`,
                `${p.top}%`
              ],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              delay: p.delay,
              duration: p.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              width: p.size,
              height: p.size,
              left: 0,
              top: 0,
              background: 'linear-gradient(90deg,#00E5FF,#FF00CC)',
              boxShadow:
                '0 0 20px #00E5FF, 0 0 40px #00E5FF, 0 0 60px #FF00CC, 0 0 80px #FF00CC',
              filter: `blur(${p.blur}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
