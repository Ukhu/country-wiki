import React from "react";
import { IoArrowBack } from "react-icons/io5";

import Header from "../../components/Header";

import classes from "./CountryInfo.module.scss";

const CountryInfo = () => {
  return (
    <div className={classes.CountryInfo}>
      <Header />

      <button className={classes.CountryInfo__BackBtn}>
        <IoArrowBack />
        Back
      </button>

      <section className={classes.CountryInfo__Main}>
        <img
          className={classes.CountryInfo__Image}
          src="https://restcountries.eu/data/bel.svg"
          alt="Country flag"
          width={560}
        />

        <div className={classes.CountryInfo__MainRight}>
          <h1 className={classes.CountryInfo__Name}>Belgium</h1>

          <div className={classes.CountryInfo__Details}>
            <div className={classes.CountryInfo__DetailSection}>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Native Name:
                </span>
                &nbsp;Belgie
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Population:
                </span>
                &nbsp;{(11319511).toLocaleString()}
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>Region:</span>
                &nbsp;Europe
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Sub Region:
                </span>
                &nbsp;Western Europe
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>Capital:</span>
                &nbsp;Brussels
              </p>
            </div>

            <div className={classes.CountryInfo__DetailSection}>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Top Level Domain:
                </span>
                &nbsp;.be
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Currency:
                </span>
                &nbsp;Euro
              </p>
              <p>
                <span className={classes.CountryInfo__FieldName}>
                  Languages:
                </span>
                &nbsp;Dutch, French, German
              </p>
            </div>
          </div>

          <div className={classes.CountryInfo__Borders}>
            <p>Border Countries:</p>
            <ul className={classes.CountryInfo__BorderList}>
              <li className={classes.CountryInfo__BorderItem}>France</li>
              <li className={classes.CountryInfo__BorderItem}>Germany</li>
              <li className={classes.CountryInfo__BorderItem}>Netherlands</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryInfo;
