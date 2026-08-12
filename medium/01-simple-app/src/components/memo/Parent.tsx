import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Active");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setStatus(status === "Active" ? "Inactive" : "Active")}
      >
        Toggle Status
      </button>
      <Child status={status} />
    </>
  );
}
