import { useRef } from "react";

export default function UsernameInput() {
  const inputElement = useRef<HTMLInputElement>(null);

  function updateValue() {
    if (inputElement.current) {
      inputElement.current.value = "Hello World";
    }
  }

  return (
    <>
      <input ref={inputElement} type="text" placeholder="Enter name" />
      <button onClick={updateValue}>Update Value</button>
    </>
  );
}
