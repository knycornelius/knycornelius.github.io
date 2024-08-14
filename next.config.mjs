/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages so search engines and social
  // crawlers receive fully rendered pages (also matches the CI Pages build).
  output: "export",
  // next/image can't use the optimization server on a static host.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
