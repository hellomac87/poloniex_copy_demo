import React from "react";

import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <section className={cx("container")}>
      <article>
        <h1 className={cx("title")}>MarketList</h1>
      </article>
    </section>
  );
};

export default Banner;
