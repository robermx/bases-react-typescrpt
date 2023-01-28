import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
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
