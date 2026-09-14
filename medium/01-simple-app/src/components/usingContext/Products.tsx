import { useProductContext } from "../../context/ProductContext";

export default function Products() {
  const { products } = useProductContext();
  return (
    <>
      {products.length === 0 && <div>No products available</div>}
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </>
  );
}
