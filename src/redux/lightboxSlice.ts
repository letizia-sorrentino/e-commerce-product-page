import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

//define the state type for the lightbox
type LightboxState = {
  isOpen: boolean;
  currentImage: string;
  currentIndexLightbox: number;
  lightboxImages: string[];
};

//define the initial state for the lightbox
const initialState: LightboxState = {
  isOpen: false,
  currentImage: "",
  currentIndexLightbox: 0,
  lightboxImages: [],
};

//create the lightbox slice
export const lightboxSlice = createSlice({
  name: "lightbox",
  initialState,
  reducers: {
    //open the lightbox
    openLightbox: (state) => {
      state.isOpen = true;
    },

    //close the lightbox
    closeLightbox: (state) => {
      state.isOpen = false;
    },
    //set the current image
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },

    //set the current index
    setCurrentIndex: (state, action) => {
      state.currentIndexLightbox = action.payload;
    },

    //set the images in the state
    setLightboxImages: (state, action) => {
      state.lightboxImages = action.payload;
    },

    //set the next image
    setNextImage: (state) => {
      let nextIndex = state.currentIndexLightbox + 1;
      if (
        nextIndex >= state.lightboxImages.length // Loop back to start
      ) {
        nextIndex = 0;
      }
      state.currentIndexLightbox = nextIndex;
    },

    //set the previous image
    setPreviousImage: (state) => {
      let prevIndex = state.currentIndexLightbox - 1;
      if (prevIndex < 0) {
        prevIndex = state.lightboxImages.length - 1; // Loop back to end
      }
      state.currentIndexLightbox = prevIndex;
    },
  },
});

//export the actions
export const {
  openLightbox,
  closeLightbox,
  setCurrentImage,
  setCurrentIndex,
  setLightboxImages,
  setNextImage,
  setPreviousImage,
} = lightboxSlice.actions;

//select the state
export const selectIsOpen = (state: RootState) => state.lightbox.isOpen;
export const selectCurrentImage = (state: RootState) =>
  state.lightbox.currentImage;
export const selectCurrentIndex = (state: RootState) =>
  state.lightbox.currentIndexLightbox;
export const selectLightboxImages = (state: RootState) =>
  state.lightbox.lightboxImages;

export default lightboxSlice.reducer;
