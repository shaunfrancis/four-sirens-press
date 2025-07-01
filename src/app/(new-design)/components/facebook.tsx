'use client';
import { useEffect } from 'react';
export default function Facebook( { id } : { id : string } ){
    return( <>
        <iframe src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent("https://facebook.com/" + id)}&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} width="500" height="800" style={{border: "none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </> );
}