import { useRef } from "react";

export default function Timer() {
  const inputElement = useRef<HTMLInputElement>(null);

  return <input ref={inputElement} type="text" placeholder="Enter name" />;
}
