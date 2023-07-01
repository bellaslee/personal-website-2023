import React from "react";
import { Barlow } from 'next/font/google'

const barlow = Barlow({ weight: ['400', '700', '900'], subsets: ['latin'] })

export default function Header() {
  return (
    <header className={barlow.className}>
      <h1>Bella Lee</h1>
    </header>
  )
}