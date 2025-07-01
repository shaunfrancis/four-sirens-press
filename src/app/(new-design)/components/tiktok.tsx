'use client';
import { useEffect } from 'react';
export default function TikTok( { username } : { username : string } ){
    
    useEffect( () => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return(
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@sharonfrancis58" data-unique-id="sharonfrancis58" data-embed-from="embed_page" data-embed-type="creator" style={{maxWidth:"780px", marginInline:0}}>
            <section>
                <a target="_blank" href="https://www.tiktok.com/@sharonfrancis58?refer=creator_embed">@sharonfrancis58</a>
            </section>
        </blockquote>
    );
}