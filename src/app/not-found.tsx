"use client";

import { motion } from "framer-motion";

export default function CosmicLanding() {
  return (
    <div className="h-screen w-full">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-8 text-4xl font-bold text-white md:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          404 - Page Not Found
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
