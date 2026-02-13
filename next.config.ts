import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xynshcnkxdliapebmyaz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "ltldyrnyfuepqxazauor.supabase.co",
      },
    ],
  },
};

export default nextConfig;
