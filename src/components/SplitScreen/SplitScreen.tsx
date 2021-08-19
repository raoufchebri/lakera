import React, { FC } from "react";
import styles from "./SplitScreen.module.scss";
import Controller from "../Controller";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSplitScreen } from "./SplitScreen.hook";
import ScatterPlot from "../ScatterPlot";

const useStyles = makeStyles((theme) => ({
  progressWrapper: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    height: "360px",
  },
  progress: {
    margin: "auto",
  },
}));

const SplitScreen: FC<{ prefix: string }> = ({ prefix }) => {
  const { loading, images, moveBackward, play, moveForward, getElement } =
    useSplitScreen(prefix);
  const classes = useStyles();

  return (
    <Grid spacing={1} container>
      {loading ? (
        <Grid item xs={12}>
          <div className={classes.progressWrapper}>
            <CircularProgress className={classes.progress} />
          </div>
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            <img
              className={styles.image}
              src={images && images.original}
              alt="Original Image"
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={images && images.modified}
              alt="Modified Image"
              className={styles.image}
            />
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <ScatterPlot getElement={getElement} />
      </Grid>
      <Grid item xs={12}>
        <Controller
          moveForward={moveForward}
          moveBackward={moveBackward}
          play={play}
        />
      </Grid>
    </Grid>
  );
};

export default SplitScreen;
