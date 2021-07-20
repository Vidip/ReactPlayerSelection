import { combineReducers } from "redux";
import { imageReducer, selectedImageReducer } from "./PlayerImageReducer";

// Combining All Reducers to one Reducer
const reducers = combineReducers({
  allImages: imageReducer,
  image: selectedImageReducer,
});

export default reducers;
