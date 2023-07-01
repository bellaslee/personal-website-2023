import Head from 'next/head'
import Image from 'next/image'
import { Barlow } from 'next/font/google'
import { gsap } from 'gsap'
import LoadingScreen from '@/components/LoadingScreen'
import { useRef, useState, useEffect } from 'react'
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';
import Header from '@/components/Header'

const barlow = Barlow({ weight: ['400', '700', '900'], subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log('page loaded');
      setLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  const comp = useRef();
  // const didAnimate = useRef(false);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero', {
        duration: 1,
        opacity: 0
      })
    }, comp)

    return ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Bella Lee</title>
        <meta name="description" content="Bella Lee's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingScreen done={!loading} />
      <Header />
      <main className={barlow.className} ref={comp}>
        <section className="hero">Hero</section>
        <section className="about">
          00. About
          01. artist
          02. book lover
          03. tarot enthusiast
        </section>
        <section className="projects">Projects</section>
      </main>
      <footer className={barlow.className}>
        <ul>
          <li>email</li>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Goodreads</li>
        </ul>
        &copy; Bella Lee 2023
      </footer>
    </>
  )
}
