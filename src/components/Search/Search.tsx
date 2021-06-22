import React from "react";

import classes from "./Search.module.scss";

import { FaSistrix } from "react-icons/fa";

interface ISearchProps {
  query: string
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ query, handleSearch}: ISearchProps) => {
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
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
