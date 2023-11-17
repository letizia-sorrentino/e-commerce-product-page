import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,

  reducers: {
    //set the images in the state
    setImages: (state, action) => {
      state.images = action.payload;
    },

    //action to move to the next image in the slider
    nextImage: (state) => {
      state.currentIndex = state.currentIndex + (1 % state.images.length);
    },

    //action to go back to the prev image in the slider
    prevImage: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.images.length) % state.images.length;
    },

    setBurgerOpen: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },
  },
});

export const { setImages, nextImage, prevImage, setBurgerOpen } =
  appManagerSlice.actions;
export const selectImages = (state: RootState) => state.appManager.images;
export const selectCurrentIndex = (state: RootState) =>
  state.appManager.currentIndex;
export const selectBurgerOpen = (state: RootState) =>
  state.appManager.burgerOpen;

export default appManagerSlice.reducer;
