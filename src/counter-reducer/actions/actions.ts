export type CounterAction =
  | { type: 'reset' }
  | { type: 'increaseBy'; payload: { value: number } };

//? Actions creators
export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncrease = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});
