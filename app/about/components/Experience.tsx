const experience = {
  title: "My experience",
  description: "Highlights of my work experience",
  list: [
    {
      company: "Freelance",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "KodeFox, Inc.",
      position: "Software Engineer",
      duration: "2020 - Present",
    },
    {
      company: "BPMI Universitas Multimedia Nusantara",
      position: "Web Developer",
      duration: "2020",
    },
    {
      company: "ICT Lab Universitas Multimedia Nusantara",
      position: "Software Engineer",
      duration: "2020",
    },
  ],
};

type Props = {
  active: boolean;
};

export function Experience(props: Props) {
  const { active } = props;

  return (
    <div className={`w-full ${active ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-[30px] text-center xl:text-left select-none">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {experience.description}
        </p>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.list.map((item) => {
              return (
                <li
                  key={item.company}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                    <p className="text-white/60">{item.company}</p>
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
