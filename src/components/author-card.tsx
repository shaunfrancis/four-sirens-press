import Image from 'next/image';

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
                    { link ? ( <a href={target}><div className="link-button">See {forename}'s page</div></a> ) : "" }
                </div>
            </div>
        </section>
    )
}