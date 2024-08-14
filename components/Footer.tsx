"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`${pathname === "/" && "hidden"}  py-20 xl:py-20 `}>
      <div className="container flex items-center justify-center text-white/60">
        © 2024 Written by knycornelius
      </div>
    </footer>
  );
}
