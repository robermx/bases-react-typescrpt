import { useState, useEffect } from 'react';

export const useDecrement = (initValue = 0, secs = 1) => {
  const [countDown, setCountDown] = useState(initValue);

  const lapse = secs * 1000;

  useEffect(() => {
    if (countDown <= 0) return;
    const interval = setInterval(() => setCountDown((prev) => prev - 1), lapse);

    return () => {
      clearInterval(interval);
    };
  }, [countDown]);

  return {
    countDown,
  };
};
