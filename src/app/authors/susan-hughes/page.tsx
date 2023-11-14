import AuthorCard from '@/components/author-card';
import BookCard from '@/components/book-card';

export default function SusanHughes(){
    return ( <>
        <AuthorCard forename="Susan" surname="Hughes" src="/sue.jpg" link={false}>
            <p>Susan Hughes lives in the past and it's criminal. In the first of her forthcoming historical crime series, <i>The Taboo Murders</i>, she introduces Vica Tempest, one of the pioneering women officers in London's police service in the 1930s. Her first novel, <i>A Kiss from France</i>, a tale of intrigue and deception in WW1 London, was long-listed for The Historical Novel Society's Indie Award 2017.</p>
            <a href="https://www.facebook.com/suzehugheswriter" target="_blank">
                <div className="link-button">Susan's Facebook</div>
            </a>
        </AuthorCard>
        <BookCard title="The Taboo Murders" src="/the-taboo-murders.jpg">
            <div className="quote">
                <p>Coronation Night, 1937</p>
                <p>The coat check girl at the shady Taboo Club in London's West End is found dead with a belt around her neck. It looks like The Soho Strangler has clamed a fourth victim.</p>
                <p>However, the violent death of another woman forces the police to recognise yet another killer is at work. One who is using The Taboo Club to select victims.</p>
                <p>Ambitious police recruit, Vica Tempest, is out to make a name for herself. She agrees to undertake the dangerous role of decoy inside the club. Her job: to identify the perpetrator before they kill again.</p>
                <p>If she fails, she could pay with her life.</p>
            </div>
            <a href="https://www.amazon.co.uk/Taboo-Murders-Susan-Hughes-ebook/dp/B09MWMF9RP/" target="_blank">
                <div className="link-button">Buy on Amazon</div>
            </a>
        </BookCard>

        <BookCard title="A Kiss From France" src="/a-kiss-from-france.jpg">
            <div className="quote">
                <p>Munitions worker, Lizzie Fenwick, puts a note to an anonymous soldier in a box of ammunition shells destined for the Western Front in 1917. The reply ignites a love affair with Private Harry Slater. But in the fog of war, nothing is what it seems.</p>
            </div>
            <a href="https://www.amazon.co.uk/Kiss-France-Susan-Hughes-ebook/dp/B012W608GU" target="_blank">
                <div className="link-button">Amazon</div>
            </a>
            <a href="https://books.apple.com/us/book/id1112159275" target="_blank">
                <div className="link-button">Apple Books</div>
            </a>
            <a href="https://www.barnesandnoble.com/w/a-kiss-from-france-susan-hughes/1122244022" target="_blank">
                <div className="link-button">Barnes &amp; Noble</div>
            </a>
            <a href="https://www.kobo.com/gb/en/ebook/a-kiss-from-france" target="_blank">
                <div className="link-button">Kobo</div>
            </a>
        </BookCard>
    </> )
}