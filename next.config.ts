import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Clean URL for the internal invoice tool (static file in /public).
      { source: "/invoice", destination: "/invoice.html" },
    ];
  },
};

export default nextConfig;
