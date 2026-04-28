import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",
  // trailingSlash: true,

  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: { unoptimized: true }
};

export default nextConfig;
