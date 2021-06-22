import React, { useState } from "react";
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
      <h1 className={classes.Header__Brand}>Where in the world?</h1>

      <div className={classes.Header__Theme} onClick={toggleTheme}>
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
