import React, { useState } from "react";

import { ICountry, TRegion } from "../../types/country";
import api from "../../utils/api";
import { getCountries } from '../../utils/countries'

import Header from "../../components/Header";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import CountryCard from "../../components/CountryCard";
import StatusIndicator from "../../components/StatusIndicator";

import classes from "./Homepage.module.scss";

type TErrorType = "not found" | "error";

const Homepage = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [errorType, setErrorType] = useState<TErrorType | null>(null);
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState<TRegion>("All")

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setQuery(value)
  }

  const selectRegion = (region: TRegion) => {
    setRegion(region)
  }

  return (
    <div>
      <Header />
      <div className={classes.Homepage__Toolbar}>
        <Search handleSearch={handleSearch} query={query} />
        <Filter selectRegion={selectRegion} region={region} />
      </div>
      {errorType ? (
        <StatusIndicator type={errorType} />
      ) : (
        <div className={classes.Homepage__Countries}>
          {getCountries(countries, region, query).map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};


export default Homepage;
