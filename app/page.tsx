"use client";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ParticleBG from "@/components/ParticleBG";
import TokeDetails from "@/components/TokenDetails";
import TokenLogo from "@/components/TokenLogo";
import NewYearCountdown from "@/components/ui/new-year-countdown";
import { useEffect } from "react";

export default function Home() {

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<>	
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
