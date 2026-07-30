import { useState, useEffect } from "react";

export default function InfiniteLoopExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect() is called!");
    // This will cause an infinite loop
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Infinite Loop Example</h1>
      <p>Count: {count}</p>
    </div>
  );
}
