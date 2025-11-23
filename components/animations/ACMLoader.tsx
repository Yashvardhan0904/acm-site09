"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ACMLoader() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [textIndex, setTextIndex] = useState(0)

  const loadingTexts = [
    "Initializing systems...",
    "Loading resources...",
    "Almost there..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 8
      })
    }, 25)

    // Change text every 400ms
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 400)

    const timer = setTimeout(() => setIsVisible(false), 1300)
    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e27] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Subtle animated grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(100, 200, 255, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(100, 200, 255, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Subtle glow effects */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning orb with rings */}
            <div className="relative mb-8">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="0.5"
                    strokeDasharray="4,6"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="0.5"
                    strokeDasharray="3,5"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Center pulsing orb */}
              <motion.div
                className="relative w-16 h-16 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #14b8a6 100%)",
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div 
                  className="absolute top-2 left-2 w-6 h-6 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent)",
                  }}
                />
              </motion.div>
            </div>

            {/* ACM Text */}
            <motion.div 
              className="relative mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-6xl font-black text-white tracking-tight">
                ACM
              </h1>
            </motion.div>

            {/* Loading text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                className="text-gray-400 text-sm font-medium mb-6 h-6"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {loadingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-blue-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: 0.4 }}
                />
              </motion.div>
            </div>

            {/* Percentage */}
            <motion.div 
              className="mt-3 text-cyan-400 font-mono text-xs font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}