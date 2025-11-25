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

      {/* FEATURED EVENTS - WHITE BACKGROUND */}
      <section className="relative min-h-screen w-full py-24 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
            {/* HEADING */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-black mb-6 text-gray-900"
              >
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Events
                </span>
              </motion.h2>
              <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore workshops, hackathons, tech talks and more.
              </motion.p>
            </motion.div>

            {/* EVENT GRID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <EventGrid />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-32 bg-white border-t border-gray-200">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Events Hosted" },
              { number: "20+", label: "Projects Built" },
              { number: "15+", label: "Industry Partners" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-7xl font-black text-gray-900 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
