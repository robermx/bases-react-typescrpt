import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';

function App() {
  return (
    <div className="my-5">
      <h1>Bases React TypeScript</h1>
      <hr />
      <Counter />
      <CounterBy />
      <CounterEffect />
    </div>
  );
}

export default App;
