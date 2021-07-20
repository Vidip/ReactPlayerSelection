import { ActionTypes } from "../constants/action-types";

// Initial State
const initialState = {
  images: [],
};

// Reducer to modify state of Colors
export const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_IMAGES:
      return { ...state, images: payload };
    default:
      return state;
  }
};

// Reducer to return the Selected Color State
export const selectedImageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_IMAGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
