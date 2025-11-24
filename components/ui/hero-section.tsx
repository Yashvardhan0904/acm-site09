"use client";

import { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import { motion, Variants } from "framer-motion";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeChild: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

/* ============================================================
   HERO SECTION COMPONENT
============================================================ */
export default function HeroSection() {
  const [acm, setAcm] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  /* ============================================================
     PARTICLE CANVAS BACKGROUND WITH MOUSE INTERACTION
  ============================================================ */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const particles: {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
      hue: number;
      baseHue: number;
      phase: number;
    }[] = [];

    // Adaptive particle count based on screen width
    const width = window.innerWidth;
    let count = 100; // default for small screens
    if (width > 1600) count = 350;   // large desktops
    else if (width > 1200) count = 250; // medium desktops
    else if (width > 768) count = 180;  // tablets/desktops

    for (let i = 0; i < count; i++) {
      const baseSize = Math.random() * 1.5 + 0.5;
      const baseOpacity = Math.random() * 0.3 + 0.1;
      const baseHue = Math.random() * 100 + 250; // Store each particle's unique base hue
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: baseSize,
        baseSize,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
        opacity: baseOpacity,
        baseOpacity,
        hue: baseHue,
        baseHue: baseHue,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    let rafId = 0;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update interaction parameters dynamically
      const width = window.innerWidth;
      let interactionRadius = 100;
      let maxConnectionDist = 100;
      if (width > 1600) {
        interactionRadius = 250;
        maxConnectionDist = 160;
      } else if (width > 1200) {
        interactionRadius = 200;
        maxConnectionDist = 140;
      } else if (width > 768) {
        interactionRadius = 150;
        maxConnectionDist = 120;
      }

      // Update particles
      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;

        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < interactionRadius && dist > 0) {
          const angle = Math.atan2(dy, dx);
          const force = ((interactionRadius - dist) / interactionRadius) * 0.8;
          p.x += Math.cos(angle) * force * 2;
          p.y += Math.sin(angle) * force * 2;

          const proximity = 1 - dist / interactionRadius;
          p.size = p.baseSize * (1 + proximity * 0.8);
          p.opacity = Math.min(p.baseOpacity * (1 + proximity * 2), 0.8);
          // Each particle shifts from its unique base hue towards a different vibrant color
          const hueShift = (index % 3) * 120; // Creates variety: 0°, 120°, 240° shifts
          p.hue = p.baseHue + hueShift * proximity * 0.5;
        } else {
          const breathe = Math.sin(time + p.phase) * 0.15;
          p.size = p.baseSize * (1 + breathe);
          p.opacity = p.baseOpacity * (1 + breathe * 0.5);
        }

        const velocity = Math.sqrt(p.speedX ** 2 + p.speedY ** 2);
        p.opacity = Math.min(p.opacity + Math.min(velocity * 0.3, 0.2), 0.9);

        const buffer = 20;
        if (p.x < -buffer) p.x = window.innerWidth + buffer;
        if (p.x > window.innerWidth + buffer) p.x = -buffer;
        if (p.y < -buffer) p.y = window.innerHeight + buffer;
        if (p.y > window.innerHeight + buffer) p.y = -buffer;

        const sat = 70 + Math.sin(time * 0.5 + index) * 20;
        const light = 60 + Math.sin(time * 0.3 + index * 0.1) * 10;
        ctx.fillStyle = `hsla(${p.hue}, ${sat}%, ${light}%, ${p.opacity})`;

        if (dist < interactionRadius) {
          ctx.shadowBlur = 15 * (1 - dist / interactionRadius);
          ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, 0.8)`;
        } else ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            const opacity = 0.08 * (1 - dist / maxConnectionDist);
            const avgHue = (a.hue + b.hue) / 2;
            ctx.strokeStyle = `hsla(${avgHue}, 80%, 65%, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const handleResize = () => setSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* ============================================================
     TYPEWRITER EFFECT
  ============================================================ */
  const typeText = (text: string, setter: Dispatch<SetStateAction<string>>, delay: number) => {
    setter("");
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setter(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 80);
    }, delay);
  };

  useEffect(() => {
    const d = 300;
    typeText("ACM", setAcm, d);
    typeText("Innovate", setLine1, d + 300);
    typeText("Collaborate", setLine2, d + 900);
    typeText("Dominate", setLine3, d + 1500);
  }, []);

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#0a0e27]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27] z-0" />

      <motion.div
        className="relative z-10 max-w-4xl mx-16 md:mx-24 px-6 md:px-12 w-full"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col justify-center min-h-screen gap-6">
          {/* MAIN TITLE */}
          <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
            {acm}
          </motion.h2>

          {/* SUB TITLES */}
          <motion.div className="space-y-2">
            <motion.h1 variants={fadeChild} className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {line1}
            </motion.h1>
            <motion.h1 variants={fadeChild} className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              {line2}
            </motion.h1>
            <motion.h1 variants={fadeChild} className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              {line3}
            </motion.h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p variants={fadeChild} className="text-lg md:text-xl text-gray-300 max-w-3xl pt-4 leading-relaxed">
            Join the ultimate tech society building the future of AI, development, and cyber innovation.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={fadeChild} className="flex flex-wrap gap-4 pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105">
              Join Now
            </button>
            <button className="px-6 py-3 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}