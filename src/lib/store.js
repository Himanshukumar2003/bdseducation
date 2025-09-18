import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/slice";
import productsReducer from "./features/productsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
  });
};
