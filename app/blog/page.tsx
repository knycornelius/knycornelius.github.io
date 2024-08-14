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
      className="flex min-h-[60vh] justify-center"
    >
      <div className="flex select-none flex-col gap-[30px] text-center xl:text-left">
        <h1 className="text-4xl text-accent">Blog</h1>
        <p className="text-white/60">
          Articles on software engineering, AI automation, and UI/UX design are
          coming soon.
        </p>
      </div>
    </motion.div>
  );
}
