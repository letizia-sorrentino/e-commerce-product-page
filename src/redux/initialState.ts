export interface StateType {
  images: [];
  currentIndex: number;
  burgerOpen: boolean;
}

export const initialState: StateType = {
  images: [],
  currentIndex: 0,
  burgerOpen: false,
};
