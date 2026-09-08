import { createContext, useState, useContext, type ReactNode } from "react";

interface Product {
  id: number;
  name: string;
}

interface ContextValue {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const initialContextValue: ContextValue = {
  products: [
    {
      id: 1,
      name: "Sample Product",
    },
    {
      id: 2,
      name: "Another Product",
    },
    {
      id: 3,
      name: "Third Product",
    },
  ],
  setProducts: () => {},
};

const ProductContext = createContext<ContextValue>(initialContextValue);

export function ProductContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const value = { products, setProducts };

  return <ProductContext value={value}>{children}</ProductContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductContext() {
  const context = useContext(ProductContext);
  //   if (!context) {
  //     throw new Error(
  //       "useProductContext must be used within a ProductContextProvider",
  //     );
  //   }
  return context;
}
