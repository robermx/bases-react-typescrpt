export type CounterAction =
  | { type: 'reset' }
  | { type: 'increaseBy'; payload: { value: number } };
