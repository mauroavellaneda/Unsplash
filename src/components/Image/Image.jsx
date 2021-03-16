import React from "react";
import useStyles from "./styles";

const Image = (props) => {
  const classes = useStyles();
  const { url, id, onClickImage } = props;

  return (
    <div
      data-cy="landing"
      className={classes.ImageContainer}
      onClick={() => onClickImage(id)}
    >
      <img data-cy="image" className={classes.image} src={url} alt="" />
    </div>
  );
};

export default Image;
