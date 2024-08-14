import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiFigma,
  SiExpress,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

const skills = {
  title: "My skills",
  description: "Tech stacks I have been using for my software dev journey",
  list: [
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <SiCss3 />,
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
      icon: <SiFigma />,
      name: "Figma",
    },
  ],
};

type Props = {
  active: boolean;
};

export function Skills(props: Props) {
  const { active } = props;

  return (
    <div className={`w-full ${active ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-[30px] text-center xl:text-left select-none">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
        <div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] md:grid-cols-4 xl:gap-[30px]">
            {skills.list.map((item) => {
              return (
                <li key={item.name}>
                  <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
