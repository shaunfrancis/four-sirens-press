"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import LogoIcon from '/public/logo-icon.png';

const menuItems = [
    {name: "Home", href: "/"},
    {name: "Authors", href: "/authors"},
    {name: "Books", href: "/books"},
    {name: "Contact Us", href: "/contact"},
];

export default function Header(){
    const pathname = usePathname();
    const [headerState, setHeaderState] = useState(false);
  
    return(
        <header>
            <div id="header-container" className={ headerState ? "open" : "" }>
                <div id="header-logo">
                    <a href="/">
                    <Image src={LogoIcon} alt="Four Sirens Logo" width={50} height={53} priority />
                    </a>
                </div>
                <div id="header-mobile-hamburger" className="header-mobile" onClick={ () => { setHeaderState(true) } }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </div>
                <nav>
                    <ul>
                        {
                            menuItems.map( (data, i) => {
                                return(
                                    <li key={i} className={pathname == data.href ? "selected" : ""}>
                                        <a href={data.href}>{data.name}</a>
                                    </li>
                                )
                            })
                        }
                        <li id="header-mobile-close" className="header-mobile" onClick={ () => { setHeaderState(false) } }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}