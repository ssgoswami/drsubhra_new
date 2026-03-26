import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Small production hardening for better performance and security posture.
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
