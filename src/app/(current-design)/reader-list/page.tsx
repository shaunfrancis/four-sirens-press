import { Metadata } from 'next';

import SubscribeForm from '@/app/(current-design)/components/subscribe-form';

export const metadata : Metadata = {
    title: 'Reader List | Four Sirens Press'
}

export default function ReaderList() {
  return (
    <main>
        <SubscribeForm />
    </main>
  )
}