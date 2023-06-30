import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

export default function LoadingScreen() {
  const comp = useRef();
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const [img, setImg] = useState();

  useIsomorphicLayoutEffect(() => {
    if (!left || !right || !img) return;
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power1.out'
        }
      })
      .to(img, {
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
  }, [left, right]);

  return (
    <div className='loading-screen' ref={comp}>
      <div className='panel left' ref={setLeft}></div>
      <div className='img' ref={setImg}>
        bee
      </div>
      <div className='panel right' ref={setRight}></div>
    </div>
  )
}