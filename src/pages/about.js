import React from "react";
import Image from "next/image";
import wolfwood from "../../public/img/wolfwood.jpeg";

export default function About() {
  return (
    <>
      <section>
        <div className="content">
          <h1>Hi, I&apos;m Bella!</h1>
          <p>I&apos;m a freelance illustrator, Informatics student, web developer, and Preisdent of <a href="https://instagram.com/smirk_uw">Smirk UW</a>. I love fingerstyle guitar, singing, and reading (the social media platform that I&apos;m most active on
            is actually <a href="https://www.goodreads.com/bellalee_" target="_blank" rel="noreferrer">Goodreads</a>!</p>
          <figure>
            <Image src={wolfwood} alt="Wolfwood from the anime Trigun Stampede" />
            <figcaption>My illustration of Wolfwood from <cite>Trigun Stampede</cite></figcaption>
          </figure>
          <p>Outside of school, you can find me holed up at home reading and drawing, or vending at a local makers fair.</p>
          <p>
            Since I can&apos;t shut up about the books I read, I guess I should recommend some, right? Here&apos;s a list of my all-time favorites!
            <ol>
              <li><cite>This Is How You Lose the Time War</cite> by Amal El-Mohtar and Max Gladstone</li>
              <li><cite>The Night Circus</cite> by Erin Morgenstern</li>
              <li><cite>Demian: The Story of Emil Sinclair&apos;s Youth</cite> by Hermann Hesse</li>
              <li><cite>Circe</cite> by Madeline Miller</li>
              <li><cite>The Alchemist</cite> by Paulo Coelho</li>
              <li><cite>The Picture of Dorian Gray</cite> by Oscar Wilde</li>
              <li><cite>The Count of Monte Cristo</cite> by Alexandre Dumas</li>
              <li><cite>Flowers of Buffoonery</cite> by Osamu Dazai</li>
            </ol>

          </p>
        </div>
      </section>

      <section className="about">
        01. artist
        02. book lover
        03. tarot enthusiast
      </section>
    </>
  )
}