"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "I develop high-quality, scalable software solutions tailored to meet business needs, using modern programming languages and frameworks.",
    href: "mailto:knycornelius.work@gmail.com?subject=Software Engineer Recruitment",
  },
  {
    num: "02",
    title: "AI Automation",
    description:
      "I design and implement intelligent automation solutions that streamline business processes, boost efficiency, and reduce operational costs.",
    href: "mailto:knycornelius.work@gmail.com?subject=AI Automation Recruitment",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I create a user-friendly, visually appealing interfaces, and user-centered design that enhance user experience and meet design goals.",
    href: "mailto:knycornelius.work@gmail.com?subject=UI/UX Designer Recruitment",
  },
  {
    num: "04",
    title: "Project Management",
    description:
      "I manage projects efficiently, ensuring they are completed on time, within scope, and to stakeholder satisfaction.",
    href: "mailto:knycornelius.work@gmail.com?subject=Project Manager Recruitment",
  },
];

export default function ServicesPage() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="sr-only">
          Services by Kenny Cornelius: Software Engineering, AI Automation,
          UI/UX Design, and Project Management
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service) => {
            return (
              <a
                key={service.title}
                href={service.href}
                className="group flex flex-1 flex-col justify-center gap-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover select-none text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:-rotate-45 group-hover:bg-accent">
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </div>
                </div>
                <h2 className="select-none text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="select-none text-white/60">
                  {service.description}
                </p>
                <div className="w-full border-b border-white/20" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
