import { useEffect, useRef, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  function handleIncrement() {
    const nextCount = count + 1;
    countRef.current = nextCount;
    setCount(nextCount);
  }

  useEffect(() => {
    console.log("Starting interval");

    const intervalId = window.setInterval(() => {
      console.log("Latest count:", countRef.current);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      console.log("Stopping interval");
    };
  }, []);

  return (
    <div>
      <h1>Use a ref to read the latest value in an effect</h1>
      <p>
        The interval logs the latest count every second. Increment the count and
        check the console: the interval keeps running without being restarted.
      </p>
      <button onClick={handleIncrement}>Count: {count}</button>
    </div>
  );
}
