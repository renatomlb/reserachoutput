import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no server actions) — export to plain
  // HTML/CSS/JS so it can be served by nginx like any other static site,
  // no Node process needed on the server.
  output: "export",
  images: {
    // next/image's on-demand resize/optimize API needs a server; static
    // export has none. Images are already reasonably sized and statically
    // imported, so this just serves them as-is instead.
    unoptimized: true,
  },
};

export default nextConfig;
