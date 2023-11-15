import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata : Metadata = {
    title: 'Books | Four Sirens Press'
}

const genres = [
    { title: "Rom-Com", key: "romcom" },
    { title: "Crime", key: "crime" },
    { title: "Historic", key: "historic" }
];

const books = [
    {
        title: "Girl Plans, God Laughs", src: "/girl-plans-god-laughs.png", genres: ["romcom"],
        link: "https://www.amazon.co.uk/Girl-Plans-Laughs-Limbo-Book-ebook/dp/B08D6XJHLN/"
    },
    {
        title: "What Might Have Been", src: "/what-might-have-been.jpg", genres: ["romcom"],
        link: "https://www.amazon.co.uk/What-Might-Have-Been-Limbo-ebook/dp/B09JHVNQ8R/"
    },
    {
        title: "Never Forget, Never Forgive", src: "/never-forget-never-forgive.jpg", genres: ["crime"], 
        link: "https://www.amazon.co.uk/Never-Forget-Forgive-Beatrice-Lincolnshire/dp/1838117369/"
    },
    {
        title: "The Taboo Murders", src: "/the-taboo-murders.jpg", genres: ["crime"],
        link: "https://www.amazon.co.uk/Taboo-Murders-Susan-Hughes-ebook/dp/B09MWMF9RP/"
    },
    {
        title: "Bloodline", src: "/bloodline.jpg", genres: ["crime"],
        link: "https://www.amazon.co.uk/Bloodline-Sharon-Francis/dp/1838117385/"
    },
    {
        title: "A Kiss From France", src: "/a-kiss-from-france.jpg", genres: ["historic"],
        link: "https://www.amazon.co.uk/Kiss-France-Susan-Hughes-ebook/dp/B012W608GU"
    }
]

export default function Books() {
  return (
    <main>
        {
        genres
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map( genre => {
                return (
                    <section key={genre.key} className="padded">
                        <h2>{genre.title}</h2>
                        <div className={styles.carousel}>
                            {
                            books.filter( book => book.genres.indexOf(genre.key) != -1 ).map( book => {
                                return (
                                    <a href={book.link}>
                                        <Image src={book.src} width={300} height={370} alt={book.title + " cover"} />
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
        })
        }
    </main>
  )
}