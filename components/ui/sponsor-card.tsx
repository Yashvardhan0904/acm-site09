'use client'

import { motion } from 'framer-motion'
import { Sponsor } from '@/lib/data/dummy-data'
import Image from 'next/image'

interface SponsorCardProps {
  sponsor: Sponsor
  index: number
}

export default function SponsorCard({ sponsor, index }: SponsorCardProps) {
  const tierColors = {
    platinum: 'from-gray-300 to-white',
    gold: 'from-yellow-400 to-yellow-200',
    silver: 'from-gray-400 to-gray-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-morphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
    >
      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${tierColors[sponsor.tier]} flex items-center justify-center`}>
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">{sponsor.name.charAt(0)}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
      
      <span className={`
        px-2 py-1 rounded-full text-xs font-bold
        ${sponsor.tier === 'platinum' ? 'bg-gray-500/20 text-gray-300' : ''}
        ${sponsor.tier === 'gold' ? 'bg-yellow-500/20 text-yellow-300' : ''}
        ${sponsor.tier === 'silver' ? 'bg-gray-400/20 text-gray-300' : ''}
      `}>
        {sponsor.tier.toUpperCase()}
      </span>
    </motion.div>
  )
}