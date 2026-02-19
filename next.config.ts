import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      new URL("https://site-iest.s3.us-east-1.amazonaws.com/**"),
    ],
  },
};

export default nextConfig;
