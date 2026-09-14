import { createContext, useState, useContext, type ReactNode } from "react";

interface Product {
  id: number;
  name: string;
}

interface ContextValue {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ContextValue | undefined>(undefined);

export function ProductContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const value = { products, setProducts };

  return <ProductContext value={value}>{children}</ProductContext>;
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider",
    );
  }
  return context;
}
