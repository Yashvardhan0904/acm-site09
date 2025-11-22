"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import CyberpunkButton from "./cyberpunk-button";
import Spline from "@splinetool/react-spline";

// Animation
const popAnimation: Variants = {
  initial: { scale: 0.2, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export default function HeroSection() {
  const [acm, setAcm] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  const fullAcm = "ACM";
  const text1 = "Innovate";
  const text2 = "Collaborate";
  const text3 = "Dominate";

  const typeText = (fullText: string, setter: any, delay: number) => {
    setter("");
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setter(fullText.slice(0, i + 1));
          i++;
        } else clearInterval(interval);
      }, 150);
    }, delay);
  };

  useEffect(() => {
    const speed = 150;
    const delayAcm = 0;
    const delay1 = delayAcm + fullAcm.length * speed + 400;
    const delay2 = delay1 + text1.length * speed + 400;
    const delay3 = delay2 + text2.length * speed + 400;

    typeText(fullAcm, setAcm, delayAcm);
    typeText(text1, setLine1, delay1);
    typeText(text2, setLine2, delay2);
    typeText(text3, setLine3, delay3);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between bg-[#040814] px-6 md:px-16">
      
      {/* LEFT SIDE — TEXT */}
      <div className="max-w-3xl text-left mt-20 md:mt-0 z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono text-[#00eaff]">
          {acm.split("").map((char, idx) =>
            idx === 0 ? (
              <motion.span
                key={idx}
                variants={popAnimation}
                initial="initial"
                animate="animate"
              >
                {char}
              </motion.span>
            ) : (
              <span key={idx}>{char}</span>
            )
          )}
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-mono">
          <span className="text-[#ff00ff]">{line1}</span>
          <br />
          <span className="text-[#00ff99]">{line2}</span>
          <br />
          <span className="text-[#ffaa00]">{line3}</span>
        </h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Join the ultimate tech society building the future of AI,
          development, and cyber innovation.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <CyberpunkButton>Join Now</CyberpunkButton>
          <CyberpunkButton variant="secondary">View Events</CyberpunkButton>
        </motion.div>
      </div>

      {/* RIGHT SIDE — WIDER + SHORTER 3D MODEL */}
      <div className="w-full md:w-[60%] h-[400px] md:h-[580px] mt-10 md:mt-0">
        <Spline scene="/scene.splinecode" />
      </div>

    </section>
  );
}
