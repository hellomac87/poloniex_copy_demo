import React from "react";

import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("container")}>
      <a
        className={cx("github")}
        href="https://github.com/hellomac87/poloniex_copy_demo"
        target="_blank"
      />
      <span>github repository</span>
    </footer>
  );
};

export default Footer;
