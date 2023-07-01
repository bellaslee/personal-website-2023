import Header from "@/components/Header";
import React from "react";
import { Barlow } from 'next/font/google';
import Footer from "@/components/Footer";

const barlow = Barlow({ weight: ['400', '700', '900'], subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Header font={barlow} />
      <main className={barlow.className}>
        {children}
      </main>
      <Footer font={barlow} />
    </>
  )
}