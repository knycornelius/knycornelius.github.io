import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog posts and articles by Kenny Cornelius about software engineering, AI automation, UI/UX design, web development, and technology insights.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Kenny Cornelius",
    description:
      "Read articles and insights about software engineering, AI automation, UI/UX design, and web development.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
