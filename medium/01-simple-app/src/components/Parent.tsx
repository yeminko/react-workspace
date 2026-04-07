import Child from "./Child";

export default function Parent() {
  function handleEat(food: string): string {
    return `Yum! I ate a ${food}.`;
  }

  return (
    <>
      <h1>Parent Component</h1>
      <Child onEat={handleEat} />
    </>
  );
}
