import ParticleBG from "@/components/ParticleBG";
import Image from "next/image";

export default function Home() {


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
			<div className="container mx-auto pt-20 ">
				<div className="grid grid-cols-2">
					<div className="flex flex-col ">
						<h1 className="text-4xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">$NewYears</h1>
						<p className="relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">
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
