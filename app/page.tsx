"use client";
import ParticleBG from "@/components/ParticleBG";
import NewYearCountdown from "@/components/ui/new-year-countdown";
import Hero from "@/components/Hero";
import TokenLogo from "@/components/TokenLogo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { useEffect } from "react";
import TokeDetails from "@/components/TokenDetails";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Boosted_Image from "@/public/booster.png";
import Link from "next/link";

export default function Home() {

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<>	
			<Marquee 
				autoFill 
				speed={50} 
				direction="left" 
				className="bg-yellow-950 absolute"
			>	
			<Link 
				href="https://dexscreener.com/solana/e8f3pad1stls1hyqweutgji15dhntj6yp2lgwvnnfiuh" 
				target="_blank" 
			>
				<Image 	
					width={100}
					height={100}				
					className="h-full w-full object-cover"
					src={"https://media.discordapp.net/attachments/1321143163074646016/1322987158805418054/Screenshot_2024-12-30_015254.png?ex=6772df4e&is=67718dce&hm=b8953240bf75c9cd752e84103d8948b609f0db993971d39dbd1598a18d483e9b&=&format=webp&quality=lossless"} alt="Moving picture of Leonardo DiCaprio" 
				/>
			</Link>
			</Marquee>
			<div className="h-screen p-8 flex flex-col overflow-hidden max-w-7xl mx-auto">	
				<TokenLogo />
				<Hero/>
				<ParticleBG />
			</div>
			<div className="bg-neutral-900 p-6">
				<NewYearCountdown/>
			</div>
			<div className="bg-neutral-950">
				<FeaturesSection />
			</div>
			<div className="bg-neutral-900 overflow-hidden">
				<TokeDetails />
			</div>
			<div className="bg-neutral-950">
				<Footer />
			</div>
		</>
	);
}
