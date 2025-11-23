"use client";

import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection() {
  const [acm, setAcm] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const controls = useAnimation();
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerParent = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Scroll Fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > window.innerHeight * 0.3) {
        controls.start({
          opacity: 0,
          y: -80,
          transition: { duration: 0.6, ease: "easeOut" },
        });
      } else {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Particle Background
  useEffect(() => {
    const current = canvasRef.current;
    if (!current) return;
    const canvas = current as HTMLCanvasElement;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const count = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      particles.forEach((a, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 100) {
            ctx.strokeStyle = `rgba(100,200,255,${0.08 * (1 - d / 100)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    function resize() {
      const cvs = canvasRef.current;
      if (!cvs) return;
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // Typewriter
  const typeText = (
    text: string,
    setter: Dispatch<SetStateAction<string>>,
    delay: number
  ) => {
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

  const fullAcm = "ACM";
  const text1 = "Innovate";
  const text2 = "Collaborate";
  const text3 = "Dominate";

  useEffect(() => {
    const speed = 80;
    const d1 = 300;
    const d2 = d1 + fullAcm.length * speed + 200;
    const d3 = d2 + text1.length * speed + 200;
    const d4 = d3 + text2.length * speed + 200;

    typeText(fullAcm, setAcm, d1);
    typeText(text1, setLine1, d2);
    typeText(text2, setLine2, d3);
    typeText(text3, setLine3, d4);
  }, []);

  return (
    <motion.section
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0e27]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full"
        variants={staggerParent}
        initial="hidden"
        animate="show"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-6">

            <motion.h2
              variants={fadeIn}
              className="text-7xl md:text-8xl font-black text-white mb-6"
            >
              {acm}
            </motion.h2>

            <div className="space-y-1">
              <motion.h1
                variants={fadeChild}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {line1}
              </motion.h1>
              <motion.h1
                variants={fadeChild}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
              >
                {line2}
              </motion.h1>
              <motion.h1
                variants={fadeChild}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
              >
                {line3}
              </motion.h1>
            </div>

            <motion.p
              variants={fadeChild}
              className="text-lg md:text-xl text-gray-400 max-w-xl pt-4"
            >
              Join the ultimate tech society building the future of AI,
              development, and cyber innovation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              variants={staggerParent}
            >
              <motion.button
                variants={fadeChild}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Join Now
              </motion.button>

              <motion.button
                variants={fadeChild}
                className="px-8 py-4 border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-lg transition-all"
              >
                View Events
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeIn}
            className="relative h-[500px] hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full bg-blue-500/20 blur-3xl" />
              </motion.div>

              <motion.div
                className="absolute w-80 h-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="0.3"
                    strokeDasharray="2,4"
                  />
                  <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                className="relative w-32 h-32 rounded-full"
                style={{
                  background: "linear-gradient(135deg,#3b82f6,#06b6d4,#14b8a6)",
                  boxShadow:
                    "0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(6,182,212,0.2)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent pointer-events-none" />
    </motion.section>
  );
}
