import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import PlayerImageBox from "../PlayerImageBox";
import { fetchAllImages, selectedImage } from "../../actions/index";
import PlayerChoices from "../PlayerChoices";

const ImageSelectionWidget = () => {
  // Fetches List of Images From Redux Store
  var image = useSelector((state) => state.allImages.images.imageOptions);

  // Error State to Show error Messages if Promise Fails/API Call Fails
  const [errors, setErrors] = useState(false);
  const imageState = useSelector((state) => state.image);

  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatches Fetch All Images
    dispatch(fetchAllImages())
      .then(() => {
        console.log(image);
        dispatch(selectedImage({ image: image[0] }));
      })
      .catch((err) => setErrors(true));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="image-widget">
      <h3>Select Your Favourite Player</h3>
      {imageState && <PlayerImageBox imageCode={imageState.image} />}
      {!image && !errors && <p>Image Loading...</p>}
      {image && <PlayerChoices imageLists={image}></PlayerChoices>}
    </div>
  );
};

export default ImageSelectionWidget;
