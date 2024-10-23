"use client";

import FallingLines from "@/components/fallingstar";
import { motion } from "framer-motion";
import * as React from "react";

export function BackgroundProvider({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-[#020818]" {...props}>
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.1, 1, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <FallingLines />
      {children}
    </div>
  );
}
