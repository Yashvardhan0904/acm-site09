"use client";

import { motion } from "framer-motion";

interface CyberpunkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function CyberpunkButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: CyberpunkButtonProps) {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300";

  const primary = `
    bg-gradient-to-r from-[#00E5FF] via-[#00C4FF] to-[#0099FF]
    text-black shadow-[0_0_15px_rgba(0,229,255,0.35)]
    hover:shadow-[0_0_25px_rgba(0,229,255,0.55)]
    hover:-translate-y-1
  `;

  const secondary = `
    border border-[#00E5FF]/40 text-[#D7F9FF]
    hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/60
    hover:-translate-y-1
  `;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
