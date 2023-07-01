import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import styles from '@/styles/LoadingScreen.module.scss'

export default function LoadingScreen({ done, setHasShownLoader }) {
  const comp = useRef();
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const [img, setImg] = useState();

  useIsomorphicLayoutEffect(() => {
    if (done) {
      animate();
    }

    // if (!left || !right || !img) return;
    // gsap
    //   .timeline({
    //     defaults: {
    //       duration: 1,
    //       ease: 'power1.out'
    //     }
    //   })
    //   .to(img, {
    //     y: '-75vh',
    //     display: 'none'
    //   })
    //   .to(left, {
    //     x: '-100%',
    //     display: 'none'
    //   })
    //   .to(right, {
    //     x: '100%',
    //     display: 'none'
    //   }, '<')
  }, [done]);

  const animate = () => {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power1.out'
        }
      })
      .to(img, {
        delay: 1,
        y: '-75vh',
        display: 'none'
      })
      .to(left, {
        x: '-100%',
        display: 'none'
      })
      .to(right, {
        x: '100%',
        display: 'none'
      }, '<')
      .then(() => {
        setHasShownLoader(true)
      });
  }

  return (
    <div className={styles.loadingScreen} ref={comp}>
      <div className={`${styles.panel} ${styles.left}`} ref={setLeft}></div>
      <div className={styles.img} ref={setImg}>
        bee
      </div>
      <div className={`${styles.panel} ${styles.right}`} ref={setRight}></div>
    </div>
  )
}