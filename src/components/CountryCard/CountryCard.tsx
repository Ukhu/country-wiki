import React from "react";

import classes from "./CountryCard.module.scss";

const CountryCard = () => {
  return (
    <div className={classes.CountryCard}>
      <div className={classes.CountryCard__Image} />
      <div className={classes.CountryCard__Content}>
        <h1 className={classes.CountryCard__Name}>Germany</h1>
        <div className={classes.CountryCard__Fields}>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Population:</span>
            &nbsp;81,770,900
          </p>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Region:</span>
            &nbsp;Europe
          </p>
          <p className={classes.CountryCard__FieldItem}>
            <span className={classes.CountryCard__FieldName}>Capital:</span>
            &nbsp;Berlin
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
