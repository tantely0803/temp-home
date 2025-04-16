import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        //copy url error here
        hostname: "ewfjjgwyizfqqcmmhrym.supabase.co",
      },
    ],
  },
};

export default nextConfig;
