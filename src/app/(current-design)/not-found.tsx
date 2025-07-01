import Image from 'next/image';

export default function NotFound(){
    return (
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/signposts.png" alt="A signpost by the sea, pointing to Crime & Thriller, Rom-Com and Dystopia" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Page Not Found</h2>
                    <p>Sorry, the page you are looking for could not be found. It could be that you mistyped a link, or the content has moved.</p>
                </div>
            </div>
        </section>
    )
}