import type { NextConfig } from "next";

const repoName = "drsubhra_new"; // 👈 your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // 👇 CRITICAL for GitHub Pages
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // Performance & security
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
