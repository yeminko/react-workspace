import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";
import classes from "./Counter.module.css";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleCustomIncrement() {
    dispatch(incrementByAmount(Number(input) || 0));
  }

  return (
    <section>
      <h1>My Counter</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={handleDecrement} className={classes["m-right"]}>
        Decrement
      </button>
      <button onClick={handleIncrement}>Increment</button>

      <p>
        <input
          placeholder="Enter custom increment"
          className={classes["m-right"]}
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleCustomIncrement}>Custom Increment</button>
      </p>
    </section>
  );
}
