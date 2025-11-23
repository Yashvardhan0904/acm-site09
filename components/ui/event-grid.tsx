"use client";

import { motion } from "framer-motion";
import EventCard from "./event-card";
import { upcomingEvents } from "@/lib/data/dummy-data";

export default function EventGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18
          }
        }
      }}
    >
      {upcomingEvents.slice(0, 3).map((event, idx) => (
        <motion.div key={event.id} variants={{}}>
          <EventCard event={event} index={idx} />
        </motion.div>
      ))}
    </motion.div>
  );
}
