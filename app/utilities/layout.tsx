import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utilities",
  description:
    "Tools, apps, and software Kenny Cornelius uses daily for software engineering, design, and productivity - including operating systems, editors, and developer tooling.",
  alternates: {
    canonical: "/utilities",
  },
  openGraph: {
    title: "Utilities | Kenny Cornelius",
    description:
      "The tools, apps, and software Kenny Cornelius uses for development, design, and productivity.",
    url: "/utilities",
  },
};

export default function UtilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
