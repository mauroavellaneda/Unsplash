import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { createUseStyles } from "react-jss";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.global}>
      <Header />
      <LandingPage />
    </div>
  );
};
const useStyles = createUseStyles({
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

export default App;
