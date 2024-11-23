import Header from "@/components/Header";
import React from "react";
import { Barlow, Open_Sans } from 'next/font/google';
import Footer from "@/components/Footer";

const barlow = Barlow({ weight: ['400', '700', '900'], subsets: ['latin'] });
const openSans = Open_Sans({ weight: ['400'], subsets: ['latin'] });

export default function Layout({ children }) {
    return (
        <>
            <Header font={barlow} />
            <main className={`${barlow.className} ${openSans.className}`}>
                {children}
            </main>
            <Footer font={barlow} />
        </>
    )
}