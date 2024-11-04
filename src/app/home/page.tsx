"use client";

import WorkExperienceGrid from "@/app/home/components/WorkExperience";
import { DownloadSimple, GraduationCap } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import EducationCard from "./components/EducationCard";

export default function CosmicLanding() {
  return (
    <div className="flex items-center justify-center lg:h-screen w-full">
      <div className="relative z-10 flex flex-col w-[94%] max-md:mt-4 p-5 md:p-10 bg-[rgba(2,18,24,0.3)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.5px] border-[1px] border-[hsla(243,38%,29%,1)]">
        <div className="flex w-full max-lg:flex-col max-lg:items-center">
            <motion.h1
              className="w-max h-max lg:ml-10 xl:ml-20 my-10 text-4xl sm:text-6xl lg:hidden"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              Puun Pinyawat 
              
              <span className="text-2xl ml-2">
              (Puun)
              </span>
            </motion.h1>
          <div className="w-max">
            <motion.div
              className="w-[300px] h-[300px] md:ml-5 lg:ml-10 xl:ml-20 hover:scale-105 transition-transform duration-300"
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image src="/me.jpg" alt="me" fill className="rounded-2xl" />
            </motion.div>
          </div>
          <div className="flex flex-col max-lg:flex-col-reverse">
            <div className="flex justify-between items-center max-lg:justify-end">
              <motion.h1
                className="w-max h-max ml-5 lg:ml-10 xl:ml-20 my-10 lg:text-4xl xl:text-6xl max-lg:hidden"
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                Puun Pinyawat (Puun)
              </motion.h1>
              <motion.a
                href="/cv.pdf"
                download="Puun_CV.pdf"
                className="rounded-xl text-white sm:px-4 md:px-6 xl:px-8 py-2 text-2xl font-semibold transition-all "
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <div className="group relative flex gap-2 text-sm md:text-base lg:text-lg max-md:mt-4 items-center hover:text-[#020818] rounded-[16px] border-2 border-white p-2 md:p-4 overflow-hidden w-max">
                  <div className="absolute inset-0 bg-white transition-transform duration-300 -z-10 ease-in-out scale-x-0 origin-top-left group-hover:scale-x-100"></div>
                  <DownloadSimple />
                  Download CV
                </div>
              </motion.a>
            </div>
            <motion.h1
              className="h-max max-md:mt-5 md:mt-10 lg:ml-10 xl:ml-20 md:pr-10 text-sm md:text-lg  text-gray-400 break-normal indent-10"
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

        <div className="flex max-lg:flex-col gap-8 w-full">
          <div className="flex flex-col gap-8 lg:w-1/3 2xl:w-1/4">
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="flex w-full max-lg:justify-center mt-10 items-center gap-2 lg:gap-4 text-3xl md:text-4xl">
                <GraduationCap className="max-md:w-6 max-md:h-6" />
                My Education
              </div>
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <EducationCard
                title="Chulalongkorn University"
                imagesrc="/cu.png"
                period="2021 - present"
                description="Bachelor's Degree of Computer Engineering"
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <EducationCard
                title="Satriwitthaya 2 School"
                imagesrc="/sw2.png"
                period="2014 - 2020"
                description="High School and Intermediate"
              />
            </motion.div>
          </div>
          <div className="flex flex-col lg:w-2/3 2xl:w-3/4 gap-8">
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="flex w-full max-lg:justify-center mt-10 items-center gap-2 md:gap-4 text-3xl md:text-4xl">
                <GraduationCap className="max-md:w-6 max-md:h-6"/>
                My Experience
              </div>
            </motion.div>
            <WorkExperienceGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
