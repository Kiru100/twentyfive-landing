import LeonardoGIF from "@/public/leonardo.webp";
import Image from 'next/image';
import { LuClipboardCopy } from 'react-icons/lu';
import SocialLink from './SocialLink';
import BackgroundGradient from './ui/background-gradient';

function Hero() {
    const copyToClipboard = () => {
		navigator.clipboard.writeText("E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH");
	};

    return (
        <div className="container mx-auto flex-1 justify-center content-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 relative text-left text-zinc-100 max-w-4xl font-roboto-bold">$2025</h1>
                    <p className="relative text-base sm:text-xl text-zinc-300 text-left max-w-2xl antialiased leading-loose font-inter-medium mb-6">
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
                    <SocialLink />
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
