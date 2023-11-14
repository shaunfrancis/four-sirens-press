import Image from 'next/image';
import styles from './page.module.css';

import SubscribeForm from '@/components/subscribe-form';

export default function Home() {
  return (
    <main>
        <div id="main-logo">
        	<Image src="/logo-wide.svg" alt="Four Sirens Press" width={500} height={133} priority />
        </div>

        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/the-sirens.jpg" alt="The Four Sirens: Sharon, Susan, Denise and Beverley" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Who We Are</h2>
                    <p>Welcome to Four Sirens Press. We are a new group of writers who have come together to support each other's writing while eating cake and drinking coffee (and occasionally wine). We are based around North Devon, but our imaginations know no bounds.</p>
                </div>
            </div>
        </section>

        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/signposts.png" alt="A signpost by the sea, pointing to Crime & Thriller, Rom-Com and Dystopia" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Our Ethos</h2>
                    <p>To produce books our readers will love, whether that be crime and thrillers, rom-com, or dystopian fiction. We want to have artistic freedom, while maintaining creative control, working collaboratively with professional editors and designers.</p>
                </div>
            </div>
        </section>
        
        <SubscribeForm />

        <section>
            <h2>Connect With Us</h2>
            <div className="split-section fixed-height">
                <div className="split-section-item fixed-width">
                    <div className="fb-page" data-href="https://www.facebook.com/foursirenspress" data-tabs="timeline" data-width="450" data-height="600" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/foursirenspress" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/foursirenspress">Four Sirens Press</a></blockquote></div>
                </div>
            </div>
        </section>

    </main>
  )
}
