interface Props {
  onEat: (food: string) => string;
}

export default function Child({ onEat }: Props) {
  function handleClick() {
    const result = onEat("apple");
    console.log(result);
  }

  return (
    <>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Eat</button>
    </>
  );
}
