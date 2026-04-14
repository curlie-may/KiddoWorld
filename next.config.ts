import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinary-loader.ts",
  },
};

export default nextConfig;
