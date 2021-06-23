import React, { CSSProperties } from "react";
import { useHistory } from "react-router-dom";

import { ICountry } from "../../types/country";
import classes from "./CountryCard.module.scss";

interface ICountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps) => {
  const history = useHistory();

  const { name, population, region, capital, flag, cioc } = country;

  const selectCountry = () => {
    history.push(`/countries/${cioc}`);
  };

  return (
    <div
      className={classes.CountryCard}
      tabIndex={0}
      onClick={selectCountry}
      onKeyPress={selectCountry}
    >
      <div
        className={classes.CountryCard__Image}
        style={{ "--countryFlag": `url(${flag})` } as CSSProperties}
      />
      <div className={classes.CountryCard__Content}>
        <h1 className={classes.CountryCard__Name}>{name}</h1>
        <div className={classes.CountryCard__Fields}>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Population:</span>
            &nbsp;{population.toLocaleString()}
          </p>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Region:</span>
            &nbsp;{region}
          </p>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Capital:</span>
            &nbsp;{capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
