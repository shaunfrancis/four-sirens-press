import Image from 'next/image'
import styles from './page.module.css'

import AuthorCard from '@/components/author-card';

export default function Authors() {
  return (
    <main>
        <AuthorCard forename="Sharon" surname="Francis" src="/sharon.jpg">
            <p>Born and bred in beautiful North Devon, Sharon is married with two grown-up children. She studied Creative Writing with the Open University, completing her BA in 2017. She writes across a range of genres, including her romantic comedy <i>Limbo</i> series titles <i>Girl Plans, God Laughs</i> and <i>What Might Have Been</i>, and her crime <i>Hidden Histories</i> series debut, <i>Bloodline</i>.</p>
        </AuthorCard>

        <AuthorCard forename="Susan" surname="Hughes" src="/sue.jpg">
            <p>Susan Hughes lives in the past and it's criminal. In the first of her forthcoming historical crime series, <i>The Taboo Murders</i>, she introduces Vica Tempest, one of the pioneering women officers in London's police service in the 1930s. Her first novel, <i>A Kiss from France</i>, a tale of intrigue and deception in WW1 London, was long-listed for The Historical Novel Society's Indie Award 2017.</p>
        </AuthorCard>

        <AuthorCard forename="Denise" surname="Smith" src="/denise.jpg">
            <p>Denise has always been an avid reader and since moving to North Devon has been able to devote time to her writing too. Denise's debut crime novel called <i>Never Forget, Never Forgive</i> was published on 1st October 2021 featuring private investigator Beatrice Styles.</p>
        </AuthorCard>

        <AuthorCard forename="Beverley" surname="Carter" src="/beverley.jpg">
            <p>Beverley lives in North Devon with her husband and Border Collie Sam. She is currently working on her first book, <i>In Trust</i>.</p>
        </AuthorCard>
    </main>
  )
}