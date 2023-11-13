import type { Metadata } from 'next'
import Image from 'next/image'
import { Merriweather, Open_Sans } from 'next/font/google'
import './globals.css'

import Header from '@/components/header';

const merriweather = Merriweather({ weight: "400", subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--open-sans' });

export const metadata: Metadata = {
  title: 'Four Sirens Press'
}

export default function RootLayout( { children }: { children: React.ReactNode } ){
  return (
    <html lang="en" className={openSans.variable}>
      <body className={merriweather.className}>
        <Header />
        <div id="banner">
          <Image src="/bideford-hero.jpg" alt="Panoramic view of Bideford from East-the-Water" fill priority />
        </div>
        {children}
      </body>
    </html>
  )
}
