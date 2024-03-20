import React, { useState } from "react";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import wolfwood from "../../public/img/wolfwood.jpeg";
import angel from "../../public/img/angel.png";
import styles from "@/styles/About.module.scss";

import Meta from "@/components/Meta";

gsap.registerPlugin(ScrollTrigger);

function AboutIntro() {
  const [angelRef, setAngelRef] = useState();
  const [intro, setIntro] = useState();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!angelRef || !intro) return

      gsap.from(intro, {
        duration: 1,
        yPercent: 5,
        opacity: 0,
        filter: "blur(10px)"
      })

      gsap.to(angelRef, {
        scrollTrigger: {
          target: intro,
          scrub: 1,
          start: "-20% top",
          pin: angelRef,
        },
        rotation: 5,
        scale: 2,
        filter: "blur(10px)",
        xPercent: window.innerWidth > 992 ? 100 : 0,
        opacity: 0,
      })
    }, intro)

    return () => ctx.revert();
  }, [angelRef, intro])

  return (
    <section className={styles.intro} ref={setIntro}>
      <Image
        ref={setAngelRef}
        src={angel}
        alt="Angel Devil from Chainsaw Man"
        priority />
      <div className={styles.content}>
        <h1>Hi, I&apos;m Bella!</h1>
        <p>I&apos;m a junior at the University of Washington majoring in Informatics and minoring in Comparative Literature. My dream is to make information more intuitive, accessible, and enjoyable by bridging the gap between people and technology.
          I&apos;m also a freelance illustrator, technical writer, and President of <a href="https://instagram.com/smirk_uw">Smirk UW</a>.</p>
        <p>Everyone has a story to tell. I strive to understand, empathize with, and incorporate people’s diverse voices and experiences as the foundation for a good information experience in every project I work on.</p>

      </div>
    </section>
  )
}

function AboutArt() {
  const [ww, setWw] = useState();
  const [art, setArt] = useState();
  const [artContent, setArtContent] = useState();

  useIsomorphicLayoutEffect(() => {
    if (!ww || !art) return;
    const ctx = gsap.context(() => {
      gsap.to(ww, {
        scrollTrigger: {
          trigger: ww,
          start: "top top",
          end: "bottom bottom",
          pin: art,
          scrub: 0.5,
        },
        xPercent: window.innerWidth > 992 ? 15 : 0,
        y: window.innerWidth > 992 ? -ww.clientHeight * 0.73 : 0,
        scale: window.innerWidth > 1260 ? 1.5 : 2,
        rotate: window.innerWidth > 992 ? 15 : 0,
        filter: window.innerWidth > 992 ? "" : "blur(10px)",
        opacity: window.innerWidth > 992 ? 1 : 0,
      })
      gsap.from(artContent, {
        scrollTrigger: {
          trigger: art,
          start: "top bottom",
          end: window.innerWidth > 992 ? "bottom top" : "bottom 80%",
          scrub: 0.5
        },
        // filter: "blur(10px)",
      })
    }, art)

    return () => ctx.revert();
  }, [ww, art, artContent])

  return (
    <section className={styles.art} ref={setArt}>
      <Image ref={setWw} src={wolfwood} alt="Wolfwood from the anime Trigun Stampede" />
      <div className={styles.content} ref={setArtContent}>
        <p>Beyond academics and work, I enjoy drawing, singing, fingerstyle guitar, hip-hop dance, reading, and diving into new things, like tarot, creative writing, and archaic Chinese. I take pride in my curiosity and eagerness to learn, and I hope to get to know myself, others, and the world better as I progress in my career.</p>

        <p>I gravitate toward themes of love, fate, eternity, and loss in art, and I like to write about these topics, too. Books that I&apos;ve enjoyed recently include <cite>The Door</cite>, <cite>The Count of Monte Cristo</cite>, <cite>Giovanni&apos;s Room</cite>, <cite>Crime and Punishment</cite>, and <cite>The Flowers of Buffoonery</cite>.</p>

        <p>Some fun projects that I&apos;ve worked on in the past include page art and merch for fanzines, selling my own acrylic keychains, and doing a commission for someone&apos;s DND campaign. I also like giving clothes I don&apos;t wear anymore new lives by drawing on them with my own designs.</p>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Meta title="About" />
      <AboutIntro />
      <AboutArt />
    </>
  )
}