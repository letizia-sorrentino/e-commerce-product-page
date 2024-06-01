import { configureStore } from "@reduxjs/toolkit";
import appManagerReducer from "./appManagerSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import lightboxReducer from "./lightboxSlice";

//define the root state and the app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//create the store
export const store = configureStore({
  reducer: {
    appManager: appManagerReducer,
    cart: cartReducer,
    products: productsReducer,
    lightbox: lightboxReducer,
  },
});
