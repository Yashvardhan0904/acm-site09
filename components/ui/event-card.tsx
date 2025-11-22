// components/ui/event-card.tsx
'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Event } from '@/lib/data/dummy-data' // ensure export type exists

interface Props {
  event: Event
  index?: number
}

export default function EventCard({ event, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 })

  function handleMouse(e: React.MouseEvent) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) - 0.5
    const py = (y / rect.height) - 0.5
    const rotateY = px * 14 // horizontal tilt
    const rotateX = -py * 10 // vertical tilt
    setTilt({ rotateX, rotateY, scale: 1.02 })
  }

  function handleLeave() {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 })
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-[#071022]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-[#00E5FF]/20"
      style={{
        transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: 'transform 220ms cubic-bezier(.2,.9,.2,1)'
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
    >
      <div className="relative h-44 md:h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover brightness-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,15,31,0.75) 100%)'
          }}
        />
        <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold text-[#001B2A] bg-[#00E5FF]/90">
          {event.type.toUpperCase()}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{event.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2 mb-3">{event.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-300">
          <div>
            <div className="font-medium">{event.date}</div>
            <div className="text-xs">{event.time} • {event.location}</div>
          </div>
          <div>
            <a
              href={event.registrationLink ?? '#'}
              className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-[#00E5FF] to-[#FF00CC] text-black text-sm font-semibold"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
