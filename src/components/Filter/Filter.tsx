import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import { TRegion } from "../../types/country";

import classes from "./Filter.module.scss";

interface IFilterProps {
  region: TRegion
  selectRegion: (region: TRegion) => void
}

const Filter = ({ selectRegion, region }: IFilterProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((currState) => !currState);
  };

  const setRegion = (region: TRegion) => {
    selectRegion(region)
    toggleDropdown()
  }

  return (
    <div className={classes.Filter} role="listbox">
      <div className={classes.Filter__select} onClick={() => toggleDropdown()}>
        <p className={classes.Filter__selectValue}>{region !== "All" ? region : "Filter by Region"}</p>
        <FaAngleDown className={classes.Filter__icon} />
      </div>
      {showDropdown && (
        <ul className={classes.Filter__dropdown}>
          <li className={classes.Filter__item} onClick={() => setRegion("All")}>All</li>
          <li className={classes.Filter__item} onClick={() => setRegion("Africa")}>Africa</li>
          <li className={classes.Filter__item} onClick={() => setRegion("Americas")}>America</li>
          <li className={classes.Filter__item} onClick={() => setRegion("Asia")}>Asia</li>
          <li className={classes.Filter__item} onClick={() => setRegion("Europe")}>Europe</li>
          <li className={classes.Filter__item} onClick={() => setRegion("Oceania")}>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
