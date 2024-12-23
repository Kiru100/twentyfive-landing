"use client";

import ParticleBG from "@/components/ParticleBG";
import Image from "next/image";
import LeonardoGIF from "@/public/leonardo.webp";
import BackgroundGradient from "@/components/ui/background-gradient";
import { LuClipboardCopy } from "react-icons/lu";

export default function Home() {


	const copyToClipboard = () => {
		navigator.clipboard.writeText("E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH");
	};

	return (
		<div className="h-screen p-8 flex flex-col">
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
			<div className="container mx-auto flex-1 pt-10 md:pt-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex flex-col justify-center">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 relative text-left text-zinc-100 max-w-4xl font-roboto-bold">$2025</h1>
						<p className="relative text-sm sm:text-xl text-zinc-300 tracking-wide text-left max-w-2xl antialiased leading-loose font-inter-medium pb-4">
							Celebrate, meme, and moon your way into 2025 with New Years token.  
							A coin built for laughs, gains, and an all-year party vibe. 🎉✨
						</p>
						<div className="flex flex-row gap-2 rounded-[8px] bg-slate-700 self-start overflow-hidden font-inter-medium items-center text-wrap">
							<p className="text-zinc-300 w-full break-all p-2">CA: E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH</p>
							<button 
								className="bg-slate-800 h-full p-2 hover:text-zinc-100 hover:bg-slate-900 transition-all duration-300 ease-in-out active:bg-slate-950"
								onClick={copyToClipboard}
							>
									<LuClipboardCopy size="24" className="text-zinc-300" />
							</button>
						</div>
					</div>	
					<div>
								 
					<BackgroundGradient animate={true} className="overflow-hidden rounded-[22px] relative h-auto" containerClassName="">
						<Image 
							layout="responsive"
							sizes="100vw"
							style={{
								objectFit: "cover",
							  }}
							 src={LeonardoGIF} alt="Moving picture of Leonardo DiCaprio" 
						/>
					
						
					</BackgroundGradient>	
					</div>						
				</div>
			</div>
		
		{/* <FlipWords  words={["Happy", "New", "Year", "2025"]} duration={2000} className="text-5xl text-white z-10" /> */}
		
		<ParticleBG />
		</div>
	);
}
