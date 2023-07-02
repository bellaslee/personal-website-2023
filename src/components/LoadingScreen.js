import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import styles from '@/styles/LoadingScreen.module.scss';
import bee from '../../public/img/bee.png';

export default function LoadingScreen({ done, setHasShownLoader }) {
  const comp = useRef();
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const [img, setImg] = useState();
  const [honeycombL, setHoneycombL] = useState();
  const [honeycombR, setHoneycombR] = useState();

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

  const drawSvg = (ref) => {
    if (ref) {
      const pathLength = ref.getTotalLength();
      const factor = pathLength / 3;
      ref.style.strokeDasharray = factor;
      ref.style.strokeDashoffset = factor;
      ref.style.display = 'block';
      gsap.to(ref, {
        duration: 1,
        ease: 'power1.in',
        strokeDashoffset: 800,
      })
    }
  }

  const animate = () => {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power3.out'
        }
      })
      .to(img, {
        duration: 1.5,
        delay: 0.5,
        y: '-70vh',
        display: 'none',
        call: () => {
          drawSvg(honeycombL);
          drawSvg(honeycombR);
        }
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
      <div className={`${styles.panel} ${styles.left}`} ref={setLeft}>
        <svg width="577" height="542" viewBox="0 0 577 542" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={setHoneycombL} d="M504.5 168L576.5 126V42.5L504.5 1L432.5 42.5M504.5 168L432.5 127M504.5 168L504 251M432.5 127V42.5M432.5 127L360.5 168M432.5 42.5L360 1L288 43V126L360.5 168M360.5 168V250.5M360.5 250.5L432.5 292M360.5 250.5L288.5 292.5M432.5 292L504 251M432.5 292V375M504 251L576 292V375L504.5 416.5L432.5 375M432.5 375L360.5 416.5M360.5 416.5L288.5 375M360.5 416.5V499L288.5 540.5L216.5 498V416.5M288.5 375V292.5M288.5 375L216.5 416.5M288.5 292.5L216.5 251M216.5 251V168.5L144.5 126.5L73 168.5V251M216.5 251L144.5 292M73 251L0.5 292.5V375L73 416.5L144.5 375M73 251L144.5 292M144.5 375L216.5 416.5M144.5 375V292" stroke="#ECF2F3" />
        </svg>

      </div>
      <div className={`${styles.panel} ${styles.right}`} ref={setRight}>
        <svg width="577" height="542" viewBox="0 0 577 542" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={setHoneycombR} d="M72.5 168L0.5 126V42.5L72.5 1L144.5 42.5M72.5 168L144.5 127M72.5 168L73 251M144.5 127V42.5M144.5 127L216.5 168M144.5 42.5L217 1L289 43V126L216.5 168M216.5 168V250.5M216.5 250.5L144.5 292M216.5 250.5L288.5 292.5M144.5 292L73 251M144.5 292V375M73 251L1 292V375L72.5 416.5L144.5 375M144.5 375L216.5 416.5M216.5 416.5L288.5 375M216.5 416.5V499L288.5 540.5L360.5 498V416.5M288.5 375V292.5M288.5 375L360.5 416.5M288.5 292.5L360.5 251M360.5 251V168.5L432.5 126.5L504 168.5V251M360.5 251L432.5 292M504 251L576.5 292.5V375L504 416.5L432.5 375M504 251L432.5 292M432.5 375L360.5 416.5M432.5 375V292" stroke="#ECF2F3" />
        </svg>
      </div>
      <div className={styles.img} ref={setImg}>
        <Image src={bee} alt="" priority />
      </div>
    </div>
  )
}