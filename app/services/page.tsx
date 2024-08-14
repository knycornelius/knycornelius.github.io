"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "I develop high-quality, scalable software solutions tailored to meet business needs, using modern programming languages and frameworks.",
    href: "mailto:knycornelius@gmail.com?subject=Software Engineer Recruitment",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create a user-friendly, visually appealing interfaces, and user-centered design that enhance user experience and meet design goals.",
    href: "mailto:knycornelius@gmail.com?subject=UI/UX Designer Recruitment",
  },
  {
    num: "03",
    title: "Project Management",
    description:
      "I manage projects efficiently, ensuring they are completed on time, within scope, and to stakeholder satisfaction.",
    href: "mailto:knycornelius@gmail.com?subject=Project Manager Recruitment",
  },
  {
    num: "04",
    title: "QA Engineering",
    description:
      "I ensure software quality by identifying issues early and delivering bug-free, reliable products through thorough testing.",
    href: "mailto:knycornelius@gmail.com?subject=QA Engineer Recruitment",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => {
            return (
              <a
                key={service.title}
                href={service.href}
                className="flex-1 flex flex-col justify-center gap-6 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 select-none">
                    {service.num}
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 select-none">
                  {service.title}
                </h2>
                <p className="text-white/60 select-none">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
