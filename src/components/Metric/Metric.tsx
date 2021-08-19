import React from "react";
import styles from "./Metric.module.scss";

const Metric = ({ value = 100, title = "ORGINAL", secondary = false }) => {
  const width = `${0.08 * value}rem`;
  const barStyle = secondary ? `${styles.bar} ${styles.secondary}` : styles.bar;
  return (
    <div className={styles.metric}>
      <p className={styles.title}>{title}</p>
      <span className={barStyle} style={{ width }} />
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default Metric;
