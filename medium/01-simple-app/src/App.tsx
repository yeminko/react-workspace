import GetProducts from "./components/usingContext/GetProducts";
import Products from "./components/usingContext/Products";
import { ProductContextProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductContextProvider>
      <Products />
      <GetProducts />
    </ProductContextProvider>
  );
}
