import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state-reducer/counterReducer';
import * as actions from './actions/actions';

const initialState: CounterState = {
  changes: 0,
  count: 0,
  previous: 0,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch(actions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(actions.doIncrease(value));
  };

  return (
    <div className="my-5">
      <h2 className="mb-3">Segmented Counter Reducer</h2>

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
