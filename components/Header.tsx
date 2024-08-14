import Link from "next/link";

import { Nav } from "./Nav";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold xl:text-4xl">
            kny
            <span className="text-accent hover:text-accent-hover">
              cornelius
            </span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a
            href="mailto:knycornelius@gmail.com"
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
