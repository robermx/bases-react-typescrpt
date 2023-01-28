import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { count, elementToAnimate, handleClick, activeDisabled } = useCounter({
    maxCount: 15,
    initialState: 5,
  });

  return (
    <div className="my-5">
      <h2>CounterHook</h2>
      <h4 ref={elementToAnimate} className="mt-4">
        {count}
      </h4>
      <button
        onClick={handleClick}
        disabled={activeDisabled()}
        className="btn btn-primary"
      >
        +1
      </button>
    </div>
  );
};
