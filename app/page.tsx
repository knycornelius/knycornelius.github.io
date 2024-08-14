import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Socials } from "@/components/Socials";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Hello !</span>
            <h1 className="h1 mb-6">
              I&apos;m,
              <span className="text-accent">Kenny Cornelius</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              An ordinary software engineer
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1KHT_ysYl6N5l8uHjt40AbgemtAt_Cfm6/view?usp=sharing">
                <Button className="uppercase flex items-center gap-2">
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
