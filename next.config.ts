import type { NextConfig } from "next";

const isPagesExport = process.env.YUTA_PAGES_EXPORT === "1";

const nextConfig: NextConfig = isPagesExport
  ? { output: "export", images: { unoptimized: true } }
  : {};

export default nextConfig;
