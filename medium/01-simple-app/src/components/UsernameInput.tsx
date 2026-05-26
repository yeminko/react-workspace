import { useRef } from "react";

export default function UsernameInput() {
  const inputElement = useRef<HTMLInputElement>(null);

  function handleValue() {
    alert(inputElement.current?.value);
  }

  function resetValue() {
    if (inputElement.current) {
      inputElement.current.value = "";
    }
  }

  function handleFocus() {
    inputElement.current?.focus();
  }

  return (
    <>
      <input ref={inputElement} type="text" placeholder="Enter name" />
      <button onClick={handleValue}>Get Value</button>
      <button onClick={resetValue}>Reset Value</button>
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
