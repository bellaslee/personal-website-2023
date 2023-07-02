import React, { useRef, useState } from "react";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import wolfwood from "../../public/img/wolfwood.jpeg";
import angel from "../../public/img/angel.png";
import styles from "@/styles/About.module.scss";

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
      {/* <div className={styles.imgWrapper}> */}
      <Image
        ref={setAngelRef}
        src={angel}
        alt="Angel Devil from Chainsaw Man"
        priority />
      {/* </div> */}
      <div className={styles.content}>
        <h1>Hi, I&apos;m Bella!</h1>
        <p>I&apos;m a freelance illustrator, Informatics student, web developer, and Preisdent of <a href="https://instagram.com/smirk_uw">Smirk UW</a>. I love fingerstyle guitar, singing, and reading (the social media platform that I&apos;m most active on
          is actually <a href="https://www.goodreads.com/bellalee_" target="_blank" rel="noreferrer">Goodreads</a>!</p>
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
          markers: true,
        },
        xPercent: window.innerWidth > 992 ? 15 : 0,
        y: window.innerWidth > 992 ? -ww.clientHeight * 0.73 : 0,
        scale: window.innerWidth > 1260 ? 1.5 : 2,
        rotate: window.innerWidth > 992 ? 40 : 0,
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
        filter: "blur(10px)",
      })
    }, art)

    return () => ctx.revert();
  }, [ww, art, artContent])

  return (
    <section className={styles.art} ref={setArt}>
      <Image ref={setWw} src={wolfwood} alt="Wolfwood from the anime Trigun Stampede" />
      <div className={styles.content} ref={setArtContent}>
        <p>Outside of school, you can find me holed up at home reading and drawing, or vending at a local makers fair. So far, I&apos;ve vended at two UW Makers&apos; Fairs and one Husky Expo. I hope to vend at a bigger convention some time in the near future!</p>

        <p>When the inspiration hits me, I run an art Instagram account <a href="https://instagram.com/peachyxin">@peachyxin</a>. Currently, my biggest inspirations are <cite>Trigun</cite>, <cite>Spiderman: Across the Spider-Verse</cite>, and <cite>Jojo&apos;s Bizarre Adventure</cite>! I&apos;ll absolutely fall in love with anything that has a good soundtrack and fluid animation. I especially enjoy themes of love, fate, eternity, and loss in art.</p>

        <p>Some fun projects that I&apos;ve worked on in the past include page art and merch for fanzines, selling my own acrylic keychains, and doing a commission for someone&apos;s DND campaign. I also like giving shirts I don&apos;t wear anymore new lives by drawing on them with my own designs.</p>
      </div>
    </section>
  )
}

function AboutBooks() {
  return (
    <section className={styles.books}>
      <div className={styles.panel}>
        <div className={styles.content}>
          <p className="big">
            Since I can&apos;t shut up about the books I read, I guess I should recommend some, right? Here are some of my all-time favorites! <FontAwesomeIcon icon={faArrowRight} />
          </p>
          {/* <ol>
          <li><cite>This Is How You Lose the Time War</cite> by Amal El-Mohtar and Max Gladstone</li>
          <li><cite>The Night Circus</cite> by Erin Morgenstern</li>
          <li><cite>Demian: The Story of Emil Sinclair&apos;s Youth</cite> by Hermann Hesse</li>
          <li><cite>Circe</cite> by Madeline Miller</li>
          <li><cite>The Alchemist</cite> by Paulo Coelho</li>
          <li><cite>The Picture of Dorian Gray</cite> by Oscar Wilde</li>
          <li><cite>The Count of Monte Cristo</cite> by Alexandre Dumas</li>
        </ol> */}
        </div>
      </div>
      <div className={styles.panel}>

      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutIntro />
      <AboutArt />
      {/* <AboutBooks /> */}
    </>
  )
}