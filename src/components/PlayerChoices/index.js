import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { selectedImage } from "../../actions/index";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const PlayerChoices = (props) => {
  const dispatch = useDispatch();
  const selectPlayer = (imageValue) => {
    // Dispatches action to set Selected Player Image to Redux Store
    dispatch(selectedImage({ image: imageValue }));
  };

  // Fetches selected player image state from Redux Store
  const imageState = useSelector((state) => state.image);
  var imageChoiceClasses = {
    imageChoices: "imageChoiceBox",
  };

  const styleObject = {
    height: "100px",
    width: "100px",
  };

  // Rendering List of Images
  var renderImages = props.imageLists.map((imageUrl) => {
    return (
      <Grid item xs={6} spacing={2} key={imageUrl}>
        <div
          className={`${imageChoiceClasses.imageChoices} ${
            imageState.image === imageUrl ? "selected" : ""
          }`}
          onClick={selectPlayer.bind(null, imageUrl)}
          key={imageUrl}
        >
          <img src={imageUrl} alt="Player's Image" style={styleObject} />
        </div>
      </Grid>
    );
  });

  return (
    <div className="boxAlign">
      <Grid container alignItems="center" justify="center" spacing={10}>
        {renderImages}
      </Grid>
    </div>
  );
};

PlayerChoices.propTypes = {
  imageLists: PropTypes.arrayOf(PropTypes.string),
};

export default PlayerChoices;
