import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1); // stimute multiple updates in a row
    // setCount(count + 1); // stimute multiple updates in a row
    // setCount((prevCount) => prevCount + 1); // stimute multiple updates in a row
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
