import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dkoxmv7ca6.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
