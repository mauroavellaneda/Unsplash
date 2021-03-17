import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ImageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    height: "37.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 650px)": {
      width: "100%",
      height: "34.5rem",
    },
  },
  image: {
    height: "70%",
    width: "100",

    "@media (max-width: 650px)": {
      position: "absolute",
      width: "90%",
      height: "85%",
      bottom: "0px",
      objectFit: "cover",
    },
  },
  header: {
    display: "flex",
    top: 0,
    position: "absolute",
    marginTop: "1rem",
  },
  user: {
    display: "flex",
  },
  profilePicture: {
    display: "flex",
  },
  fullName: {
    fontWeight: 500,
    fontSize: "1.5rem",
  },
  location: {
    bottom: 10,
    position: "absolute",
    "@media (max-width: 650px)": {
      left: 0,
    },
  },
});
export default useStyles;
