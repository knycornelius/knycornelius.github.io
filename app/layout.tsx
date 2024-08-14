import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";
import { Footer } from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://knycornelius.github.io";

export const metadata: Metadata = {
  title: {
    default: "Kenny Cornelius | Software Engineer & AI Automation Specialist",
    template: "%s | Kenny Cornelius",
  },
  description:
    "Portfolio of Kenny Cornelius - Software Engineer, AI Automation Specialist, and AI Enthusiast. 6+ years of experience in developing scalable software solutions and creating user-centered designs.",
  keywords: [
    "Kenny Cornelius",
    "Software Engineer",
    "UI/UX Designer",
    "AI Automation",
    "Web Developer",
    "Portfolio",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Kenny Cornelius" }],
  creator: "Kenny Cornelius",
  publisher: "Kenny Cornelius",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kenny Cornelius Portfolio",
    title: "Kenny Cornelius | Software Engineer & AI Automation Specialist",
    description:
      "Portfolio of Kenny Cornelius - Software Engineer, AI Automation Specialist, and AI Enthusiast with 5+ years of experience.",
    images: [
      {
        url: `${siteUrl}/assets/photo.webp`,
        width: 1200,
        height: 630,
        alt: "Kenny Cornelius - Software Engineer & AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny Cornelius | Software Engineer & AI Automation Specialist",
    description:
      "Portfolio of Kenny Cornelius - Software Engineer, AI Automation Specialist, and AI Enthusiast.",
    images: [`${siteUrl}/assets/photo.webp`],
    creator: "@knycornelius",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "jshSCWNpD-UtbPlkaJlXfWppWfx13gtWNTh0yrCQvn0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kenny Cornelius",
    jobTitle: "Software Engineer & AI Automation Specialist",
    url: siteUrl,
    sameAs: [
      "https://github.com/knycornelius",
      "https://linkedin.com/in/knycornelius",
      "https://instagram.com/knycornelius",
      "https://x.com/knycornelius",
    ],
    email: "knycornelius.work@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangerang",
      addressCountry: "ID",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Informatics",
      degree: "B.Sc.",
    },
    knowsAbout: [
      "Software Engineering",
      "AI Automation",
      "UI/UX Design",
      "Web Development",
      "Project Management",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={jetbrainsMono.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <Header />
        <StairTransition />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
