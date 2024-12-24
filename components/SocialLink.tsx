import Link from 'next/link';
import React from 'react';
import XSVG from './svg/XSVG';
import TelegramSVG from './svg/TelegramSVG';
import Image from 'next/image';
import PhotonImage from "@/public/Photon.jpg";

function SocialLink() {
    return (
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
                className="bg-[#0E111A] p-2 flex rounded-full  h-12 w-12 border"
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
    )
}

export default SocialLink
