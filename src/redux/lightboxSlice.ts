import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type LightboxState = {
  isOpen: boolean;
  currentImage: string;
  currentIndexLightbox: number;
  lightboxImages: string[];
};

const initialState: LightboxState = {
  isOpen: false,
  currentImage: "",
  currentIndexLightbox: 0,
  lightboxImages: [],
};

export const lightboxSlice = createSlice({
  name: "lightbox",
  initialState,
  reducers: {
    openLightbox: (state) => {
      state.isOpen = true;
    },
    closeLightbox: (state) => {
      state.isOpen = false;
    },
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndexLightbox = action.payload;
    },
    //set the images in the state
    setLightboxImages: (state, action) => {
      state.lightboxImages = action.payload;
    },

    setNextImage: (state) => {
      let nextIndex = state.currentIndexLightbox + 1;
      if (nextIndex >= state.lightboxImages.length) {
        nextIndex = 0;
      }
      state.currentIndexLightbox = nextIndex;
    },
    setPreviousImage: (state) => {
      let prevIndex = state.currentIndexLightbox - 1;
      if (prevIndex < 0) {
        prevIndex = state.lightboxImages.length - 1; // Loop back to end
      }
      state.currentIndexLightbox = prevIndex;
    },
  },
});
export const {
  openLightbox,
  closeLightbox,
  setCurrentImage,
  setCurrentIndex,
  setLightboxImages,
  setNextImage,
  setPreviousImage,
} = lightboxSlice.actions;

export const selectIsOpen = (state: RootState) => state.lightbox.isOpen;
export const selectCurrentImage = (state: RootState) =>
  state.lightbox.currentImage;
export const selectCurrentIndex = (state: RootState) =>
  state.lightbox.currentIndexLightbox;
export const selectLightboxImages = (state: RootState) =>
  state.lightbox.lightboxImages;

export default lightboxSlice.reducer;
