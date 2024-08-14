"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex justify-center"
    >
      <div className="flex flex-col gap-[30px] text-center xl:text-left select-none">
        <h1 className="text-4xl text-accent">Under Development</h1>
      </div>
    </motion.div>
  );
}
