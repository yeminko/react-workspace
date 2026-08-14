import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  const print = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child print={print} />
    </>
  );
}
