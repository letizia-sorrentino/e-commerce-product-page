import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

//define a typefor the product item
export type Product = {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
  },
});
export const { fetchProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
