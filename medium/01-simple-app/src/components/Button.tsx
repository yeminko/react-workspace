import type { MouseEvent } from "react";

export default function NestedButtons() {
  function handleOuterClick() {
    alert("Outer button clicked!");
  }

  function handleInnerClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation(); // You can comment out to understand the effect of event propagation
    alert("Inner button clicked!");
  }

  return (
    <div onClick={handleOuterClick}>
      <button onClick={handleInnerClick}>Inner Button</button>
    </div>
  );
}
