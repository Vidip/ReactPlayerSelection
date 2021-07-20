import { ActionTypes } from "../constants/action-types";
import { fetchImages } from "../api/index";

// Fetch All Images Action
export const fetchAllImages = () => async (dispatch) => {
  const response = await fetchImages;
  dispatch({
    type: ActionTypes.FETCH_IMAGES,
    payload: response.data,
  });
};

// Selected Image Action
export const selectedImage = (image) => {
  return {
    type: ActionTypes.SELECTED_IMAGE,
    payload: image,
  };
};
