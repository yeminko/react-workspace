import { useFruits } from "../hooks/useFruits";

export default function Fruits() {
  const { loading, fruits, initFruits } = useFruits();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button onClick={initFruits}>Load Fruits</button>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
