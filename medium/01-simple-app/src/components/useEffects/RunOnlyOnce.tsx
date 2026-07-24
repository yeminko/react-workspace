import { useEffect, useState } from "react";

export default function RunOnlyOnce() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect() is called!");
  }, []);

  return (
    <div>
      <h1>useEffect() runs only once.</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
