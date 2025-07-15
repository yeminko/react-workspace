import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", name: "Product 1" },
  { id: "p2", name: "Product 2" },
  { id: "p3", name: "Product 3" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
