import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX || "/incut/"
};

export default nextConfig;
