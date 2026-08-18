import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 10, available: true },
  { id: 2, name: "Product 2", price: 20, available: false },
  { id: 3, name: "Product 3", price: 30, available: true },
  { id: 4, name: "Product 4", price: 40, available: false },
  { id: 5, name: "Product 5", price: 50, available: true },
];

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);

  const availableProducts = useMemo(() => {
    return products.filter((product) => {
      console.log("Filtering products...");
      return product.available;
    });
  }, []);

  return (
    <>
      <h1>Store is {isOpen ? "Open" : "Closed"}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Store" : "Open Store"}
      </button>
      <ul>
        {availableProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </>
  );
}
