import ParticleBG from "@/components/ParticleBG";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import page_logo from "@/public/twentyfive.jpg";

export default function Home() {

	const darkNewYearTheme = {
		gradientBackgroundStart: "#0B0C10", // Deep blackish blue
		gradientBackgroundEnd: "#1F2833", // Slightly lighter bluish black
		firstColor: "128, 0, 128", // Deep purple for a neon glow effect
		secondColor: "255, 87, 34", // Dark orange-red for energy
		thirdColor: "0, 150, 136", // Teal for a cool balance
		fourthColor: "33, 150, 243", // Bright blue for vibrancy
		fifthColor: "211, 47, 47", // Deep red for warmth
		pointerColor: "255, 255, 255", // White for high contrast pointer
		size: "90%",
		blendingValue: "soft-light", // Softer glow for blending
		interactive: false,
		containerClassName: "dark-new-year-container",
	};
  
	return (
		<div className="h-screen w-screen p-6">
			<div className="container mx-auto flex justify-center">
				<div>
					<Image
						className="rounded-full self-center"
						width={100}
						height={100}
						src={`https://dd.dexscreener.com/ds-data/tokens/solana/E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH.png?size=xl&key=2c39fb`}
						alt="Twenty Twenty Five"
					/>	
				</div>
				
			</div>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 place-items-center h-full">
				<div className="text-5xl text-white z-10">
					<h1 className="text-5xl font-bold sm:text-6xl">$NewYears</h1>
					<p className="text-lg sm:text-xl max-w-3xl mx-auto">
					Celebrate, meme, and moon your way into 2025 with $NewYears.  
					A coin built for laughs, gains, and an all-year party vibe. 🎉✨
				</p>
				</div>
				<div className="text-5xl text-white z-10">Happy New Year 2025</div>
				</div>
			</div>
		
		
		{/* <FlipWords  words={["Happy", "New", "Year", "2025"]} duration={2000} className="text-5xl text-white z-10" /> */}
		
		<ParticleBG />
		</div>
	);
}
