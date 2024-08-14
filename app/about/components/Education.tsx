const education = {
  title: "My education",
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

type Props = {
  active: boolean;
};

export function Education(props: Props) {
  const { active } = props;

  return (
    <div className={`w-full ${active ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-[30px] text-center xl:text-left select-none">
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {education.description}
        </p>
        <div>
          <ul className="flex flex-col gap-[30px]">
            {education.list.map((item) => {
              return (
                <li
                  key={item.institution}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                    <p className="text-white/60">{item.institution}</p>
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
