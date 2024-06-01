import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

//define the state type for the appManager
type StateType = {
  images: string[];
  currentIndex: number;
  burgerOpen: boolean;
  basketOpen: boolean;
};

//define the initial state for the appManager
const initialState: StateType = {
  images: [],
  currentIndex: 0,
  burgerOpen: false,
  basketOpen: false,
  
};

//create the appManager slice
export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,
  reducers: {
   
    //set the images in the state
    setImages: (state, action) => {
      state.images = action.payload;
    },

    //action to go back to the prev image in the slider
    prevImage: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.images.length) % state.images.length;
    },

    //action to move to the next image in the slider
    nextImage: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },

  //open the burger menu
    openBurger: (state) => {
      state.burgerOpen = true;
    },

    //close the burger menu
    closeBurger: (state) => {
      state.burgerOpen = false;
    },

    //toggle the burger menu
    toggleBurger: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },

    //open the basket
    openBasket: (state) => {
      state.basketOpen = true;
    },

    //close the basket
    closeBasket: (state) => {
      state.basketOpen = false;
    },

    //toggle the basket
    toggleBasket: (state) => {
      state.basketOpen = !state.basketOpen;
    },
  },
});

//export the actions
export const {
  setImages,
  nextImage,
  prevImage,
  openBurger,
  closeBurger,
  toggleBurger,
  openBasket,
  closeBasket,
  toggleBasket,
} = appManagerSlice.actions;

//selectors
export const selectImages = (state: RootState) => state.appManager.images;
export const selectCurrentIndex = (state: RootState) =>
  state.appManager.currentIndex;
export const selectBurgerOpen = (state: RootState) =>
  state.appManager.burgerOpen;
export const selectBasketOpen = (state: RootState) =>
  state.appManager.basketOpen;

export default appManagerSlice.reducer;
