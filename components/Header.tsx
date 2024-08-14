import Link from "next/link";

import { Nav } from "./Nav";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Kenny Cornelius - home">
          <span className="text-xl font-semibold xl:text-4xl">
            kny
            <span className="text-accent hover:text-accent-hover">
              cornelius
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <a
            href="mailto:knycornelius.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hire me</Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="flex xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
