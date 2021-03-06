import React, { useState, useEffect, useCallback } from "react";
import useStyles from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "@material-ui/core/Button";
import { Dialog, DialogActions } from "@material-ui/core";
import Image from "../Image/Image";
import Spinner from "react-spinkit";
import ImageSlider from "../modal/ImageSlider";
import fetchData from "../../modules/data";

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
    if (selectedImage) {
      const selectedImageIndex = images?.findIndex(
        (image) => image.id === selectedImage.id
      );
      if (selectedImageIndex === 0) {
        setprevDisabled(true);
      } else {
        setprevDisabled(false);
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
              alt={image.alt_description}
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
export default LandingPage;
