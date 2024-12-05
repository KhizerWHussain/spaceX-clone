import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  cleanDistDir: true,
  cacheMaxMemorySize: 0,
  reactStrictMode: false,
};

export default nextConfig;
