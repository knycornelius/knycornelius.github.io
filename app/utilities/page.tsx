"use client";

import {
  SiAndroid,
  SiAndroidstudio,
  SiArc,
  SiLinux,
  SiCloudflare,
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
  SiSlack,
  SiSpotify,
  SiWarp,
  SiYarn,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const system = [
  {
    icon: <SiMacos />,
    name: "Mac OS",
    url: "https://www.apple.com/macos/sonoma",
  },
  {
    icon: <SiLinux />,
    name: "Linux",
    url: "https://www.linux.org/",
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
    icon: <VscVscode />,
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
    url: "https://classic.yarnpkg.com/lang/en/docs/install",
  },
  {
    icon: <SiPrettier />,
    name: "Prettier",
    url: "https://prettier.io",
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
    icon: <SiAndroidstudio />,
    name: "Android Studio",
    url: "https://https://developer.android.com/studio",
  },
  {
    icon: <SiCloudflare />,
    name: "Warp",
    url: "https://one.one.one.one",
  },
  {
    icon: <SiHomebrew />,
    name: "Homebrew",
    url: "https://brew.sh/",
  },
  {
    icon: <SiSlack />,
    name: "Slack",
    url: "https://slack.com/downloads",
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
    <section className="flex min-h-[80vh] flex-col justify-center">
      <div className="container mx-auto flex flex-col gap-y-[40px]">
        <h1 className="sr-only">
          Utilities - tools and software Kenny Cornelius uses
        </h1>
        <div>
          <h2 className="mb-4 select-none text-3xl font-extrabold text-accent xl:text-5xl">
            System
          </h2>
          <div className="text-md mb-4 select-none text-white xl:text-xl">
            OS and Terminal
          </div>
          <ul className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
            {system.map((item) => {
              return (
                <a
                  key={item.name}
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  <div className="group flex h-[150px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#232329]">
                    <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                      {item.icon}
                    </div>
                  </div>
                </a>
              );
            })}
          </ul>
        </div>

        <div className="w-full border-b border-white/20" />

        <div>
          <h2 className="mb-4 select-none text-3xl font-extrabold text-white xl:text-5xl">
            Software
          </h2>
          <div className="mb-4 select-none text-xl text-white xl:text-xl">
            Apps for work and productivity
          </div>
          <ul className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
            {software.map((item) => {
              return (
                <a
                  key={item.name}
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  <div className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                    <div className="text-6xl transition-all duration-300 group-hover:text-accent">
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
