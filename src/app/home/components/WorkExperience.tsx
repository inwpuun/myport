import { useState } from "react";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  href: string;
}

export default function WorkExperienceGrid() {
  const [experiences] = useState<Experience[]>([
    {
      id: 1,
      title: "KKP Dime",
      role: "Software Engineer Intern",
      period: "June 2024 - July 2024",
      description:
        "Led a microservice project with Golang, built a React-Admin frontend, tested with Ginkgo and Jest, collaborated in Scrum, and designed a time-tracking feature for Dime.",
      href: "https://dime.co.th/about-us",
    },
    {
      id: 2,
      title: "Thinc. Club",
      role: "Full Stack Developer",
      period: "Aug 2021 - Present",
      description:
        "An organization with magic power aiming to incubate students for making impact to society using software development",
      href: "https://thinc.in.th/",
    },
    {
      id: 3,
      title: "MYCOURSEVILLE",
      role: "Full-Stack Engineer",
      period: "Apr 2023 - Present",
      description:
        "Migrated a PHP 5 system to Golang with GraphQL, led POCs for Casbin and Relay, and built a modern REST API and frontend with TypeScript in an Agile environment.",
      href: "https://lic.chula.ac.th/technology/mycourseville/",
    },
  ]);

  return (
    <div className="max-lg:grid max-lg:col-span-1 flex gap-4 snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
      {experiences.map((exp, index) => (
        <motion.a
          href={exp.href}
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: "linear" }}
          className="group relative rounded-lg overflow-hidden lg:w-[284px] md:shrink-0 hover:text-[#020818] transform transition-transform duration-400 hover:scale-105 hover:translate-y-3 border-4 border-white"
        >
          <div className="absolute inset-0 bg-white transition-transform duration-300 -z-10 ease-in-out scale-x-0 origin-top-left group-hover:scale-x-100"></div>
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{exp.title}</h2>
            <p className="text-gray-400 mb-4 group-hover:text-gray-700">{exp.role}</p>
            <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-800">{exp.period}</p>
            <p className="text-gray-400 group-hover:text-gray-700">{exp.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
