import React from "react";
import { FaRegMoon } from "react-icons/fa";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Header__brand}>Where in the world?</h1>

      <div className={classes.Header__theme}>
        <FaRegMoon className={classes.Header__icon} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
