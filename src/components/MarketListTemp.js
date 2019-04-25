import React from "react";

import styles from "./MarketListTemp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MarketListTemp = ({ marketList, marketName }) => {
  return (
    <div className={cx("container")}>
      <h1 className={cx("marketName")}>{marketName} Market</h1>
      <ul className={cx("header")}>
        <li>ASSET</li>
        <li>LAST PRICE</li>
        <li>24H CHANGE</li>
        <li>24H HIGH</li>
        <li>24H LOW</li>
        {/* <li>highestBid</li> */}
        {/* <li>lowestAsk</li> */}
        {/* <li>quoteVolume</li> */}
        <li>24H VOLUME</li>
      </ul>
      <ul className={cx("list")}>
        {marketList.map((l, i) => {
          // const marketName = l[0].split("_")[0];
          const coinName = l[0];
          const values = l[1];

          return (
            <li key={values.id} className={cx("item")}>
              <div>{coinName}</div>
              <span> {values.last}</span>
              <span
                className={cx(
                  values.percentChange > 0 && "up",
                  values.percentChange < 0 && "down"
                )}
              >
                {" "}
                {(values.percentChange * 100).toFixed(2)} %
              </span>

              <span> {values.high24hr}</span>
              <span> {values.low24hr}</span>

              {/* <span> {values.highestBid}</span> */}
              {/* <span>id: {values.id}</span>  */}
              {/* <span>isFrozen: {values.isFrozen}</span>  */}
              {/* <span> {values.lowestAsk}</span> */}

              {/* <span> {values.quoteVolume}</span> */}
              <span> {parseInt(values.baseVolume).toFixed(3)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MarketListTemp;
