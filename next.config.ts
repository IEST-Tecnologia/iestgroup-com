import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    deviceSizes: [640, 680, 750, 800, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 320, 384, 480],
    remotePatterns: [
      new URL("https://site-iest.s3.us-east-1.amazonaws.com/**"),
    ],
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module":
        "./src/lib/modern-polyfill.js",
    },
  },
};

export default nextConfig;
