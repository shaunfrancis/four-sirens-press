import { Metadata } from 'next';
import TikTok from '../components/tiktok';
import Facebook from '../components/facebook';
import Script from 'next/script';

export const metadata : Metadata = {
    title: 'Sharon Francis | Four Sirens Press'
}

export default function SharonFrancis() {
  return (
    <section>
        <section className="heading-row">
            <h1>Sharon Francis</h1>
            <div className="social-icons">
                <a href="https://www.facebook.com/people/Sharon-Francis-Author/100063865373074" target="_blank"><img src="facebook-primary.png" alt="Sharon Francis on Facebook"/></a>
                <a href="https://tiktok.com/@sharonfrancis58" target="_blank"><img src="tiktok-primary.png" alt="Sharon Francis on TikTok"/></a>
            </div>
        </section>
        <div className="sidebar-layout">
            <aside>
                <img className="headshot" src="/sharon.jpg" alt="A photograph of Sharon Francis" />
                <div className="sticky">
                    <nav id="sticky-nav">
                        <ol>
                            <li><a href="#about-sharon">About Sharon</a></li>
                            <li>
                                <a href="#hidden-histories">Hidden Histories series</a>
                                <ol>
                                    <li><a href="#bloodline">Bloodline</a></li>
                                    <li><a href="#twisted-roots">Twisted Roots</a></li>
                                </ol>
                            </li>
                            <li>
                                <a href="#limbo">Limbo series</a>
                                <ol>
                                    <li><a href="#girl-plans-god-laughs">Girl Plans, God Laughs</a></li>
                                    <li><a href="#what-might-have-been">What Might Have Been</a></li>
                                    <li><a href="#a-reason-to-be">A Reason To Be</a></li>
                                </ol>
                            </li>
                            <li><a href="#follow-sharon">Follow Sharon</a></li>
                        </ol>
                    </nav>
                </div>
            </aside>
            <main>
                <article id="about-sharon">
                    <h2>About Sharon</h2>
                    <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017. She writes in multiple genres, including her romantic comedy <em>Limbo</em> series, <em>Girl Plans, God Laughs</em>, <em>What Might Have Been</em>, and <em>A Reason To Be</em>, and her <em>Hidden Histories</em> crime series titles, <em>Bloodline</em> and <em>Twisted Roots</em>.</p>
                </article>

                <article id="hidden-histories">
                    <h2><em>Hidden Histories</em> series</h2>
                    <p>Copy all about the <em>Hidden Histories</em> series will be here. Born and bred in North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, and completed her BA in 2017.</p>
                    <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017.</p>
                </article>

                <section id="bloodline" className="book-focus-container">
                    <div className="book-backdrop-container dark">
                        <img src="bloodline-backdrop.jpg" />
                    </div>
                    
                    <div className="book-focus-content">
                        <div>
                            <h3><em>Bloodline</em></h3>

                            <blockquote>
                                <p>Tony Viscount is a widower, a father and a restaurateur but has no idea where he came from, so helping his young son, Jamie, complete a family tree could be fun for both of them. But Tony doesn’t expect the tale of terror he uncovers, or that it could have followed him into the present.</p>
                                <p>What he discovers will change his life forever.</p>
                                <p>Assuming he gets to live it...</p>
                            </blockquote>

                            <p><em>Bloodline</em> was released in October 2022 on Amazon, and is available as an ebook or in paperback. This is the first in the <em>Hidden Histories</em> series.</p>
                            
                            <a className="buy-link" href="https://www.amazon.co.uk/Bloodline-Sharon-Francis/dp/1838117385/" target="_blank">
                                <img alt="" src="amazon-secondary.png" width="100" />
                                <span>Buy on Amazon</span>
                            </a>
                        </div>

                        <img src="bloodline.jpg" alt="A dark family history. A desperate killer. One choice. Bloodline, by Sharon Francis." />
                    </div>
                </section>

                <section id="twisted-roots" className="book-focus-container">
                    <div className="book-backdrop-container dark">
                        <img src="twisted-roots-backdrop.jpg" />
                    </div>
                    <div className="book-focus-content">
                        
                        <img src="twisted-roots.jpg" alt="A family legacy. Mysterious disappearances. A deadly secret. Twisted Roots, by Sharon Francis." />

                        <div>
                            <h3><em>Twisted Roots</em></h3>

                            <blockquote>
                                <p>When Emily agrees to handle her late uncle's estate, it seems the perfect escape from her troubled marriage and her father's ill health. But as she delves deeper into her uncle's history, a troubling pattern of broken relationships and mysterious disappearances are revealed.</p>
                                <p>Driven to unearth the truth, the shocking revelations she uncovers are more sinister than Emily could ever have imagined.</p>
                                <p>What is the truth, and who can she trust?</p>
                            </blockquote>

                            <p><em>Twisted Roots</em> was released in November 2023 on Amazon, and is available as an ebook or in paperback. This is the second in the <em>Hidden Histories</em> series.</p>

                            <a className="buy-link" href="https://www.amazon.co.uk/Twisted-Hidden-Histories-Sharon-Francis/dp/B0CN31P4X9/" target="_blank">
                                <img alt="" src="amazon-secondary.png" width="100" />
                                <span>Buy on Amazon</span>
                            </a>
                        </div>
                    </div>
                </section>

                <article id="limbo">
                    <h2><em>Limbo</em> series</h2>
                    <p>Copy all about the <em>Limbo</em> series will be here. Born and bred in North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, and completed her BA in 2017.</p>
                    <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017. She writes in multiple genres, including her romantic comedy <em>Limbo</em> series, <em>Girl Plans, God Laughs</em>, <em>What Might Have Been</em>, and <em>A Reason To Be</em>, and her <em>Hidden Histories</em> crime series titles, <em>Bloodline</em> and <em>Twisted Roots</em>.</p>
                </article>

                <section id="girl-plans-god-laughs" className="book-focus-container">
                    <div className="book-backdrop-container light">
                        <img src="girl-plans-god-laughs-backdrop.png" />
                    </div>
                    <div className="book-focus-content">
                        <div>
                            <h3><em>Girl Plans, God Laughs</em></h3>

                            <blockquote>
                                <p>After a drunken New Year party goes bad, Violet is so desperate to sort out her love life, she makes a deal with God. Or does she?</p>
                                <p>A year of good deeds and personal sacrifices later and there should be some pay off, surely? But where's the man of her dreams? She's tired of waiting and will go to any length to get answers, but will it be the answer she's hoping for?</p>
                                <p>Sometimes it takes a bolt from the blue to see what's right in front of your nose.</p>
                            </blockquote>

                            <p><em>Girl Plans, God Laughs</em> was released on 1st October 2020 on Amazon, and is available as an ebook or in paperback. This is the first in the <em>Limbo</em> series.</p>

                            <a className="buy-link" href="https://www.amazon.co.uk/Girl-Plans-Laughs-Limbo-Book-ebook/dp/B08D6XJHLN/" target="_blank">
                                <img alt="" src="amazon-secondary.png" width="100" />
                                <span>Buy on Amazon</span>
                            </a>
                        </div>
                        <img src="girl-plans-god-laughs.png" alt="Girl Plans, God Laughs, by Sharon Francis." />
                    </div>
                </section>

                <section id="what-might-have-been" className="book-focus-container">
                    <div className="book-backdrop-container light">
                        <img src="what-might-have-been-backdrop.png" />
                    </div>
                    <div className="book-focus-content">
                        <img src="what-might-have-been.jpg" alt="What Might Have Been, by Sharon Francis." />
                        <div>
                            <h3><em>What Might Have Been</em></h3>

                            <blockquote>
                                <p>Life and love can be a rollercoaster, except for Lily Armitage, so far it's been more of a train crash. Perhaps it should be no surprise that she's decided to get off the ride and watch from the sidelines.</p>
                                <p>However, if Lily is to finally connect with her soulmate, she has no choice but to face whatever ups and downs life has to throw at her.</p>
                                <p>Can divine intervention give her the courage she needs to get back on the ride?</p>
                            </blockquote>

                            <p><em>What Might Have Been</em> was released on 1st November 2021 on Amazon, and is available as an ebook or in paperback. This is the second in the <em>Limbo</em> series.</p>

                            <a className="buy-link" href="https://www.amazon.co.uk/What-Might-Have-Been-Limbo-ebook/dp/B09JHVNQ8R/" target="_blank">
                                <img alt="" src="amazon-secondary.png" width="100" />
                                <span>Buy on Amazon</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="a-reason-to-be" className="book-focus-container">
                    <div className="book-backdrop-container light">
                        <img src="a-reason-to-be-backdrop.png" />
                    </div>
                    <div className="book-focus-content">
                        <div>
                            <h3><em>A Reason To Be</em></h3>

                            <blockquote>
                                <p>When her beloved grandmother Audrey passes away, she leaves Daisy a heartfelt letter that shakes her world and makes her question her purpose in life.</p>
                                <p>As she navigates through her grief, and the chaos of her mother Lizzy's reappearance, Daisy learns that love and wisdom transcend generations in unexpected ways, leading her on a journey of self-discovery and romance.</p>
                                <p>Through it all, can Daisy find her reason to be?</p>
                            </blockquote>

                            <p><em>A Reason To Be</em> was released in December 2024 on Amazon, and is available as an ebook or in paperback. This is the third in the <em>Limbo</em> series.</p>

                            <a className="buy-link" href="https://www.amazon.co.uk/Reason-Limbo-Mrs-Sharon-Francis/dp/B0DP9SFKGK/" target="_blank">
                                <img alt="" src="amazon-secondary.png" width="100" />
                                <span>Buy on Amazon</span>
                            </a>
                        </div>
                        <img src="a-reason-to-be.jpg" alt="A Reason To Be by Sharon Francis." />
                    </div>
                </section>

                <article id="follow-sharon">
                    <h2 id="follow-sharon">Follow Sharon</h2>
                    <TikTok username="sharonfrancis58" />
                    {/* <Facebook id="100063865373074" /> */}
                </article>
            </main>
       </div>
       <Script src="scripts/sticky-nav.js" />
    </section>
  )
}