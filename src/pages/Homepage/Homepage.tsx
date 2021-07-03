import React, { useState } from "react";

import { ICountry, TRegion } from "../../types/country";
import { getCountries } from "../../utils/countries";

import Search from "../../components/Search";
import Filter from "../../components/Filter";
import CountryCard from "../../components/CountryCard";
import StatusIndicator from "../../components/StatusIndicator";

import classes from "./Homepage.module.scss";

type TErrorType = "not found" | "error";

interface IHomepageProps {
  countries: ICountry[];
  error: TErrorType | null;
}

const Homepage = ({ countries, error }: IHomepageProps) => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<TRegion>("All");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const selectRegion = (region: TRegion) => {
    setRegion(region);
  };

  return (
    <div>
      <div className={classes.Homepage__Toolbar}>
        <Search handleSearch={handleSearch} query={query} />
        <Filter selectRegion={selectRegion} region={region} />
      </div>
      {error ? (
        <StatusIndicator type={error} />
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
