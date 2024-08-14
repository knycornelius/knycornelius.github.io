"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import { NAV_LINKS } from "@/constants/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 text-accent">
        <button
          onClick={toggleNavbar}
          className="text-3xl text-accent focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <MdMenu />
        </button>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.24, ease: "easeInOut" }}
        className="container fixed inset-0 z-50 bg-primary py-8 md:hidden"
      >
        <div className="flex items-end justify-end">
          <button
            onClick={toggleNavbar}
            className="p-4 text-3xl text-accent focus:outline-none"
            aria-label="Close navigation menu"
          >
            <MdClose />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-y-12 p-4">
          {NAV_LINKS.map((link) => {
            const isActivePath = link.path === pathname;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xl font-medium capitalize transition-all hover:text-accent ${
                  isActivePath && "border-b-2 border-accent text-accent"
                }`}
                onClick={toggleNavbar}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
