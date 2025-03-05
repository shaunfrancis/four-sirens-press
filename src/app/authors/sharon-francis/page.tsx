import { Metadata } from 'next';

import AuthorCard from '@/components/author-card';
import BookCard from '@/components/book-card';

export const metadata : Metadata = {
    title: 'Sharon Francis | Four Sirens Press'
}

export default function SharonFrancis(){
    return ( <>
        <AuthorCard forename="Sharon" surname="Francis" src="/sharon.jpg" link={false}>
            <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017. She writes in multiple genres, including her romantic comedy <i>Limbo</i> series, <i>Girl Plans, God Laughs</i>, <i>What Might Have Been</i>, and <i>A Reason To Be</i>, and her <i>Hidden Histories</i> crime series titles, <i>Bloodline</i> and <i>Twisted Roots</i>.</p>
            <a href="https://facebook.com/pages/category/Author/Sharon-Francis-Author-110933057304441/">
                <div className="link-button">Sharon's Facebook</div>
            </a>
            <a href="https://twitter.com/SCFrancisAuthor">
                <div className="link-button">Sharon's Twitter</div>
            </a>
        </AuthorCard>

        <BookCard title="A Reason To Be" src="/a-reason-to-be.jpg">
            <div className="quote">
                <p>When her beloved grandmother Audrey passes away, she leaves Daisy a heartfelt letter that shakes her world and makes her question her purpose in life.</p>
                <p>As she navigates through her grief, and the chaos of her mother Lizzy's reappearance, Daisy learns that love and wisdom transcend generations in unexpected ways, leading her on a journey of self-discovery and romance.</p>
                <p>Through it all, can Daisy find her reason to be?</p>
            </div>
            <p><i>A Reason To Be</i> was released in December 2024 on Amazon, and is available as an ebook or in paperback. This is the third in the <i>Limbo</i> series.</p>
            <a href="https://www.amazon.co.uk/Reason-Limbo-Mrs-Sharon-Francis/dp/B0DP9SFKGK/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>

        <BookCard title="Twisted Roots" src="/twisted-roots.jpg">
            <div className="quote">
                <p>When Emily agrees to handle her late uncle's estate, it seems the perfect escape from her troubled marriage and her father's ill health. But as she delves deeper into her uncle's history, a troubling pattern of broken relationships and mysterious disappearances are revealed.</p>
                <p>Driven to unearth the truth, the shocking revelations she uncovers are more sinister than Emily could ever have imagined.</p>
                <p>What is the truth, and who can she trust?</p>
            </div>
            <p><i>Twisted Roots</i> was released in November 2023 on Amazon, and is available as an ebook or in paperback. This is the second in the <i>Hidden Histories</i> series.</p>
            <a href="https://www.amazon.co.uk/Twisted-Hidden-Histories-Sharon-Francis/dp/B0CN31P4X9/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>

        <BookCard title="Bloodline" src="/bloodline.jpg">
            <div className="quote">
                <p>Tony Viscount is a widower, a father and a restaurateur but has no idea where he came from, so helping his young son, Jamie, complete a family tree could be fun for both of them. But Tony doesn’t expect the tale of terror he uncovers, or that it could have followed him into the present.</p>
                <p>What he discovers will change his life forever.</p>
                <p>Assuming he gets to live it...</p>
            </div>
            <p><i>Bloodline</i> was released in October 2022 on Amazon, and is available as an ebook or in paperback. This is the first in the <i>Hidden Histories</i> series.</p>
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