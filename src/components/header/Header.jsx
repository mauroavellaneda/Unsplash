import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div data-cy="header-container" className={classes.container}>
      <div className={classes.logo}>
        <DynamicFeedIcon style={{ fontSize: "35px", color: "black" }} />
      </div>

      <div data-cy="search-wrapper" className={classes.searchWrapper}>
        <div className={classes.searchForm}>
          <button type="submit" className={classes.searchButton}>
            <SearchIcon />
          </button>
          <input
            data-cy="search-bar"
            className={classes.searchInput}
            placeholder="Search photos(comming soon...)"
            autoComplete="off"
          ></input>
        </div>
      </div>
      <a
        data-cy="header-title"
        className={classes.projectTitle}
        href={"https://github.com/mauroavellaneda"}
        target="_blank"
        rel="noreferrer noopener"
      >
        Unsplash Challenge
      </a>
    </div>
  );
};
export default Header;
