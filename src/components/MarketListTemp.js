import React from "react";

import styles from "./MarketListTemp.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MarketListTemp = ({ obj, marketName }) => {
  return (
    <div className={cx("container")}>
      <h1>{marketName}</h1>
      <ul className={cx("header")}>
        <li>coinName</li>
        <li>last price</li>
        <li>percentChange</li>

        <li>high24hr</li>
        <li>low24hr</li>

        {/* <li>highestBid</li> */}
        {/* <li>lowestAsk</li> */}
        {/* <li>quoteVolume</li> */}

        <li>baseVolume</li>
      </ul>
      <ul className={cx("list")}>
        {Object.entries(obj).map((l, i) => {
          // const marketName = l[0].split("_")[0];
          const coinName = l[0];
          const values = l[1];

          return (
            <li key={values.id} className={cx("item")}>
              <div>{coinName}</div>
              <span> {values.last}</span>
              <span> {values.percentChange} %</span>

              <span> {values.high24hr}</span>
              <span> {values.low24hr}</span>

              {/* <span> {values.highestBid}</span> */}
              {/* <span>id: {values.id}</span>  */}
              {/* <span>isFrozen: {values.isFrozen}</span>  */}
              {/* <span> {values.lowestAsk}</span> */}

              {/* <span> {values.quoteVolume}</span> */}
              <span> {values.baseVolume}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MarketListTemp;
