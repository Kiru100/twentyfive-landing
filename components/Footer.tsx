import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'
import { FlipWords } from './ui/flip-words'

export default function Footer() {
    return (
        <div className="relative z-20 py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="flex-row flex items-center gap-4">
                    <Link href="/" className="flex flex-row items-center gap-2">
                        <Image
                            className="rounded-full self-center"
                            width={64}
                            height={64}
                            src={`https://dd.dexscreener.com/ds-data/tokens/solana/E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH.png?size=xl&key=2c39fb`}
                            alt="Twenty Twenty Five"
                        />	
                    </Link>     
                    <h3 className="text-slate-300 font-inter-medium text-xl">
                        New{<FlipWords words={["Year", "Me"]} />}
                    </h3>         
                </div>
                <div className="justify-end flex">
                    <SocialLink />
                </div>
            </div>
        </div>
    )
}
