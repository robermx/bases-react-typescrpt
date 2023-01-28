import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { count, elementToAnimate, handleClick } = useCounter({
    maxCount: 20,
    initialState: 2,
  });

  return (
    <div className="my-5">
      <h2>CounterHook</h2>
      <h4 ref={elementToAnimate} className="mt-4">
        {count}
      </h4>
      <button onClick={handleClick} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
