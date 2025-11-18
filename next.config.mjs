/** @type {import('next').NextConfig} */
const nextConfig = {
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
