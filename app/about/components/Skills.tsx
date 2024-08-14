import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiHtml5,
  SiNodedotjs,
  SiFigma,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiMake,
  SiN8N,
} from "react-icons/si";

const skills = {
  title: "Skills",
  description: "Tech stacks I have been using for my engineering journey",
  list: [
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <SiCss />,
      name: "CSS 3",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMake />,
      name: "Make",
    },
    {
      icon: <SiN8N />,
      name: "N8N",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
  ],
};

export function Skills() {
  return (
    <div
      id="skills"
      className="flex select-none flex-col gap-[30px] pt-8 text-center xl:text-left"
    >
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {skills.description}
      </p>
      <div>
        <ul className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
          {skills.list.map((item) => {
            return (
              <li key={item.name}>
                <div className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                  <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                    {item.icon}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
