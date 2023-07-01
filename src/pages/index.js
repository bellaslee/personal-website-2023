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


export default function Home({ hasShownLoader, setHasShownLoader }) {
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Meta title="Bella Lee" />

      {hasShownLoader ? '' : <LoadingScreen done={!loading} setHasShownLoader={setHasShownLoader} />}

      <section className={`${styles.hero}`}>
        <div>
          <p className="big">
            Hello! I am a junior at the University of Washington majoring in Informatics. I hope to make information more accessible, intuitive, and enjoyable to consume through my work.
          </p>
          <p>
            <Link href="/about">
              More about me <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </p>
        </div>
      </section>

      <section className={`${styles.projects} bg-black`}>
        <h2>Projects</h2>
      </section>
    </>
  )
}
