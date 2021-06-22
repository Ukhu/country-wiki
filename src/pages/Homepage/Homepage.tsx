import React, { useState } from "react";

import classes from "./Homepage.module.scss";
import api from "../../utils/api";
import { ICountry } from "../../types/country";

import Header from "../../components/Header";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import CountryCard from "../../components/CountryCard";
import StatusIndicator from "../../components/StatusIndicator";

type TErrorType = "not found" | "error";

const Homepage = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [errorType, setErrorType] = useState<TErrorType | null>(null);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchedCountries = await api.fetchCountries();
        fetchedCountries.length === 0
          ? setErrorType("not found")
          : setCountries(fetchedCountries);
      } catch (err) {
        setErrorType("error");
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.Homepage__Toolbar}>
        <Search />
        <Filter />
      </div>
      {errorType ? (
        <StatusIndicator type={errorType} />
      ) : (
        <div className={classes.Homepage__Countries}>
          {countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
