import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/product-context";

import "./index.css";
import App from "./App";
import configureProductStore from "./hook-store/product-store";

configureProductStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </ProductsProvider>
);
