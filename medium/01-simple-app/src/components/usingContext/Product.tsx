import { useProductContext } from "../../context/ProductContext";

export default function Product() {
  const { products } = useProductContext();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
