"use client";

import { NAV_LINKS } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {NAV_LINKS.map((link) => {
        const isActivePath = link.path === pathname;

        return (
          <Link
            key={link.path}
            href={link.path}
            className={`capitalize font-medium hover:text-accent transition-all ${
              isActivePath && "text-accent border-b-2 border-accent"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
