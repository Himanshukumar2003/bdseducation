import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/slice";
import productsReducer from "./features/productsSlice";
import authReducer from "./features/authSlice";
import ordersReducer from "./features/ordersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer,
      orders: ordersReducer,
    },
  });
};
