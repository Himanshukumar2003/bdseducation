import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};
