'use client'

// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CosmicLanding() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }

  //   window.addEventListener('mousemove', handleMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])

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

      {/* Planets */}
      <motion.div
        className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-900 opacity-50"
        // animate={{
          // x: mousePosition.x * 0.02,
          // y: mousePosition.y * 0.02,
        // }}
      />
      <motion.div
        className="absolute bottom-[-50px] left-[-50px] h-[200px] w-[200px] rounded-full bg-blue-800 opacity-30"
        // animate={{
        //   x: mousePosition.x * -0.01,
        //   y: mousePosition.y * -0.01,
        // }}
      />

      {/* Earth */}
      <div className="absolute inset-0 m-auto mt-[600px] h-[95vw] w-[95vw] max-h-[1500px] max-w-[1500px] overflow-hidden rounded-full">
        <div className="relative h-full w-full rounded-full shadow-[5px_-3px_10px_3px_#5e90f1]">
          <div className="absolute h-full w-full animate-[rotate-night_80s_linear_infinite] bg-[url(https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg)] bg-[length:200%]" />
          {/* <div className="absolute left-[110px] h-full w-full animate-[rotate-day_80s_linear_infinite] rounded-full border-l border-black bg-[url(https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg)] bg-[length:200%] shadow-[5px_0_20px_10px_#040615_inset]" /> */}
          <div className="absolute h-full w-full animate-[rotate-day_50s_linear_infinite,spin-clouds_100s_ease_infinite] rounded-full bg-[url(https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg)] bg-[length:200%] opacity-20 shadow-[5px_0_20px_10px_#040615_inset,-9px_0_20px_10px_#5e90f1_inset]" />
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
          welcome to
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Puun&apos;s area
          </span>
        </motion.h1>
        <motion.button
          className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-900 transition-all hover:bg-blue-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          start
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes rotate-day {
          0% { background-position: 120% 0; }
          100% { background-position: -80% 0; }
        }
        @keyframes rotate-night {
          0% { background-position: calc(120% + 120px) 0; }
          100% { background-position: calc(-80% + 120px) 0; }
        }
        @keyframes spin-clouds {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}