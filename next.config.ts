import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    deviceSizes: [640, 680, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      new URL("https://site-iest.s3.us-east-1.amazonaws.com/**"),
    ],
  },
};

export default nextConfig;
