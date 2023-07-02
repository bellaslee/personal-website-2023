import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';
import styles from '@/styles/Home.module.scss';
import Meta from '@/components/Meta';
import LoadingScreen from '@/components/LoadingScreen';
import PostList from '@/components/PostList';
import { getPosts } from '@/helpers/utils';

export const getStaticProps = () => {
  const posts = getPosts(1, 'projects');

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ hasShownLoader, setHasShownLoader, posts }) {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState();

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
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

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(hero, {
        duration: 1,
        yPercent: 5,
        opacity: 0,
        filter: "blur(10px)"
      })
    })
  }, [hero])

  return (
    <>
      <Meta title="Bella Lee" />

      {hasShownLoader ? '' : <LoadingScreen done={!loading} setHasShownLoader={setHasShownLoader} />}

      <section className={`${styles.hero}`} ref={setHero}>
        <div>
          <p className="big">
            Hello! I am a junior at the University of Washington majoring in Informatics. I hope to make information more accessible, intuitive, and enjoyable to consume through my work.
          </p>
          <p>
            <Link href="/about" className="fancy">
              More about me <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </p>
        </div>
      </section>

      <section className={`${styles.projects} bg-black`}>
        <h1>Featured Projects</h1>
        <PostList posts={posts} />
      </section>
    </>
  )
}
