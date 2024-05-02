import { configureStore } from "@reduxjs/toolkit";
import appManagerReducer from "./appManagerSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    appManager: appManagerReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});
