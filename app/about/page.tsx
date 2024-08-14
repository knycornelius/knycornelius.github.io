"use client";

import { motion } from "framer-motion";

import {
  PiBookFill,
  PiBrainFill,
  PiGearFineFill,
  PiHandPeaceFill,
} from "react-icons/pi";
import { Education, Experience, Introduction, Skills } from "./components";

const tabs = [
  {
    icon: <PiHandPeaceFill />,
    name: "Introduction",
    href: "#introduction",
  },
  {
    icon: <PiBookFill />,
    name: "Education",
    href: "#education",
  },
  {
    icon: <PiBrainFill />,
    name: "Experience",
    href: "#experience",
  },
  {
    icon: <PiGearFineFill />,
    name: "Skills",
    href: "#skills",
  },
];

export default function IntroductionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="container mx-auto">
        <h1 className="sr-only">About Kenny Cornelius</h1>
        <div className="flex flex-col gap-[60px] xl:flex-row">
          <div className="fixed mx-auto hidden flex-col gap-6 md:flex">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-base text-accent duration-500 hover:bg-accent hover:text-primary hover:transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label={`Navigate to ${tab.name} section`}
              >
                {tab.icon}
              </a>
            ))}
          </div>
          <div className="-mt-8 flex min-h-[60vh] w-full flex-col gap-8 overflow-scroll md:ml-24">
            <Introduction />
            <Education />
            <Experience />
            <Skills />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
