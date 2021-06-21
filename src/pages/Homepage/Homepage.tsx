import React from "react";

import classes from "./Homepage.module.scss";

import Header from "../../components/Header";
import Search from "../../components/Search";
import Filter from "../../components/Filter";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className={classes.Homepage__toolbar}>
        <Search />
        <Filter />
      </div>
    </div>
  );
};

export default Homepage;
