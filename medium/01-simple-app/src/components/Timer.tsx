import { useRef, useState } from "react";

export default function Timer() {
  const [now, setNow] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    reset();
    intervalRef.current = setInterval(() => {
      setNow((now) => now + 1);
    }, 1);
  }

  function reset() {
    if (intervalRef.current) {
      setNow(0);
      clearInterval(intervalRef.current);
    }
  }

  return (
    <>
      <h1>Timer</h1>
      <h3>{now} milliseconds</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
