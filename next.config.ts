import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "utfuxvclwe.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "3znc0tm3cy.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
