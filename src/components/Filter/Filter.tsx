import React, { useState } from "react";

import classes from "./Filter.module.scss";

import { FaAngleDown } from "react-icons/fa";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((currState) => !currState);
  };

  return (
    <div className={classes.Filter} role="listbox">
      <div className={classes.Filter__select} onClick={() => toggleDropdown()}>
        <p className={classes.Filter__selectValue}>Filter by Region</p>
        <FaAngleDown className={classes.Filter__icon} />
      </div>
      {showDropdown && (
        <ul className={classes.Filter__dropdown}>
          <li className={classes.Filter__item}>Africa</li>
          <li className={classes.Filter__item}>America</li>
          <li className={classes.Filter__item}>Asia</li>
          <li className={classes.Filter__item}>Europe</li>
          <li className={classes.Filter__item}>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
