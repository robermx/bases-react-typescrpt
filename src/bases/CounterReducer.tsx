import { useReducer } from 'react';

interface CounterState {
  count: number;
  previous: number;
  changes: number;
}

const initialState: CounterState = {
  changes: 0,
  count: 0,
  previous: 0,
};

type CounterAction =
  | { type: 'reset' }
  | { type: 'increaseBy'; payload: { value: number } };

//? count reducer
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, count } = state;

  switch (action.type) {
    case 'reset':
      return {
        changes: 0,
        count: 0,
        previous: 0,
      };

    case 'increaseBy':
      return {
        changes: changes + 1,
        count: count + action.payload.value,
        previous: count,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <div className="my-5">
      <h2 className="mb-3">CounterReducer</h2>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button
        className="btn btn-primary me-4"
        onClick={() => handleIncreaseBy(1)}
      >
        +1
      </button>
      <button
        className="btn btn-primary me-4"
        onClick={() => handleIncreaseBy(5)}
      >
        +5
      </button>
      <button
        className="btn btn-primary me-4"
        onClick={() => handleIncreaseBy(10)}
      >
        +10
      </button>
      <button className="btn btn-danger" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
