import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <div className="my-5">
      <h1>Bases React TypeScript</h1>
      <hr />
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </div>
  );
}

export default App;
