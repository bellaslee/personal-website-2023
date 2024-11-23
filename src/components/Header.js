import Link from "next/link";
import React from "react";

export default function Header({ font }) {
    return (
        <header className={font.className}>
            <div className='title'><Link href="/">Bella Lee</Link></div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}