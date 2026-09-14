import { useProductContext } from "../../context/ProductContext";

export default function GetProducts() {
  const { setProducts } = useProductContext();

  function handleProducts() {
    setProducts([
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ]);
  }

  return <button onClick={handleProducts}>Get Products</button>;
}
