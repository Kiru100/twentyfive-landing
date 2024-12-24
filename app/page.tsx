"use client";
import ParticleBG from "@/components/ParticleBG";
import { FeaturesSectionDemo } from "@/components/ui/bento-grid";
import NewYearCountdown from "@/components/ui/new-year-countdown";
import Hero from "@/components/Hero";
import TokenLogo from "@/components/TokenLogo";
import { useEffect } from "react";

export default function Home() {

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<>	
			<div className="h-screen p-8 flex flex-col">
				<TokenLogo />
				<Hero/>
				<ParticleBG />
			</div>
			<div className="bg-neutral-900 p-6">
				<NewYearCountdown/>
			</div>
			<div className="bg-neutral-950">
				<FeaturesSectionDemo />
			</div>
		</>
	);
}
