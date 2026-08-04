import { useEffect, useState } from "react";

export function InfinityLoop() {
  const [count, setCount] = useState(0);

  function prettyPrint() {
    console.log("Pretty Print");
  }

  useEffect(() => {
    prettyPrint();
    setCount((prevCount) => prevCount + 1);
  }, [prettyPrint]);

  return <h1>Current Count : {count}</h1>;
}
