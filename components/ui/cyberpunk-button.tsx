'use client'

import { motion } from 'framer-motion'

interface CyberpunkButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  type?: "button" | "submit" | "reset"   // ✅ ADD THIS
}

export default function CyberpunkButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  type = "button"            // ✅ default to "button"
}: CyberpunkButtonProps) {
  return (
    <motion.button
      type={type}             // ✅ Apply it here
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-8 py-4 font-bold text-white uppercase tracking-wider
        border-2 border-acm-cyan rounded-lg
        bg-gradient-to-r from-acm-blue/50 to-acm-cyan/50
        transition-all duration-300
        neon-glow hover:neon-glow
        ${className}
      `}
    >
      <span className="relative z-10 neon-text">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-acm-cyan to-acm-magenta opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg" />
    </motion.button>
  )
}
