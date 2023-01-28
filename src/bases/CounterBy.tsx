import { useState } from 'react';

interface CounterByProps {
  initialValue?: number;
}

interface CountState {
  count: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: CounterByProps) => {
  const [{ count, clicks }, setCountState] = useState<CountState>({
    count: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCountState(({ count, clicks }) => ({
      count: count + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <div className="my-5">
      <h2>CounterBy {count}</h2>
      <h3 className="mb-3">Clicks {clicks}</h3>
      <button className="btn btn-primary" onClick={() => handleClick(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => handleClick(5)}>
        +5
      </button>
    </div>
  );
};
