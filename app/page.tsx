"use client";

import HeroSection from "@/components/ui/hero-section";
import EventGrid from "@/components/ui/event-grid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="min-h-screen bg-[#0a0e27]">
        <HeroSection />
      </div>

      {/* FEATURED EVENTS */}
      <section className="relative min-h-screen w-full py-24 overflow-hidden bg-[#0a0e27]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(100,200,255,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(100,200,255,0.4) 1px, transparent 1px)
                `,
                backgroundSize: "70px 70px",
              }}
            />
            {/* ORBS */}
            <motion.div
              className="absolute top-1/4 -left-24 w-56 h-56 bg-blue-500/10 rounded-full blur-xl"
              style={{ willChange: "transform" }}
              animate={{ x: [0, 60, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-24 w-56 h-56 bg-cyan-500/10 rounded-full blur-xl"
              style={{ willChange: "transform" }}
              animate={{ y: [0, -60, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
            {/* HEADING */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Events
                </span>
              </motion.h2>
              <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore workshops, hackathons, tech talks and more.
              </motion.p>
            </motion.div>

            {/* EVENT GRID */}
            <motion.div>
              <EventGrid />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-32 bg-[#0a0e27] border-t border-blue-500/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Events Hosted" },
              { number: "20+", label: "Projects Built" },
              { number: "15+", label: "Industry Partners" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
