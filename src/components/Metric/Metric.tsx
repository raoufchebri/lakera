import React from "react";
import { useStyles } from "./Metric.styled";

const Metric = ({ value = 100, title = "ORGINAL", secondary = false }) => {
  const classes = useStyles();
  const width = `${0.08 * value}rem`;
  const barStyle = secondary
    ? `${classes.bar} ${classes.secondary}`
    : classes.bar;
  return (
    <div className={classes.metric}>
      <p className={classes.title}>{title}</p>
      <span className={barStyle} style={{ width }} />
      <p className={classes.value}>{value}</p>
    </div>
  );
};

export default Metric;
