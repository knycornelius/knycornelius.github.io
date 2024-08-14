"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";

import { Skills } from "./components/Skills";
import { useState } from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

enum TabContent {
  INTRODUCTION = "Introduction",
  EDUCATION = "Education",
  EXPERIENCE = "Experience",
  SKILLS = "Skills",
}

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState(TabContent.INTRODUCTION);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <Button onClick={() => setActiveTab(TabContent.INTRODUCTION)}>
              Introduction
            </Button>
            <Button onClick={() => setActiveTab(TabContent.EDUCATION)}>
              Education
            </Button>
            <Button onClick={() => setActiveTab(TabContent.EXPERIENCE)}>
              Experience
            </Button>
            <Button onClick={() => setActiveTab(TabContent.SKILLS)}>
              Skills
            </Button>
          </div>
          <div className="min-h-[60vh] w-full">
            <About active={activeTab === TabContent.INTRODUCTION} />
            <Education active={activeTab === TabContent.EDUCATION} />
            <Experience active={activeTab === TabContent.EXPERIENCE} />
            <Skills active={activeTab === TabContent.SKILLS} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
