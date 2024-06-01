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
//define the product state
type ProductState = {
  products: Product[];
};

//define the initial state
const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //fetch the products from the database
    fetchProducts(state, action) {
      state.products = action.payload;
    },
  },
});

//export the actions
export const { fetchProducts } = productSlice.actions;

//select the products from the state
export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
