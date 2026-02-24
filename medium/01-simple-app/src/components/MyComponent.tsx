export default function MyComponent() {
  const name = "John Doe";
  const age = 30;

  return (
    <div>
      <h1>Name: {name.toUpperCase()}</h1>
      <p>Age: {age + 5}</p>
    </div>
  );
}
