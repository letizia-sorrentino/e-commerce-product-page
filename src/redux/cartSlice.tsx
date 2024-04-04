import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

//define a typefor the product item
export type Item = {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
};

//define a type for the item in the cart
type CartItem = {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

// define the shopping cart state
type ShoppingCartState = {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
};

// define initialState for the shopping cart
const initialState: ShoppingCartState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //Adding an item to the cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Increasing the quantity of an item in the cart
    increaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity++;
      }
    },

    //Decreasing the quantity of an item in the cart
    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
    },

    // Removing an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    //
    getTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.items.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.totalItems = quantity;
      state.totalCost = total;
    },

    // Empty the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
  clearCart,
} = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;
export const selectTotalItems = (state: RootState) => state.cart.totalItems;
export default cartSlice.reducer;
