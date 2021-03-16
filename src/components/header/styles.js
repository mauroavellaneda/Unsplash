import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgb(255,255,255)",
    height: "62px",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    zIndex: "11",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 0 1px rgba(1, 0, 0, 0.1)",
  },
  searchWrapper: {
    width: "100%",
    marginLeft: "18px",
  },
  searchForm: {
    height: "40px",
    borderRadius: "24px",
    backgroundColor: "#eee",
    border: "1px solid transparent",
    width: "80%",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    "&:hover": {
      borderColor: "#d1d1d1",
    },
    "&:focus-within": {
      backgroundColor: "white",
      borderColor: "#d1d1d1",
    },
  },
  searchButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "none",
    background: "none",
    opacity: 0.6,
    color: "rgb(70, 70, 70)",
    "&:hover": {
      color: "black",
      cursor: "pointer",
    },
  },
  projectTitle: {
    fontSize: "20px",
    textDecoration: "none",
    color: "black",
    marginRight: "30px",
    justifySelf: "flex-end",
    fontWeight: "bold",
    letterSpacing: "5px",
    cursor: "pointer",
  },
  logo: {
    width: "64px",
    height: "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  searchInput: {
    background: "none",
    border: "none",
    fontSize: "14px",
    fontWeight: "450",
    width: "100%",
    paddingRight: "10px",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
  "@media (max-width: 865px)": {
    projectTitle: {
      display: "none",
    },
  },
});

export default useStyles;
