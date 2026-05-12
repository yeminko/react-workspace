import { useRef } from "react";

export default function UsernameInput() {
  const inputElement = useRef<HTMLInputElement>(null);

  function handleValue() {
    if (inputElement.current) {
      alert(inputElement.current.value);
    }
  }

  return (
    <>
      <input ref={inputElement} type="text" placeholder="Enter name" />
      <button onClick={handleValue}>Get Value</button>
    </>
  );
}
