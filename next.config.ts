import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Small production hardening for better performance and security posture.
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,
};

export default nextConfig;
