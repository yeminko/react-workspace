import { useState, useEffect } from "react";

export default function RunWhenDependencyChange() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect() is called!");
  }, [count]);

  return (
    <div>
      <h1>useEffect() runs when the dependency changes.</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
