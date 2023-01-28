import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const useCounter = ({ initialState = 0, maxCount = 10 }) => {
  const [count, setCount] = useState(initialState);
  const elementToAnimate = useRef<any>(null);

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (!elementToAnimate.current || count <= initialState) return;

    tl.to(elementToAnimate.current, {
      keyframes: {
        '15%': { y: -8, ease: 'ease.out' },
        '95%': { y: 0, ease: 'bounce.out' },
      },
      duration: 1,
    });
  }, [count]);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, maxCount));
  };

  return {
    count,
    elementToAnimate,
    handleClick,
  };
};
