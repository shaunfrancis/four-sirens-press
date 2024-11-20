import { Metadata } from 'next';

import AuthorCard from '@/components/author-card';
import BookCard from '@/components/book-card';

export const metadata : Metadata = {
    title: 'Denise Smith | Four Sirens Press'
}

export default function DeniseSmith(){
    return ( <>
        <AuthorCard forename="Denise" surname="Smith" src="/denise.jpg" link={false}>
            <p>Denise has always been an avid reader and since moving to North Devon has been able to devote time to her writing too. Denise's debut crime novel called <i>Never Forget, Never Forgive</i> was published on 1st October 2021 featuring private investigator Beatrice Styles.</p>
            <a href="https://facebook.com/writer.denise.smith/" target="_blank">
                <div className="link-button">Denise's Facebook</div>
            </a>
        </AuthorCard>
        <BookCard title="Never Let Her Go" src="/never-let-her-go.jpg">
            <div className="quote">
                <p>Private Investigator Beatrice Styles is hot on the trail of a ruthless arsonist targeting a local brewery, but the stakes skyrocket when a charred body is discovered in the ruins of a pub. Who was the victim, and how did they meet such a violent end?</p>
                <p>While the police are quick to pin the crime on a suspect, Beatrice senses something far more sinister at play. Determined to uncover the truth, she delves deeper into a tangled web of lies, secrets, and danger. As threats close in, Beatrice must decide: risk it all for justice, or walk away before she becomes the next target.</p>
            </div>
            <p><i>Never Let Her Go</i> was released in September 2024 on Amazon, and is available as an ebook or in paperback.</p>
            <a href="https://www.amazon.co.uk/Never-Let-Lincolnshire-Mystery-Book/dp/B0DJ56ZN8H/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>
        <BookCard title="Never Forget, Never Forgive" src="/never-forget-never-forgive.jpg">
            <div className="quote">
                <p>The death of her father and disappearance of her mother spurs Beatrice Styles into relocation and a change of career. However, her new venture in Lincoln, as a private investigator, takes an unexpected turn when she finds her first client dead.</p>
                <p>The police think he died of natural causes, but his widow is not convinced. Beatrice digs into the life of the dead man, only to discover several people with reasons to want him dead, but were any of them desperate enough to do the deed?</p>
            </div>
            <p><i>Never Forget, Never Forgive</i> was released on 1st October 2021 on Amazon, and is available as an ebook or in paperback.</p>
            <a href="https://www.amazon.co.uk/Never-Forget-Forgive-Beatrice-Lincolnshire/dp/1838117369/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>
    </> )
}