import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kenny Cornelius for software engineering, AI automation, UI/UX design, or project management opportunities. Available for freelance work and full-time positions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Kenny Cornelius",
    description:
      "Get in touch with Kenny Cornelius for professional software solutions and design services.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
