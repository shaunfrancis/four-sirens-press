"use client";

import Script from 'next/script';
import { useEffect } from 'react';

declare const window: {
    FB: any
} & Window;

export default function ContactCard(){
    useEffect( () => {
        ("FB" in window) && window.FB.XFBML.parse();
    }, []);
    
    return (
        <section className="padded">
            <div id="fb-root"></div>
            <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0" nonce="Vfjibom6"></Script>
            <h2>Connect With Us</h2>
            <div className="split-section fixed-height">
                <div className="split-section-item fixed-width">
                <div className="fb-page" data-href="https://www.facebook.com/foursirenspress/" data-tabs="timeline" data-width="450" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/foursirenspress/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/foursirenspress/">Four Sirens Press</a></blockquote></div>
                </div>
            </div>
        </section>
    )
}