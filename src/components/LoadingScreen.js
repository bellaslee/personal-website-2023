import Image from "next/image";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

export default function LoadingScreen() {
  const comp = useRef();
  const left = useRef();
  const tl = useRef();
  const didAnimate = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 1
          }
        })
        .to('.left', {
          x: '-100vw'
        })
        .to('.right', {
          x: '100vw'
        }, '<')
    }, comp);

    return ctx.revert();
  }, []);

  return (
    <div className='loading-screen' ref={comp}>
      <div className='panel left' ref={left}></div>
      <div className='img'>
        placeholder
      </div>
      <div className='panel right'></div>
    </div>
  )
}