"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [acm, setAcm] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fullAcm = "ACM";
  const text1 = "Innovate";
  const text2 = "Collaborate";
  const text3 = "Dominate";

  // Particle system - subtle and professional
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // use a local non-null canvas reference for inner scopes (classes/closures)
    const canvasEl = canvas as HTMLCanvasElement;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasEl.width) this.x = 0;
        if (this.x < 0) this.x = canvasEl.width;
        if (this.y > canvasEl.height) this.y = 0;
        if (this.y < 0) this.y = canvasEl.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvasEl) return;
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.08 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const typeText = (text: string, setter: any, delay: number) => {
    setter("");
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setter(text.slice(0, i + 1));
          i++;
        } else clearInterval(interval);
      }, 80);
    }, delay);
  };

  useEffect(() => {
    const speed = 80;
    const delayAcm = 300;
    const delay1 = delayAcm + fullAcm.length * speed + 200;
    const delay2 = delay1 + text1.length * speed + 200;
    const delay3 = delay2 + text2.length * speed + 200;

    typeText(fullAcm, setAcm, delayAcm);
    typeText(text1, setLine1, delay1);
    typeText(text2, setLine2, delay2);
    typeText(text3, setLine3, delay3);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />

      {/* Content Container - Fixed, no movement */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* ACM Logo/Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-7xl md:text-8xl font-black tracking-tight text-white mb-6">
                {acm}
              </h2>
            </motion.div>

            {/* Main Headlines */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {line1}
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  {line2}
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  {line3}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join the ultimate tech society building the future of AI, development, and cyber innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                Join Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-lg transition-all duration-200">
                View Events
              </button>
            </motion.div>
          </div>

          {/* Right Side - 3D Graphic */}
          <motion.div
            className="relative h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main central sphere with glow */}
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full rounded-full bg-blue-500/20 blur-3xl" />
              </motion.div>

              {/* Rotating orbit ring */}
              <motion.div
                className="absolute w-80 h-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
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
                    strokeWidth="0.3"
                    strokeDasharray="2,4"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Counter-rotating ring */}
              <motion.div
                className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
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
                    strokeWidth="0.3"
                    strokeDasharray="3,3"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Central sphere */}
              <motion.div
                className="relative w-32 h-32 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #14b8a6 100%)",
                  boxShadow: "0 0 60px rgba(59, 130, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.1)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Inner highlight */}
                <div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), transparent)",
                  }}
                />
              </motion.div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400"
                  style={{
                    boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 140 - 4,
                      Math.cos(((angle + 360) * Math.PI) / 180) * 140 - 4,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 140 - 4,
                      Math.sin(((angle + 360) * Math.PI) / 180) * 140 - 4,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent pointer-events-none" />
    </section>
  );
}