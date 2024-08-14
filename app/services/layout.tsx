import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services offered by Kenny Cornelius: Software Engineering, AI Automation, UI/UX Design, and Project Management. Get in touch for professional software solutions and design services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Kenny Cornelius",
    description:
      "Professional services: Software Engineering, AI Automation, UI/UX Design, and Project Management.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
