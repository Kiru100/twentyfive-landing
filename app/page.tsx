"use client";
import ParticleBG from "@/components/ParticleBG";
import NewYearCountdown from "@/components/ui/new-year-countdown";
import Hero from "@/components/Hero";
import TokenLogo from "@/components/TokenLogo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { useEffect } from "react";
import TokeDetails from "@/components/Tokenomics";

export default function Home() {

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<>	
			<div className="h-screen p-8 flex flex-col overflow-hidden">
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
			<div className="bg-neutral-900">
				<TokeDetails />
			</div>
		</>
	);
}
