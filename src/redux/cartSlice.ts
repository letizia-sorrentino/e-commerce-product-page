import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "./productSlice";

//define a type for the item in the cart
type CartItem = {
  productId: number;
  index: number;
  name: string;
  quantity: number;
  price: number;
  product?: Product;
};

// define the shopping cart state
type ShoppingCartState = {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
};

// define initialState for the shopping cart
export const initialState: ShoppingCartState = {
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
      const { name, price } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          name: name,
          price: price,
          quantity: 1,
        });
      }
    },

    // Increasing the quantity of an item in the cart
    increaseQuantity: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.productId === action.payload
      );
      if (cartItem) {
        cartItem.quantity++;
      }
    },

    //Decreasing the quantity of an item in the cart
    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.productId === action.payload
      );
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
    },

    // Removing an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },

    //
    getTotal: (state) => {
      let itemsQuantity = 0;
      let total = 0;
      state.items.forEach((item) => {
        itemsQuantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.totalItems = itemsQuantity;
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
export const selectTotalCost = (state: RootState) => state.cart.totalCost;
export default cartSlice.reducer;
