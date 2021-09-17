import React from "react";
import classes from "./New.module.css";
import Card from "../Components/Card";
import Skeleton from "react-loading-skeleton";

function LoadingNew() {
  return (
    <li className={classes.list}>
      <Card>
        <div className={classes.contain}>
          <div className={classes.wrapper}>
            <Skeleton height={250} />
          </div>
          <h3>
            <Skeleton />
          </h3>
          <p>
            <Skeleton />
          </p>
        </div>
      </Card>
    </li>
  );
}

export default LoadingNew;
