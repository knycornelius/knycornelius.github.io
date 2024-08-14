const about = {
  title: "👋 About me",
  description: "Brief introduction about myself",
  info: [
    {
      name: "Name",
      value: "Kenny Cornelius",
    },
    {
      name: "Address",
      value: "Tangerang, ID",
    },
    {
      name: "Phone",
      value: "(+62) 822 1188 8556",
    },
    {
      name: "Email",
      value: "knycornelius@gmail.com",
    },
    {
      name: "Experience",
      value: "4+ Years",
    },
    {
      name: "Education",
      value: "B.Sc. (Informatics)",
    },
    {
      name: "Freelance",
      value: "Available",
    },
    {
      name: "Languages",
      value: "Indonesia, English",
    },
  ],
};

type Props = {
  active: boolean;
};

export function About(props: Props) {
  const { active } = props;

  return (
    <div className={`${active ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-[30px] text-center xl:text-left select-none">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {about.description}
        </p>
        <div>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item) => {
              return (
                <li
                  key={item.name}
                  className="flex items-center justify-center xl:justify-start gap-4"
                >
                  <span className="text-white/60">{item.name}</span>
                  <span className="text-lg">{item.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
