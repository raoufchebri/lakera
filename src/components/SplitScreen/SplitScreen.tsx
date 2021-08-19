import React, { FC, useEffect, useMemo, useState } from "react";
import styles from "./SplitScreen.module.scss";
import Controller from "../Controller";
import { getAllImages } from "../../apis/Images.service";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSplitScreen } from "./SplitScreen.hook";

const MAX_COUNT = 14;

type ImagePair = {
  original: string;
  modified: string;
};

const useStyles = makeStyles((theme) => ({
  progress: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    height: "360px",
  },
}));

const SplitScreen: FC<{ prefix: string }> = ({ prefix }) => {
  const [imagePair, setImagePair] = useState<ImagePair>();
  const [page, setPage] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const { images, loading } = useSplitScreen(prefix);
  const classes = useStyles();

  useEffect(() => {
    if (images && images.length > 0) {
      setImagePair({
        original: images[page][0],
        modified: images[page][1],
      });
    }
  }, [images, page, prefix]);

  useEffect(() => {
    if (loading) {
      setPage(0);
    }
  }, [loading]);

  useEffect(() => {
    if (isPlay) {
      const i_id = setInterval(() => {
        setPage((currCount) => {
          if (currCount >= MAX_COUNT) {
            setIsPlay(false);
            clearInterval(i_id);
            return currCount;
          }
          return currCount + 1;
        });
      }, 600);
    }
  }, [isPlay]);

  const moveForward = () => {
    setPage(page + 1);
  };
  const moveBackward = () => {
    setPage(page - 1);
  };
  const play = () => {
    setPage(0);
    setIsPlay(true);
  };

  return (
    <Grid spacing={1} container>
      {loading ? (
        <Grid item xs={12}>
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            <img
              className={styles.image}
              src={imagePair && imagePair.original}
              alt="Original Image"
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={imagePair && imagePair.modified}
              alt="Modified Image"
              className={styles.image}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              moveForward={moveForward}
              moveBackward={moveBackward}
              play={play}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SplitScreen;
