import { useState } from "react";

export function useFruits() {
  const [fruits, setFruits] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function initFruits() {
    setLoading(true);
    setTimeout(() => {
      setFruits(["Apple", "Banana", "Cherry"]);
      setLoading(false);
    }, 1000);
  }

  return { loading, fruits, initFruits };
}
