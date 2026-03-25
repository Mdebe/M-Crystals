import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["replicate.delivery"], // ✅ allow AI images
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // ✅ fixes API payload issues
    },
  },
};

export default nextConfig;