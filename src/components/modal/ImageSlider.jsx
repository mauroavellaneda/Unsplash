import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import useStyles from "./styles";

const ImageSlider = (props) => {
  const classes = useStyles();

  const {
    selectedImage,
    togglePreviewPopup,
    isPrevDisabled,
    onClickPrev,
    onClickNext,
  } = props;

  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 39) {
        onClickNext();
      } else if (e.keyCode === 37 && !isPrevDisabled) {
        onClickPrev();
      } else if (e.keyCode === 27) {
        togglePreviewPopup();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <div onClick={togglePreviewPopup}></div>
      <div className={classes.ImageContainer}>
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.user}>
              <div className={classes.profilePicture}>
                <Avatar
                  data-cy="avatar"
                  alt=""
                  src={selectedImage?.user.profile_image.small}
                />
              </div>
              <div data-cy="modal-name" className={classes.userName}>
                <span className={classes.fullName}>
                  {selectedImage?.user.name}
                </span>
                {selectedImage?.user.instagram_username && (
                  <div>{`@${selectedImage?.user.instagram_username}`}</div>
                )}
              </div>
            </div>
          </div>
          <img
            data-cy="modal-image"
            alt=""
            className={classes.image}
            src={selectedImage?.urls.small}
            onLoad={() => setImageLoaded(true)}
          />
          {/* {!isImageLoaded ? (
            <div>
              <Spinner />
            </div>
          ) : ( */}
          {/* )} */}
        </div>
        <div class={classes.location}>
          {selectedImage?.user.location && (
            <div>
              <LocationOnOutlinedIcon />
              {selectedImage?.user.location}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
