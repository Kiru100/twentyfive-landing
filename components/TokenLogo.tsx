import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TokenLogo() {
    return (
        <div className="container mx-auto flex justify-center flex-col items-center">
            <Link href="/" className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full self-center"
                    width={100}
                    height={100}
                    src={`https://dd.dexscreener.com/ds-data/tokens/solana/E8F3PaD1StLs1HYqWeutGji15DhNTJ6yp2LGWVNNFiuH.png?size=xl&key=2c39fb`}
                    alt="Twenty Twenty Five"
                />	
            </Link>
        </div>
    )
}

export default TokenLogo;