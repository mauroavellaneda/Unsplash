import React, { useState, useEffect, useCallback } from "react";
import { createUseStyles } from "react-jss";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "@material-ui/core/Button";
import { Dialog, DialogActions } from "@material-ui/core";
import Image from "./Image";
import Spinner from "react-spinkit";
import ImageSlider from "./ImageSlider";
import fetchData from "../modules/data";

const LandingPage = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [showPreview, setShowPreview] = useState(false);
  const [isPrevDisabled, setprevDisabled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    try {
      await fetchData().then((res) => {
        setImages([...images, ...res.data]);
      });
    } catch (error) {
      alert("Sadly, we only have 50 calls per hour");
    }
  };

  const onSelectImage = (id) => {
    const selectedImageIndex = images?.findIndex((image) => image.id === id);
    setSelectedImage(images[selectedImageIndex]);
    setShowPreview(true);
  };

  useEffect(() => {
    let totalImages = images.length - 1;
    if (selectedImage) {
      const selectedImageIndex = images?.findIndex(
        (image) => image.id === selectedImage.id
      );
      if (selectedImageIndex === 0) {
        setprevDisabled(true);
      } else {
        setprevDisabled(false);
      }
      if (totalImages - selectedImageIndex <= 3) {
        fetchRandomImages();
      }
    }
  }, [selectedImage]);

  const onClickNext = useCallback(() => {
    const selectedImageIndex = images?.findIndex(
      (image) => image.id === selectedImage?.id
    );
    setSelectedImage(images[selectedImageIndex + 1]);
  }, [images, selectedImage]);

  const onClickPrev = useCallback(() => {
    const selectedImageIndex = images?.findIndex(
      (image) => image.id === selectedImage?.id
    );
    setSelectedImage(images[selectedImageIndex - 1]);
  }, [images, selectedImage]);

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchRandomImages}
        hasMore={true}
        loader={
          <Spinner
            className={classes.spinner}
            name="ball-spin-fade-loader"
            color="black"
            fadeIn="none"
          />
        }
      >
        <div className={classes.imageWrapper}>
          {images.map((image, idx) => (
            <Image
              url={image.urls.small}
              key={idx}
              id={image.id}
              onClickImage={onSelectImage}
            />
          ))}
        </div>
      </InfiniteScroll>
      <Dialog
        data-cy="modal"
        open={showPreview}
        PaperProps={{
          style: {
            minHeight: "75vh",
            minWidth: "100vw",
            padding: 0,
          },
        }}
      >
        <ImageSlider
          selectedImage={selectedImage}
          togglePreviewPopup={() => setShowPreview(false)}
          toggleInfoPopup={() => setShowInfo(true)}
          isPrevDisabled={isPrevDisabled}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
        <DialogActions>
          <Button
            data-cy="modal-close-button"
            size="medium"
            variant="outlined"
            color="primary"
            onClick={() => setShowPreview(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
const useStyles = createUseStyles({
  imageWrapper: {
    position: "relative",
    maxWidth: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridTemplateRows: "minmax(300px, auto)",
    margin: "60px 40px",
    gridAutoFlow: "dense",
    gridGap: "10px",
  },
  spinner: {
    left: "50%",
    marginBottom: "100px",
  },
});
export default LandingPage;
