const experience = {
  title: "Experience",
  description: "Highlights of my work experience",
  list: [
    {
      id: "1",
      company: "KodeFox, Inc.",
      position: "Software Engineer",
      duration: "2020 - Present",
    },
    {
      id: "2",
      company: "Freelance",
      position: "Software Engineer",
      duration: "2020 - Present",
    },
    {
      id: "3",
      company: "Freelance",
      position: "Automation Specialist",
      duration: "2025 - Present",
    },
    {
      id: "4",
      company: "ICT Lab Universitas Multimedia Nusantara",
      position: "Laboratory Assistant",
      duration: "2020",
    },
  ],
};

export function Experience() {
  return (
    <div
      id="experience"
      className="flex select-none flex-col gap-[30px] pt-8 text-center xl:text-left"
    >
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {experience.description}
      </p>
      <div>
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {experience.list.map((item) => {
            return (
              <li
                key={item.id}
                className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                  <p className="text-white/60">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
