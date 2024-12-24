import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'
import { FlipWords } from './ui/flip-words'

export default function Footer() {
    return (
        <div className="relative z-20 py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between px-8 gap-8">
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                    <Link href="/" className="flex flex-row items-center gap-2">
                        <Image
                            className="rounded-full self-center"
                            width={72}
                            height={72}
                            src={`https://dd.dexscreener.com/ds-data/tokens/solana/E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH.png?size=xl&key=2c39fb`}
                            alt="Twenty Twenty Five"
                        />	
                    </Link>  
                    <h3 className="text-start max-w-5xl tracking-tight text-black dark:text-white font-inter-medium text-lg md:leading-snug">
                        New{<FlipWords words={["Year", "Me"]} />}
                    </h3>             
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col gap-4 justify-center md:justify-start">
                        <h3 className="text-center md:text-start max-w-5xl tracking-tight text-black dark:text-white font-inter-medium text-base md:leading-snug">Find us on</h3>
                        <SocialLink />
                    </div>
                </div>
            </div>
        </div>
    )
};
