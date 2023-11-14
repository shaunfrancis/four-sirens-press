import AuthorCard from '@/components/author-card';
import BookCard from '@/components/book-card';

export default function DeniseSmith(){
    return ( <>
        <AuthorCard forename="Denise" surname="Smith" src="/denise.jpg" link={false}>
            <p>Denise has always been an avid reader and since moving to North Devon has been able to devote time to her writing too. Denise's debut crime novel called <i>Never Forget, Never Forgive</i> was published on 1st October 2021 featuring private investigator Beatrice Styles.</p>
            <a href="https://facebook.com/writer.denise.smith/" target="_blank">
                <div className="link-button">Denise's Facebook</div>
            </a>
        </AuthorCard>
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