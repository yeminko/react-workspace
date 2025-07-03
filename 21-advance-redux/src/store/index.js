import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slide";
import cartSlice from "./cart-slide";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
