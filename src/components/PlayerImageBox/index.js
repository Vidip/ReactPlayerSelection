import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const PlayerImageBox = (props) => {
  return (
    // Updating Image of the Selected Player by fetching the Image Url From Props
    <div className="imageBox">
      <img
        src={props.imageCode}
        alt="A table full of delicious food!"
        style={{ height: 200 }}
      />
    </div>
  );
};

PlayerImageBox.propTypes = {
  imageCode: PropTypes.string,
};
export default PlayerImageBox;
