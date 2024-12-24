import Link from 'next/link';
import React from 'react';
import { LuClipboardCopy } from 'react-icons/lu';
import TelegramSVG from './svg/TelegramSVG';
import Image from 'next/image';
import BackgroundGradient from './ui/background-gradient';
import LeonardoGIF from "@/public/leonardo.webp";
import XSVG from './svg/XSVG';
import PhotonImage from "@/public/Photon.jpg";

function Hero() {
    const copyToClipboard = () => {
		navigator.clipboard.writeText("E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH");
	};

    return (
        <div className="container mx-auto flex-1 justify-center content-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 relative text-left text-zinc-100 max-w-4xl font-roboto-bold">$2025</h1>
                    <p className="relative text-sm sm:text-xl text-zinc-300 tracking-wide text-left max-w-2xl antialiased leading-loose font-inter-medium mb-6">
                        Celebrate, meme, and moon your way into 2025 with New Years token.  
                        A coin built for laughs, gains, and an all-year party vibe. 🎉✨
                    </p>
                    <div className="flex flex-row gap-2 rounded-[8px] bg-slate-700 self-start overflow-hidden font-inter-normal items-center text-wrap mb-6">
                        <p className="text-zinc-300 w-full break-all p-2 text-sm">CA: E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH</p>
                        <button 
                            className="bg-slate-800 h-full p-2 hover:text-zinc-100 hover:bg-slate-900 transition-all duration-300 ease-in-out active:bg-slate-950"
                            onClick={copyToClipboard}
                        >
                            <LuClipboardCopy size="24" className="text-zinc-300" />
                        </button>
                    </div>
                    <div className="flex flex-row gap-x-4 justify-center sm:justify-start">
                        <Link
                            href="https://x.com/2025_newyears" 
                            target="_blank" 
                            className="bg-neutral-300 p-2 flex rounded-full h-12 w-12 items-center justify-center"
                        >
                            <XSVG height="28px" width="28px"/> 
                        </Link>
                        <Link 
                            href="https://t.me/newyearsssd" 
                            target="_blank" 
                            className="bg-neutral-300 p-2 flex rounded-full  h-12 w-12"
                        >	
                            <TelegramSVG height="32px" width="32px"/> 
                        </Link>
                        <Link 
                            href="https://www.dextools.io/token/2025newyears?t=1735043028113" 
                            target="_blank" 
                            className="bg-neutral-300 p-2 flex rounded-full  h-12 w-12"
                        >	
                            <Image src={"https://www.dextools.io/app/assets/img/logo/dext-large-preview.png"} alt="Dex Tools Logo"  width={32} height={32}/> 
                        </Link>
                        <Link 
                            href="https://photon-sol.tinyastro.io/en/lp/2bb8AHNhNnzGYq7XAZ9weSAcQShEKYEoJZqBCW5SmTLz" 
                            target="_blank" 
                            className="bg-neutral-950 p-2 flex rounded-full  h-12 w-12 border"
                        >	
                            <Image src={PhotonImage} alt="Photon Logo"  width={40} height={40}/> 
                        </Link>
                        <Link 
                            href="https://www.dextools.io/token/2025newyears?t=1735043028113" 
                            target="_blank" 
                            className="bg-neutral-950 p-2 flex rounded-full  h-12 w-12 border border-neutral-300">	
                            <Image src={"https://dexscreener.com/favicon.png"} alt="Dex Tools Logo"  width={30} height={30}/> 
                        </Link>						
                    </div>
                </div>	
                <div>							 
                    <BackgroundGradient 
                        animate={true} 
                        className="overflow-hidden rounded-[22px] relative h-full" 
                        containerClassName="h-full"
                    >
                        <Image 					
                            className="h-full w-full object-cover"
                            src={LeonardoGIF} alt="Moving picture of Leonardo DiCaprio" 
                        />										
                    </BackgroundGradient>	
                </div>						
            </div>
        </div>	
    )
}

export default Hero
