import { useImperativeHandle, useRef, type Ref } from "react";

export interface DialogHandles {
  open: () => void;
  close: () => void;
}

interface Props {
  ref: Ref<DialogHandles>;
}

export default function Dialog({ ref }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return (
    <dialog ref={dialogRef}>
      <h2>Confirmation</h2>
      <p>Are you sure you want to proceed?</p>
      <button onClick={() => dialogRef.current?.close()}>Yes</button>
    </dialog>
  );
}
