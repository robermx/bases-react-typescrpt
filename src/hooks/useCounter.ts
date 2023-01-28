import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export const useCounter = ({ initialState = 0, maxCount = 10 }) => {
  const [count, setCount] = useState(initialState);
  let firstRender = useRef(true);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  const activeDisabled = () => {
    if (count >= maxCount) return true;
    return false;
  };

  useLayoutEffect(() => {
    if (firstRender.current) {
      if (!elementToAnimate.current) return;

      tl.current
        .to(elementToAnimate.current, {
          keyframes: {
            '15%': { y: -8, ease: 'ease.out' },
            '95%': { y: 0, ease: 'bounce.out' },
          },
          duration: 1,
        })
        .pause();
    }
    return () => {
      firstRender.current = false;
    };
  }, []);

  useEffect(() => {
    if (count <= initialState) return;

    tl.current.play(0);

    return () => {
      tl.current.revert();
    };
  }, [count]);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, maxCount));
  };

  return {
    count,
    elementToAnimate,
    handleClick,
    activeDisabled,
  };
};
