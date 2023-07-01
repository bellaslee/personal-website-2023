import Link from "next/link";
import React from "react";

export default function Header({ font }) {
  return (
    <header className={font.className}>
      <Link href="/"><h1>Bella Lee</h1></Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}