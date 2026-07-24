import { useEffect } from "react";

export default function ComponentMount() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>useEffect() will run on component mount.</h1>;
}
