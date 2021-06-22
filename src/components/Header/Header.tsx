import React from "react";
import { IoMoonOutline } from "react-icons/io5";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Header__Brand}>Where in the world?</h1>

      <div className={classes.Header__Theme}>
        <IoMoonOutline className={classes.Header__Icon} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
