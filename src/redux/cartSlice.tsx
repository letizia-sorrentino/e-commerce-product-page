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
  items: [
    {
      id: 1,
      brand: "SNEAKER COMPANY",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250,
      quantity: 0,
    },
    //add other products here
  ],
  totalItems: 0,
  totalCost: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    increaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity + 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity - 1;
      }
    },

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
