import { configureStore } from "@reduxjs/toolkit";
import appManagerReducer from "./appManagerSlice";
import cartReducer from "./cartSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    appManager: appManagerReducer,
    cart: cartReducer,
  },
});
