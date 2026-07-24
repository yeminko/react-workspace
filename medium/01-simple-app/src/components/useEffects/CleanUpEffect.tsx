import { useState, useEffect } from "react";

export default function CleanUpEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect() is called!");

    return () => {
      console.log("Clean up function is called!");
    };
  }, [count]);

  return (
    <div>
      <h1>useEffect() with clean up function.</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
