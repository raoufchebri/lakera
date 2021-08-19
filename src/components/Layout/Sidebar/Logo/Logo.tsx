import React from "react";
import { LOGO_URL } from "../../../../constants/images";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img alt="" className={styles.logo} src={LOGO_URL} />
    </div>
  );
};

export default Logo;
