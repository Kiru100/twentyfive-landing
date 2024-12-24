import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';

function TokeDetails() {
    const testimonials = [
        {
            quote: "Built on the lightning-fast Solana network, our token is ready to sprint into the New Year—no traffic jams, just smooth transactions to match your 2025 goals!",
            name: "Token Network",
            src: "https://cdn.discordapp.com/attachments/1321143163074646016/1321157173031600148/Learn-More-About-SOL_Coins-Academy.png?ex=676c36ff&is=676ae57f&hm=c018e617e88333546ff9d4c2c8b3e013e6dc2ffec51cd5b3d9cd49269e32ea4f&",
        },
        {
            quote:
                "54.23K liquidity burned (100%), reducing supply and enhancing the token's stability and value.",
            name: "Liquidity Pool",
            src: "https://cdn.discordapp.com/attachments/1321143163074646016/1321143213343637597/What-are-Liquidity-Pools-800x533.png?ex=676c29ff&is=676ad87f&hm=9a1bdcb4a7531a4ac081ec44144ca2c3db6908a5be863eb2e8de6bbb09cbf8f4&",
        },
        {
            quote:
                "Circulating and total supply both stand at 999.77M—no hidden stashes, just all the coins out there ready to make their move.",
            name: "Total Market Supply",
            src: "https://cdn.discordapp.com/attachments/1321143163074646016/1321156136015102092/Screenshot_2024-12-25_004235.png?ex=676c3608&is=676ae488&hm=28ed64730c6349ce2ae4b2ecd7f1f7d60aefdcab13ad5fcddf60822c8e7cf461&",
        },
        {
            quote: "Pool created on 12/10/2024 at 00:11—a perfect start for a token that's ready to make waves!",
            name: "Pool Creation",
            src: "https://cdn.discordapp.com/attachments/1321143163074646016/1321158048521388094/depositphotos_12456636-stock-illustration-calendar.jpg?ex=676c37d0&is=676ae650&hm=80a6a663ba0978b2280db06a27eb30e546bb651d73dc04e3e5247f40798a829d&",
        },
      ];

    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Token Details
            </h4>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    )
}

export default TokeDetails;