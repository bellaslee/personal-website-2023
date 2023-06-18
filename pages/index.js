import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/css/Home.module.css'
import { gsap } from 'gsap';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <p>Sophomore studying Informatics at the University of Washington striving to make information more intuitive, available, and enjoyable to consume.</p>
      </section>
      <section className={styles.intro}>
        <h1>I am an artist</h1>
        {/* As you scroll, the description changes, but the h2 stickies at the top. Artist, reader, student, designer. Switch to horizontal scroll for each section with ScrollTrigger */}
      </section>
      <section className="footer">
        &copy; Bella Lee 2023.
      </section>
    </main>
  )
}
