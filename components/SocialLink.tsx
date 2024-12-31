import Link from 'next/link';
import TelegramSVG from './svg/TelegramSVG';
import XSVG from './svg/XSVG';

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
                href="https://t.me/+B7PF7CT940hlY2E0" 
                target="_blank" 
                className="bg-neutral-300 p-2 flex rounded-full  h-12 w-12"
            >	
                <TelegramSVG height="32px" width="32px"/> 
            </Link>					
        </div>
    )
}

export default SocialLink
