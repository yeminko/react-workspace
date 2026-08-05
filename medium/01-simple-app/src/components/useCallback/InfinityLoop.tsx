import { useEffect, useState, useCallback } from "react";

export function InfinityLoop() {
  const [count, setCount] = useState(0);

  const prettyPrint = useCallback(() => {
    console.log("Pretty Print");
  }, []); // No dependencies, so the function reference will remain the same

  useEffect(() => {
    prettyPrint();
    setCount((prevCount) => prevCount + 1);
  }, [prettyPrint]);

  return <h1>Current Count : {count}</h1>;
}
