import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoSunny } from "react-icons/io5";

import classes from "./Header.module.scss";

type TTheme = "light" | "dark";

const Header = () => {
  const [theme, setTheme] = useState<TTheme>("light");

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header className={classes.Header}>
      <h1 className={classes.Header__Brand}>
        <Link to="/" className={classes.Header__Link}>
          Where in the world?
        </Link>
      </h1>

      <div
        className={classes.Header__Theme}
        onClick={toggleTheme}
        onKeyPress={toggleTheme}
        tabIndex={0}
      >
        {theme === "light" ? (
          <IoMoonOutline className={classes.Header__Icon} />
        ) : (
          <IoSunny className={classes.Header__Icon} />
        )}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </header>
  );
};

export default Header;
