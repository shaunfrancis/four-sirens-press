import { Metadata } from 'next';

import AuthorCard from '@/components/author-card';
import BookCard from '@/components/book-card';

export const metadata : Metadata = {
    title: 'Sharon Francis | Four Sirens Press'
}

export default function SharonFrancis(){
    return ( <>
        <AuthorCard forename="Sharon" surname="Francis" src="/sharon.jpg" link={false}>
            <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017. She writes across a range of genres, including her romantic comedy <i>Limbo</i> series titles <i>Girl Plans, God Laughs</i> and <i>What Might Have Been</i>, and her crime <i>Hidden Histories</i> series debut, <i>Bloodline</i>.</p>
            <a href="https://twitter.com/SCFrancisAuthor">
                <div className="link-button">Sharon's Twitter</div>
            </a>
            <a href="https://facebook.com/pages/category/Author/Sharon-Francis-Author-110933057304441/">
                <div className="link-button">Sharon's Facebook</div>
            </a>
        </AuthorCard>
        <BookCard title="Bloodline" src="/bloodline.jpg">
            <div className="quote">
                <p>Tony Viscount is a widower, a father and a restaurateur but has no idea where he came from, so helping his young son, Jamie, complete a family tree could be fun for both of them. But Tony doesn’t expect the tale of terror he uncovers, or that it could have followed him into the present.</p>
                <p>What he discovers will change his life forever.</p>
                <p>Assuming he gets to live it...</p>
            </div>
            <p><i>Bloodline</i> was released in October 2022 on Amazon, and is available as an ebook or in paperback.</p>
            <a href="https://www.amazon.co.uk/Bloodline-Sharon-Francis/dp/1838117385/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>

        <BookCard title="What Might Have Been" src="/what-might-have-been.jpg">
            <div className="quote">
                <p>Life and love can be a rollercoaster, except for Lily Armitage, so far it's been more of a train crash. Perhaps it should be no surprise that she's decided to get off th eride and watch from the sidelines.</p>
                <p>However, if Lily is to finally connect with her soulmate, she has no choice but to face whatever ups and downs life has to throw at her.</p>
                <p>Can divine intervention give her the courage she needs to get back on the ride?</p>
            </div>
            <p><i>What Might Have Been</i> was released on 1st November 2021 on Amazon, and is available as an ebook or in paperback. This is the second in the <i>Limbo</i> series.</p>
            <a href="https://www.amazon.co.uk/What-Might-Have-Been-Limbo-ebook/dp/B09JHVNQ8R/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>

        <BookCard title="Girl Plans, God Laughs" src="/girl-plans-god-laughs.png">
            <div className="quote">
                <p>After a drunken New Year party goes bad, Violet is so desperate to sort out her love life, she makes a deal with God. Or does she?</p>
                <p>A year of good deeds and personal sacrifices later and there should be some pay off, surely? But where's the man of her dreams? She's tired of waiting and will go to any length to get answers, but will it be the answer she's hoping for?</p>
                <p>Sometimes it takes a bolt from the blue to see what's right in front of your nose.</p>
            </div>
            <p><i>Girl Plans, God Laughs</i> was released on 1st October 2020 on Amazon, and is available as an ebook or in paperback. This is the first in the <i>Limbo</i> series.</p>
            <a href="https://www.amazon.co.uk/Girl-Plans-Laughs-Limbo-Book-ebook/dp/B08D6XJHLN/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>
    </> )
}