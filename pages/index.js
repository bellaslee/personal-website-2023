import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/css/Home.module.css'

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <p>Sophomore studying Informatics at the University of Washington striving to make information more intuitive, available, and enjoyable to consume.</p>
        </section>
        <section>
          <h2>I am an artist</h2>
          {/* As you scroll, the description changes, but the h2 stickies at the top. Artist, reader, student, designer. Switch to horizontal scroll for each section with ScrollTrigger */}
          <p>Read more about my interests on my blog.</p>
        </section>
      </main>
    </>
  )
}
