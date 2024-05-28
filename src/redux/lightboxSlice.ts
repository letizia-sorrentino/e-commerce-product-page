import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type LightboxState = {
  isOpen: boolean;
  currentImage: string;
  currentIndex: number;
};

const initialState: LightboxState = {
  isOpen: false,
  currentImage: "",
  currentIndex: 0,
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
      state.currentIndex = action.payload;
    },
  },
});
export const { openLightbox, closeLightbox, setCurrentImage, setCurrentIndex } =
  lightboxSlice.actions;

export const selectIsOpen = (state: RootState) => state.lightbox.isOpen;
export const selectCurrentImage = (state: RootState) =>
  state.lightbox.currentImage;
export const selectCurrentIndex = (state: RootState) =>
  state.lightbox.currentIndex;

export default lightboxSlice.reducer;
