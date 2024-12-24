import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'dd.dexscreener.com'
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com'
    },
    {
      protocol: 'https',
      hostname: 'assets.aceternity.com'
    },
    {
      protocol: 'https',
      hostname: 'ui.aceternity.com'
    },
    {
      protocol: 'https',
      hostname: 'www.dextools.io'
    },
    {
      protocol: 'https',
      hostname: 'dexscreener.com'
    },
    {
      protocol: 'https',
      hostname: 'photon-sol.tinyastro.io'
    }
  ]  

  },
};

export default nextConfig;
