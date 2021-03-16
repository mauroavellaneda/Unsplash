import React from "react";
import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.global}>
      <Header />
      <LandingPage />
    </div>
  );
};
export default App;
