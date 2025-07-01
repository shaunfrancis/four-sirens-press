"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import BidefordHero from 'public/bideford-hero.jpg';

const images : any = {
    '/authors/sharon-francis': { src: '/sharon-hero.png', alt: 'A desk featuring two of Sharon\'s books' },
    '/authors/denise-smith': { src: '/denise-hero.jpg', alt: 'A laptop on a desk displaying Denise\'s book' },
    '/authors/susan-hughes': { src: '/sue-hero.jpg', alt: 'Susan\'s book The Taboo Murders with tagline "Social climbing can be murder"' }
}

export default function Banner(){
    const pathname = usePathname();
    const image = (pathname in images) ? {src : images[pathname].src, alt : images[pathname].alt } : { src: BidefordHero, alt: "Panoramic view of Bideford from East-the-Water" };

    return (
        <div id="banner">
            <Image sizes="(max-width: 700px) 500vw, 200vw" src={image.src} alt={image.alt} fill priority />
        </div>
    )
}