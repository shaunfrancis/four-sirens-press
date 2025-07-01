import Image from 'next/image';

export default function BookCard(
    { title, src, children }:
    { title : string, src : string, children : React.ReactNode }
){
    return (
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src={src} width={450} height={540} alt={title + " cover"} className="contain" />
                </div>
                <div className="split-section-item">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    )
}