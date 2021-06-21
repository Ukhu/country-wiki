import React from "react";

import classes from "./Homepage.module.scss";

import Header from "../../components/Header";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import CountryCard from "../../components/CountryCard";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className={classes.Homepage__Toolbar}>
        <Search />
        <Filter />
      </div>
      <div className={classes.Homepage__Countries}>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  );
};

export default Homepage;
