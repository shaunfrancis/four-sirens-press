import Image from 'next/image';
import Link from 'next/link';

export default function AuthorCard( 
    { forename, surname, src, link = true, children } : 
    { forename : string, surname : string, src : string, link? : boolean, children : React.ReactNode } 
){
    const target = `/authors/${forename.toLowerCase()}-${surname.toLowerCase()}`;
    return(       
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src={src} width={450} height={270} alt={forename + " " + surname} className="contain" />
                </div>
                <div className="split-section-item">
                    <h2>{forename} {surname}</h2>
                    {children}
                    { link && ( <Link href={target}><div className="link-button">See {forename}'s page</div></Link> ) }
                </div>
            </div>
        </section>
    )
}