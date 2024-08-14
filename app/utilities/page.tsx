"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import {
  SiAndroid,
  SiAndroidstudio,
  SiArc,
  SiArchlinux,
  SiCloudflare,
  SiCodeforces,
  SiDiscord,
  SiDocker,
  SiGit,
  SiGithub,
  SiHomebrew,
  SiInsomnia,
  SiMacos,
  SiNotion,
  SiNpm,
  SiPrettier,
  SiProtonmail,
  SiSlack,
  SiSpotify,
  SiVisualstudiocode,
  SiWarp,
  SiWindows11,
  SiYarn,
} from "react-icons/si";

const system = [
  {
    icon: <SiMacos />,
    name: "Mac OS",
    url: "https://www.apple.com/macos/sonoma/",
  },
  {
    icon: <SiArchlinux />,
    name: "Arch Linux",
    url: "https://archlinux.org/download/",
  },
  {
    icon: <SiAndroid />,
    name: "Android",
    url: "https://www.android.com/",
  },
  {
    icon: <SiWarp />,
    name: "Warp",
    url: "https://app.warp.dev/get_warp",
  },
];

const software = [
  {
    icon: <SiVisualstudiocode />,
    name: "VSCode",
    url: "https://code.visualstudio.com/download",
  },
  {
    icon: <SiNpm />,
    name: "NPM",
    url: "https://nodejs.org/en/download/package-manager",
  },
  {
    icon: <SiYarn />,
    name: "Yarn",
    url: "https://classic.yarnpkg.com/lang/en/docs/install/",
  },
  {
    icon: <SiPrettier />,
    name: "Prettier",
    url: "https://prettier.io/",
  },
  {
    icon: <SiGit />,
    name: "Git",
    url: "https://git-scm.com/downloads",
  },
  {
    icon: <SiGithub />,
    name: "Github",
    url: "https://github.com",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
    url: "https://docs.docker.com/get-docker/",
  },
  {
    icon: <SiInsomnia />,
    name: "Insomnia",
    url: "https://insomnia.rest/download",
  },
  {
    icon: <SiArc />,
    name: "Arc",
    url: "https://arc.net/download",
  },
  {
    icon: <SiCloudflare />,
    name: "Warp",
    url: "https://one.one.one.one/",
  },
  {
    icon: <SiHomebrew />,
    name: "Homebrew",
    url: "https://brew.sh/",
  },
  {
    icon: <SiSlack />,
    name: "Slack",
    url: "https://slack.com/downloads/",
  },
  {
    icon: <SiDiscord />,
    name: "Discord",
    url: "https://discord.com/download",
  },
  {
    icon: <SiNotion />,
    name: "Notion",
    url: "https://www.notion.so/desktop",
  },
  {
    icon: <SiSpotify />,
    name: "Spotify",
    url: "https://www.spotify.com/us/download",
  },
];

export default function UtilitiesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto flex flex-col gap-y-[40px]">
        <div>
          <div className="text-3xl xl:text-5xl font-extrabold text-accent select-none mb-4">
            System
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] md:grid-cols-4 xl:gap-[30px]">
            {system.map((item) => {
              return (
                <a
                  key={item.name}
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group cursor-pointer">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                </a>
              );
            })}
          </ul>
        </div>

        <div className="border-b border-white/20 w-full" />

        <div>
          <div className="text-3xl xl:text-5xl font-extrabold text-white select-none mb-4">
            Software
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] md:grid-cols-4 xl:gap-[30px]">
            {software.map((item) => {
              return (
                <a
                  key={item.name}
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
