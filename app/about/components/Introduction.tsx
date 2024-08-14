const about = {
  title: "About me",
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
      value: "knycornelius.work@gmail.com",
    },
    {
      name: "Education",
      value: "B.Sc. (Informatics)",
    },
    {
      name: "Experience",
      value: "5+ Years",
    },
    {
      name: "Languages",
      value: "Indonesia, English",
    },
    {
      name: "Freelance",
      value: "Available",
    },
  ],
};

export function Introduction() {
  return (
    <div
      id="introduction"
      className="flex select-none flex-col gap-[30px] pt-8 text-center xl:text-left"
    >
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {about.description}
      </p>
      <div className="rounded-xl bg-[#232329] px-10 py-6">
        <ul className="mx-auto grid max-w-[720px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
          {about.info.map((item) => {
            return (
              <li
                key={item.name}
                className="flex items-center justify-center gap-4 xl:justify-start"
              >
                <span className="text-white/60">{item.name}</span>
                <span className="text-lg">{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
