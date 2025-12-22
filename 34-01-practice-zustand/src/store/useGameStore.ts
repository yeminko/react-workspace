import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine(
    {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
    (set) => ({
      setSquares: (
        nextSquares:
          | (null | string)[]
          | ((squares: (null | string)[]) => (null | string)[])
      ) => {
        set((state) => ({
          squares:
            typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext: boolean | ((xIsNext: boolean) => boolean)) => {
        set((state) => ({
          xIsNext:
        typeof nextXIsNext === 'function'
          ? nextXIsNext(state.xIsNext)
          : nextXIsNext,
        }));
      },
        })
      )
    );

export default useGameStore;
