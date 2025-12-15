import { useAppSelector } from "../hooks/useStore";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <h1>My Counter</h1>
      <h2>Current Count: {count}</h2>
    </>
  );
}
