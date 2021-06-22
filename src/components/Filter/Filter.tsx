import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

import { TRegion } from "../../types/country";

import classes from "./Filter.module.scss";

interface IFilterProps {
  region: TRegion;
  selectRegion: (region: TRegion) => void;
}

const Filter = ({ selectRegion, region }: IFilterProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((currState) => !currState);
  };

  const setRegion = (region: TRegion) => {
    selectRegion(region);
    toggleDropdown();
  };

  return (
    <div
      className={classes.Filter}
      role="listbox"
      tabIndex={0}
      onKeyPress={() => toggleDropdown()}
    >
      <div className={classes.Filter__select} onClick={() => toggleDropdown()}>
        <p className={classes.Filter__selectValue}>
          {region !== "All" ? region : "Filter by Region"}
        </p>
        <IoChevronDown className={classes.Filter__icon} />
      </div>
      {showDropdown && (
        <ul className={classes.Filter__dropdown}>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("All")}
            onKeyPress={() => setRegion("All")}
            tabIndex={0}
          >
            All
          </li>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("Africa")}
            onKeyPress={() => setRegion("Africa")}
            tabIndex={0}
          >
            Africa
          </li>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("Americas")}
            onKeyPress={() => setRegion("Americas")}
            tabIndex={0}
          >
            America
          </li>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("Asia")}
            onKeyPress={() => setRegion("Asia")}
            tabIndex={0}
          >
            Asia
          </li>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("Europe")}
            onKeyPress={() => setRegion("Europe")}
            tabIndex={0}
          >
            Europe
          </li>
          <li
            className={classes.Filter__item}
            onClick={() => setRegion("Oceania")}
            onKeyPress={() => setRegion("Oceania")}
            tabIndex={0}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
