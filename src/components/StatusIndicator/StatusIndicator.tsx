import React from "react";

import NotfoundLogo from "../../images/404.svg";
import ErrorLogo from "../../images/something-wrong.svg";

import classes from "./StatusIndicator.module.scss";

interface IStatusIndicatorProps {
  type: "not found" | "error";
}

const StatusIndicator = ({ type }: IStatusIndicatorProps) => {
  console.log(type);
  return (
    <div className={classes.StatusIndicator}>
      {type === "not found" ? (
        <React.Fragment>
          <p className={classes.StatusIndicator__Message}>
            We couldn't find any results!
          </p>
          <img src={NotfoundLogo} alt="Not found" width={400} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className={classes.StatusIndicator__Message}>
            Something went wrong, unfortunately!
          </p>
          <img src={ErrorLogo} alt="Something went wrong" width={400} />
        </React.Fragment>
      )}
    </div>
  );
};

export default StatusIndicator;
