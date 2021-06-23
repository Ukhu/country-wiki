import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useHistory, useParams, Link } from "react-router-dom";

import { ICountry, ILangauge, ICurrency } from "../../types/country";
import api from "../../utils/api";

import classes from "./CountryInfo.module.scss";

const defaultCountry = {
  name: "",
  population: 0,
  region: "",
  capital: "",
  flag: "",
  alpha3Code: "",
  nativeName: "",
  subregion: "",
  currencies: [{ name: "" }],
  topLevelDomain: [""],
  languages: [{ name: "" }],
  borders: [""],
};

interface ICountryInfoProps {
  countries: ICountry[];
}

const CountryInfo = ({ countries }: ICountryInfoProps) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [selectedCountry, setSelectedCountry] =
    useState<ICountry>(defaultCountry);

  React.useEffect(() => {
    const fetchSingleCountry = async () => {
      const country = await api.fetchSingleCountry(id);
      setSelectedCountry(country);
    };

    if (countries.length === 0) {
      fetchSingleCountry();
    } else {
      const country = countries.filter(
        (country) => country.alpha3Code === id
      )[0];
      setSelectedCountry(country);
    }
  }, [id, countries]);

  const {
    name,
    population,
    region,
    capital,
    flag,
    nativeName,
    subregion,
    currencies,
    topLevelDomain,
    languages,
    borders,
  } = selectedCountry;

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={classes.CountryInfo}>
      <button className={classes.CountryInfo__BackBtn} onClick={goBack}>
        <IoArrowBack />
        Back
      </button>

      <section className={classes.CountryInfo__Main}>
        <img
          className={classes.CountryInfo__Image}
          src={flag}
          alt="Country flag"
          width={560}
        />

        <div className={classes.CountryInfo__MainRight}>
          <h1 className={classes.CountryInfo__Name}>{name}</h1>

          <div className={classes.CountryInfo__Details}>
            <div className={classes.CountryInfo__DetailSection}>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Native Name:
                </span>
                &nbsp;{nativeName}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Population:
                </span>
                &nbsp;{population.toLocaleString()}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>Region:</span>
                &nbsp;{region}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Sub Region:
                </span>
                &nbsp;{subregion}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>Capital:</span>
                &nbsp;{capital}
              </p>
            </div>

            <div className={classes.CountryInfo__DetailSection}>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Top Level Domain:
                </span>
                &nbsp;{topLevelDomain}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Currency:
                </span>
                &nbsp;{getItems(currencies)}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Languages:
                </span>
                &nbsp;{getItems(languages)}
              </p>
            </div>
          </div>

          <div className={classes.CountryInfo__Borders}>
            <p>Border Countries:</p>
            <ul className={classes.CountryInfo__BorderList}>
              {borders.slice(0, 3).map((border) => (
                <li className={classes.CountryInfo__BorderItem} key={border}>
                  <Link
                    to={`/countries/${border}`}
                    className={classes.CountryInfo__BorderItemLink}
                  >
                    {border}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const getItems = (items: ILangauge[] | ICurrency[]) => {
  return items.map((items) => items.name).join(", ");
};

export default CountryInfo;
