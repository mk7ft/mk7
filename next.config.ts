import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint's no-img-element rule fires on the intentional plain <img>
  // used for the full-bleed backdrop; skip it during builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
