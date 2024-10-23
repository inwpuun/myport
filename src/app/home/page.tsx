"use client";

import { DownloadSimple, GraduationCap } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CosmicLanding() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative z-10 flex flex-col w-[94%] h-5/6 p-10 bg-[rgba(2,18,24,0.3)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.5px] border-[1px] border-[hsla(243,38%,29%,1)]">
        <div className="flex w-full">
          <div className="w-max">
          {/* <div className="w-full"> */}
            <motion.div
              className="w-[300px] h-[300px] ml-20"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image src="/me.jpg" alt="me" fill className="rounded-2xl" />
            </motion.div>
          {/* </div> */}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <motion.h1
                className="w-max h-max ml-20 my-10 text-6xl"
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                Puun Pinyawat (Puun)
              </motion.h1>
              <motion.a
                href="/cv.pdf"
                download='Puun_CV.pdf'
                className="rounded-xl text-white px-8 py-2 text-2xl font-semibold transition-all "
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <div className="group relative flex gap-2 text-lg items-center hover:text-[#020818] rounded-[16px] border-2 border-white p-4 overflow-hidden w-max">
                  <div className="absolute inset-0 bg-white transition-transform duration-300 -z-10 ease-in-out scale-x-0 origin-top-left group-hover:scale-x-100"></div>
                  <DownloadSimple />
                  Download CV
                </div>
              </motion.a>
            </div>
            <motion.h1
              className="h-max ml-20 pr-10 text-xl text-gray-400 break-normal indent-10"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              I thrive in creating a balanced, inclusive environment where everyone&apos;s input is valued and
              respected. I believe in treating people fairly and strive for equality in all interactions. I enjoy
              connecting deeply with others. I’m skilled at expressing ideas clearly, ensuring understanding and
              fostering open communication. Additionally, I love learning new things and am always eager to expand my
              knowledge and skills.
            </motion.h1>
          </div>
        </div>

        <div className="flex ">
          <div className="flex flex-col gap-8">
          <div className="flex mt-10 items-center gap-4 text-4xl">
            <GraduationCap />
            My Education
          </div>
          <div className="flex gap-5 items-center">
            <Image src="/cu.png" alt="education" width={80} height={80} className="rounded-full border-4 border-blue-700" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Chulalongkorn University</p>
                <p className="text-md text-gray-400">2017 - 2021</p>
              </div>
              <p className="text-md text-gray-400">Bachelor&apos;s Degree of Computer Engineering (B.Eng.)</p>


            </div>


          </div>

          </div>
        </div>


      </div>
    </div>
  );
}
