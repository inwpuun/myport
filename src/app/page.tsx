"use client";

// import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CosmicLanding() {
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      {/* Planets */}
      <motion.div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-900 opacity-50 shadow-[5px_3px_15px_3px_#5e90f1]" />
      <motion.div className="absolute bottom-[-50px] left-[-50px] h-[200px] w-[200px] rounded-full bg-blue-800 opacity-30 shadow-[5px_-3px_15px_3px_#5e90f1]" />

      {/* Earth */}
      <div
        className="absolute -bottom-3/4 left-1/2 overflow-hidden rounded-full"
        style={{
          height: "max(95vw, 95vh)",
          width: "max(95vw, 95vh)",
          maxHeight: "1200px",
          maxWidth: "1200px",
          transform: "translateX(-50%)",
        }}
      >
        <div className="relative h-full w-full rounded-full shadow-[5px_-3px_10px_3px_#5e90f1]">
          <div className="absolute h-full w-full overflow-hidden">
            <Image
              src="/earth_nightmap.jpg"
              alt="Earth Night Map"
              fill
              style={{ objectFit: "cover" }}
              className="animate-[rotate-night_80s_linear_infinite]"
            />
          </div>
          <div className="absolute h-full w-full rounded-full overflow-hidden shadow-[5px_0_20px_10px_#040615_inset,-9px_0_20px_10px_#5e90f1_inset]">
            <Image
              src="/earth_clouds.jpg"
              alt="Earth Clouds"
              fill
              style={{ objectFit: "cover" }}
              className="animate-[rotate-day_50s_linear_infinite,spin-clouds_100s_ease_infinite] opacity-20"
            />
          </div>
          <div className="absolute h-full w-full rounded-full shadow-[-5px_0_10px_1px_#152b57_inset,5px_0_10px_1px_#040615_inset]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-8 text-4xl font-bold text-white md:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello, I&apos;m
          <br />
          <div className="text-6xl md:text-8xl font-nunito gradient-text bg-clip-text text-transparent">
            Puun Pinyawat
          </div>
          <div className="mt-3 text-sm md:text-lg text-white text-transparent">A Software Engineer.</div>
        </motion.h1>
        <motion.button
          className="rounded-xl text-white px-8 py-3 text-2xl font-semibold transition-all "
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          onClick={() => {
            router.push("/home");
          }}
        >
          <div className="group relative inline-block hover:text-[#020818] rounded-[16px] border-2 border-white p-4 overflow-hidden ">
            <div className="absolute inset-0 bg-white transition-transform duration-300 -z-10 ease-in-out scale-x-0 origin-top-left group-hover:scale-x-100"></div>
            About Me
          </div>
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes rotate-day {
          0% {
            background-position: 120% 0;
          }
          100% {
            background-position: -80% 0;
          }
        }
        @keyframes rotate-night {
          0% {
            background-position: calc(120% + 120px) 0;
          }
          100% {
            background-position: calc(-80% + 120px) 0;
          }
        }
        @keyframes spin-clouds {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(20deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-text {
          background: linear-gradient(270deg, #3b82f6, #9333ea); /* from-blue-300 to-purple-500 */
          background-size: 300% 300%;
          animation: gradientAnimation 3s ease infinite; /* Adjust duration as needed */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
