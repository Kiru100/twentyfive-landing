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
		},
		{
			protocol: 'https',
			hostname: 'cdn.discordapp.com'
		},
		{
			protocol: 'https',
			hostname: 'i.ytimg.com'
		},
		{
			protocol: 'https',
			hostname: 's3-ap-southeast-1.amazonaws.com'
		}
	]},
};

export default nextConfig;
