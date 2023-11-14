import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import './globals.css'

import Header from '@/components/header';
import Banner from '@/components/banner';

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
        <Banner />
        {children}
      </body>
    </html>
  )
}