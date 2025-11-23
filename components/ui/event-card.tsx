"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Event } from "@/lib/data/dummy-data";

interface Props {
  event: Event;
  index?: number;
}

const cardVariants: Variants = {
  initial: { opacity: 0, y: 35, scale: 0.94 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

export default function EventCard({ event, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  let frame: number | null = null;

  function handleMouseMove(e: any) {
    if (!cardRef.current) return;

    // Cancel previous frame = smoother
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const rect = cardRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = -((y / rect.height) - 0.5) * 10;

      cardRef.current!.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
      `;
    });
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative rounded-2xl overflow-hidden 
        border border-cyan-400/15
        bg-[#0c162c]/70 backdrop-blur-xl
        transition-transform duration-300 will-change-transform
        shadow-[0_0_18px_rgba(0,229,255,0.12)]
      "
    >

      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="
            absolute left-4 bottom-4 px-3 py-1
            text-[10px] font-bold tracking-wider uppercase
            rounded-full bg-cyan-400 text-black 
            shadow-[0_0_12px_rgba(0,229,255,0.6)]
          "
        >
          {event.type}
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">
          {event.title}
        </h3>

        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
          {event.description}
        </p>

        <div className="text-xs text-gray-400 mb-4 space-y-1">
          <div className="font-semibold">{event.date}</div>
          <div>{event.time} • {event.location}</div>
        </div>

        <div className="flex justify-end">
          <motion.a
            href={event.registrationLink ?? "#"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-4 py-2 rounded-lg text-sm font-semibold
              bg-gradient-to-r from-cyan-400 to-pink-400 
              text-black 
              shadow-[0_0_20px_rgba(0,229,255,0.35)]
              transition-all duration-300
            "
          >
            Register →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
