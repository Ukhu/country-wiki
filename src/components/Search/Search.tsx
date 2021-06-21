import React from "react";

import classes from "./Search.module.scss";

import { FaSistrix } from "react-icons/fa";

const Search = () => {
  return (
    <div className={classes.Search}>
      <div className={classes.Search__icon}>
        <FaSistrix />
      </div>
      <input
        className={classes.Search__input}
        type="text"
        placeholder="Search for a country"
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
