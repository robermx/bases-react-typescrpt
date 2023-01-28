import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="my-5">
      <h2>Counter {count}</h2>
      <button className="btn btn-primary" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};
