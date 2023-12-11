import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type StateType = {
  images: string[];
  currentIndex: number;
  burgerOpen: boolean;
  basketOpen: boolean;
};

const initialState: StateType = {
  images: [],
  currentIndex: 0,
  burgerOpen: false,
  basketOpen: false,
};

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

    setBurgerOpen: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },

    setBasketOpen: (state) => {
      state.basketOpen = !state.basketOpen;
    },
  },
});

export const { setImages, nextImage, prevImage, setBurgerOpen, setBasketOpen } =
  appManagerSlice.actions;
export const selectImages = (state: RootState) => state.appManager.images;
export const selectCurrentIndex = (state: RootState) =>
  state.appManager.currentIndex;
export const selectBurgerOpen = (state: RootState) =>
  state.appManager.burgerOpen;
export const selectBasketOpen = (state: RootState) =>
  state.appManager.basketOpen;

export default appManagerSlice.reducer;
