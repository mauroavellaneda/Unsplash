import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ImageContainer: {
    position: "relative",
    padding: "2rem 1rem",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    cursor: "pointer",
    transition: "0.5s ease-in-out",
    "&:hover": {
      opacity: 0.5,
    },
  },
});

export default useStyles;