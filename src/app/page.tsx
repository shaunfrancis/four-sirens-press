import Image from 'next/image'
import styles from './page.module.css'

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
        
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/mail.jpg" alt="The Four Sirens Press newsletter being read on a tablet device" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Join Our Reader List</h2>
                    <p>Thank you for your interest in Four Sirens Press. We send out a newsletter every month containing all the latest news, cover reveals and behind-the-scenes peeks. Tell us the genres you're interested in, and we'll also send you any extra news we think is right for you.</p>
                    <form id="subscribe-form" action="https://foursirenspress.us17.list-manage.com/subscribe/post" method="POST">
                        <input type="hidden" name="u" value="ff32ef21c73b8b7b916bf228e" />
                        <input type="hidden" name="id" value="ad64729692" />
                        <input type="email" name="MERGE0" placeholder="Email address" />
                        <input type="text" name="MERGE1" placeholder="Name" />
                        <div className="checkbox-containers" data-input="genres-input">
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="romcom"></div>
                                <div className="checkbox-label">Rom-Com</div>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="crime"></div>
                                <div className="checkbox-label">Crime</div>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="historical"></div>
                                <div className="checkbox-label">Historical</div>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="thriller"></div>
                                <div className="checkbox-label">Thriller</div>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="dystopia"></div>
                                <div className="checkbox-label">Dystopia</div>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox" data-value="womensfiction"></div>
                                <div className="checkbox-label">Women's Fiction</div>
                            </div>
                        </div>
                        <input type="hidden" id="genres-input" name="MERGE3"/>
                        <div className="link-button">Join Now</div>
                    </form>
                </div>
            </div>
        </section>

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
