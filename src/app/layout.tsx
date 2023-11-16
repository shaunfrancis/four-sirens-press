import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import './globals.css'

import Header from '@/components/header';
import Banner from '@/components/banner';

const merriweather = Merriweather({ weight: "400", subsets: ['latin'], variable: '--merriweather' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--open-sans' });

export const metadata: Metadata = {
    title: 'Four Sirens Press',
    icons: {
        icon: [
            { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicons/favicon-16x16.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [ { url: '/favicons/apple-touch-icon.png', sizes: '180x180' } ]
    },
    manifest: '/favicons/site.webmanifest'
}

export default function RootLayout( { children }: { children: React.ReactNode } ){
  return (
    <html lang="en" className={openSans.variable + " " + merriweather.variable}>
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}