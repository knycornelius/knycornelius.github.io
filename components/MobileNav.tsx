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
      <div className="flex justify-between items-center p-4 text-accent">
        <button
          onClick={toggleNavbar}
          className="text-accent text-3xl focus:outline-none md:hidden"
        >
          <MdMenu />
        </button>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.24, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-primary md:hidden py-8 container"
      >
        <div className="flex justify-end items-end">
          <button
            onClick={toggleNavbar}
            className="text-accent text-3xl focus:outline-none p-4"
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
                className={`capitalize text-xl font-medium hover:text-accent transition-all ${
                  isActivePath && "text-accent border-b-2 border-accent"
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
