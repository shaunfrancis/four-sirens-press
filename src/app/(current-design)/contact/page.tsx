import { Metadata } from 'next';

import ContactCard from '@/app/(current-design)/components/contact-card';

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