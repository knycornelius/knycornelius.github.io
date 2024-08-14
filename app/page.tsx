import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Socials } from "@/components/Socials";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function HomePage() {
  return (
    <section aria-label="Home page">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Halo!</span>
            <h1 className="h1 mb-6">
              I&apos;m <span className="text-accent">Kenny Cornelius</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              Black coffee and Hip-hop enjoyer
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Link href="/assets/cv.pdf" aria-label="Download CV" download>
                <Button className="flex items-center gap-2 uppercase">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
