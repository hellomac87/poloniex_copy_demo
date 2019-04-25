import React from "react";

import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tab = ({ onTabClick, marketName }) => {
  return (
    <ul className={cx("tabs")}>
      <li
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onTabClick("BTC");
          }
        }}
        className={cx("item", marketName === "BTC" && "active")}
        onClick={() => onTabClick("BTC")}
      >
        BTC
      </li>
      <li
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onTabClick("ETH");
          }
        }}
        className={cx("item", marketName === "ETH" && "active")}
        onClick={() => onTabClick("ETH")}
      >
        ETH
      </li>
      <li
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onTabClick("USDC");
          }
        }}
        className={cx("item", marketName === "USDC" && "active")}
        onClick={() => onTabClick("USDC")}
      >
        USDC
      </li>
      <li
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onTabClick("USDT");
          }
        }}
        className={cx("item", marketName === "USDT" && "active")}
        onClick={() => onTabClick("USDT")}
      >
        USDT
      </li>
      <li
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onTabClick("XMR");
          }
        }}
        className={cx("item", marketName === "XMR" && "active")}
        onClick={() => onTabClick("XMR")}
      >
        XMR
      </li>
    </ul>
  );
};

export default Tab;
