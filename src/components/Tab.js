import React from "react";

import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tab = ({ onTabClick, tab }) => {
  return (
    <ul className={cx("tabs")}>
      <li
        className={cx("item", tab === "BTC" && "active")}
        onClick={() => onTabClick("BTC")}
      >
        BTC
      </li>
      <li
        className={cx("item", tab === "ETH" && "active")}
        onClick={() => onTabClick("ETH")}
      >
        ETH
      </li>
      <li
        className={cx("item", tab === "USDC" && "active")}
        onClick={() => onTabClick("USDC")}
      >
        USDC
      </li>
      <li
        className={cx("item", tab === "USDT" && "active")}
        onClick={() => onTabClick("USDT")}
      >
        USDT
      </li>
      <li
        className={cx("item", tab === "XMR" && "active")}
        onClick={() => onTabClick("XMR")}
      >
        XMR
      </li>
    </ul>
  );
};

export default Tab;
