"use client";

import { motion } from "framer-motion";

export default function CosmicLanding() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#020818]">
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

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-8 text-4xl font-bold text-white md:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Global Error Page
        </motion.h1>
        <motion.button
          className="rounded-full bg-white px-8 py-3 text-2xl font-semibold text-blue-900 transition-all ease-in-out hover:bg-blue-100 "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
}
