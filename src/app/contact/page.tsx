import { Metadata } from 'next';

import ContactCard from '@/components/contact-card';

export const metadata : Metadata = {
    title: 'Contact Us | Four Sirens Press'
}

export default function Contact(){
    return (
        <main>
            <ContactCard />
        </main>
    )
}