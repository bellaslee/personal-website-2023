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
        <p>I&apos;m a freelance illustrator, Informatics student, web developer, and President of <a href="https://instagram.com/smirk_uw">Smirk UW</a>. I love fingerstyle guitar, singing, and reading!</p>
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
        <p>Outside of school, you can find me holed up at home reading and drawing, or vending at a local makers fair. So far, I&apos;ve vended at two UW Makers&apos; Fairs and one Husky Expo. I hope to vend at a bigger convention some time in the near future!</p>

        <p>When the inspiration hits me, I run an art Instagram account. Currently, my biggest inspirations are <cite>Trigun</cite>, <cite>Spiderman: Across the Spider-Verse</cite>, and <cite>Jojo&apos;s Bizarre Adventure</cite>! I&apos;ll absolutely fall in love with anything that has a good soundtrack and fluid animation. I especially enjoy themes of love, fate, eternity, and loss in art.</p>

        <p>Some fun projects that I&apos;ve worked on in the past include page art and merch for fanzines, selling my own acrylic keychains, and doing a commission for someone&apos;s DND campaign. I also like giving shirts I don&apos;t wear anymore new lives by drawing on them with my own designs.</p>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Meta title="About | Bella Lee" />
      <AboutIntro />
      <AboutArt />
    </>
  )
}