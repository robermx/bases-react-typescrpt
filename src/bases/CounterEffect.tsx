import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { useDecrement } from '../hooks/useDecrement';

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const countElement = useRef<HTMLHeadingElement>(null);
  const { countDown } = useDecrement(60, 1);

  const tl = gsap.timeline();

  useEffect(() => {
    if (count <= 0) return;

    tl.to(countElement.current, {
      keyframes: {
        '15%': { y: -8, ease: 'ease.out' },
        '95%': { y: 0, ease: 'bounce.out' },
      },
      duration: 1,
    });
  }, [count]);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, MAX_COUNT));
  };

  return (
    <div className="my-5">
      <h2 className="mb-3">CounterEffect {countDown}</h2>
      <h3>counterMax </h3>
      <h4 ref={countElement} className="mt-4">
        {count}
      </h4>
      <button onClick={handleClick} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
