import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kenny Cornelius - Software Engineer and AI Automation Specialist with 6+ years of experience. Learn about my background, education, work experience, and technical skills.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Kenny Cornelius",
    description:
      "Background, education, experience, and skills of Kenny Cornelius - Software Engineer and AI Automation Specialist.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
