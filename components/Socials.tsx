import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  {
    name: "GitHub",
    icons: <FaGithub />,
    path: "https://github.com/knycornelius",
  },
  {
    name: "LinkedIn",
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/knycornelius/",
  },
  {
    name: "Instagram",
    icons: <FaInstagram />,
    path: "https://www.instagram.com/knycornelius/",
  },
  {
    name: "X",
    icons: <FaXTwitter />,
    path: "https://x.com/knycornelius",
  },
];

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

export function Socials(props: Props) {
  const { containerStyles, iconStyles } = props;

  return (
    <div className={containerStyles}>
      {SOCIALS.map((item) => {
        return (
          <Link key={item.name} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
}
