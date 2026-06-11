import { useRef } from "react";
import Dialog, { type DialogHandles } from "./components/Dialog";

export default function App() {
  const dialogRef = useRef<DialogHandles>(null);

  function handleProcessOrder() {
    dialogRef.current?.open();
  }

  return (
    <>
      <h1>Order</h1>
      <button onClick={handleProcessOrder}>Process Order</button>
      <Dialog ref={dialogRef} />
    </>
  );
}
