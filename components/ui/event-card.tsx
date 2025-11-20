'use client'

import { motion } from 'framer-motion'
import { Event } from '@/lib/data/dummy-data'
import CyberpunkButton from './cyberpunk-button'

interface EventCardProps {
  event: Event
  index: number
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-morphism rounded-2xl p-6 hover:neon-glow transition-all duration-300 group"
    >
      <div className="mb-4">
        <span className={`
          px-3 py-1 rounded-full text-xs font-bold
          ${event.type === 'hackathon' ? 'bg-red-500/20 text-red-400' : ''}
          ${event.type === 'workshop' ? 'bg-blue-500/20 text-blue-400' : ''}
          ${event.type === 'talk' ? 'bg-green-500/20 text-green-400' : ''}
          ${event.type === 'social' ? 'bg-purple-500/20 text-purple-400' : ''}
        `}>
          {event.type.toUpperCase()}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-acm-cyan transition-colors">
        {event.title}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3">
        {event.description}
      </p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <span className="mr-2">📅</span>
          {new Date(event.date).toLocaleDateString()} • {event.time}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <span className="mr-2">📍</span>
          {event.location}
        </div>
      </div>
      
      {event.registrationLink && (
        <CyberpunkButton className="w-full text-sm py-3">
          Learn More
        </CyberpunkButton>
      )}
    </motion.div>
  )
}