import React from "react";

import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tab = ({ onTabClick, marketName }) => {
  return (
    <ul className={cx("tabs")}>
      <li
        className={cx("item", marketName === "BTC" && "active")}
        onClick={() => onTabClick("BTC")}
      >
        BTC
      </li>
      <li
        className={cx("item", marketName === "ETH" && "active")}
        onClick={() => onTabClick("ETH")}
      >
        ETH
      </li>
      <li
        className={cx("item", marketName === "USDC" && "active")}
        onClick={() => onTabClick("USDC")}
      >
        USDC
      </li>
      <li
        className={cx("item", marketName === "USDT" && "active")}
        onClick={() => onTabClick("USDT")}
      >
        USDT
      </li>
      <li
        className={cx("item", marketName === "XMR" && "active")}
        onClick={() => onTabClick("XMR")}
      >
        XMR
      </li>
    </ul>
  );
};

export default Tab;
