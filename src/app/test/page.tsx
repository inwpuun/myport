"use client";

// import FallingStars from "@/components/fallingstar";
import { motion } from "framer-motion";
import React from "react";

export default function page() {
  return (
    <motion.div animate={{ x: 100 }} transition={{ duration: 1, ease: "linear" }}>
      Moving Element
    </motion.div>
  );
}
