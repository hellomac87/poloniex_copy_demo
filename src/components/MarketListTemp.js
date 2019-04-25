import React from "react";

import styles from "./MarketListTemp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MarketListTemp = ({
  marketList,
  marketName,
  orderType,
  sortType,
  onSortClick
}) => {
  return (
    <div className={cx("container")}>
      <h1 className={cx("marketName")}>{marketName} Market</h1>
      <ul className={cx("header")}>
        <li>
          <span>ASSET</span> <span className={cx("arrow")} />
        </li>
        <li onClick={() => onSortClick("last")}>
          <span>LAST PRICE</span>{" "}
          <span
            className={cx(
              "arrow",
              sortType === "last" && "active",
              !orderType && "down"
            )}
          />
        </li>
        <li onClick={() => onSortClick("percentChange")}>
          <span>24H CHANGE</span>{" "}
          <span
            className={cx(
              "arrow",
              sortType === "percentChange" && "active",
              !orderType && "down"
            )}
          />
        </li>
        <li onClick={() => onSortClick("high24hr")}>
          <span>24H HIGH</span>{" "}
          <span
            className={cx(
              "arrow",
              sortType === "high24hr" && "active",
              !orderType && "down"
            )}
          />
        </li>
        <li onClick={() => onSortClick("low24hr")}>
          <span>24H LOW</span>{" "}
          <span
            className={cx(
              "arrow",
              sortType === "low24hr" && "active",
              !orderType && "down"
            )}
          />
        </li>
        {/* <li>highestBid</li> */}
        {/* <li>lowestAsk</li> */}
        {/* <li>quoteVolume</li> */}
        <li onClick={() => onSortClick("baseVolume")}>
          <span>24H VOLUME</span>{" "}
          <span
            className={cx(
              "arrow",
              sortType === "baseVolume" && "active",
              !orderType && "down"
            )}
          />
        </li>
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
