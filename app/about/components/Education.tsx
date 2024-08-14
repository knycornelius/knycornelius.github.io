const education = {
  title: "Education",
  description: "Overview of my educational background",
  list: [
    {
      institution: "Universitas Multimedia Nusantara",
      degree: "Bachelor - Informatics",
      duration: "2017 - 2022",
    },
    {
      institution: "SMAK Kanaan Tangerang",
      degree: "Science Major",
      duration: "2014 - 2017",
    },
  ],
};

export function Education() {
  return (
    <div
      id="education"
      className="flex select-none flex-col gap-[30px] pt-8 text-center xl:text-left"
    >
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {education.description}
      </p>
      <div>
        <ul className="flex flex-col gap-[30px]">
          {education.list.map((item) => {
            return (
              <li
                key={item.institution}
                className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="min-h-[60px] text-center text-xl lg:text-left">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                  <p className="text-white/60">{item.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
