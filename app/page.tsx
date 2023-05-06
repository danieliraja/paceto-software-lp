'use client'
import { Inter } from 'next/font/google';
import Main from '@/components/Main';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <Features />

      <Contact />
      <Footer />
    </>
  )
}
