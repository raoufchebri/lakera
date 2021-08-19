import React, { FC, MouseEventHandler, SetStateAction } from "react";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core";

type ControllerProps = {
  moveForward: Function;
  moveBackward: Function;
  play: Function;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      justifyContent: "center",
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

const Controller: FC<ControllerProps> = ({
  moveForward,
  moveBackward,
  play,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.controls}>
      <IconButton aria-label="previous" onClick={() => moveBackward()}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton aria-label="play/pause" onClick={() => play()}>
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
      <IconButton aria-label="next" onClick={() => moveForward()}>
        <SkipNextIcon />
      </IconButton>
    </div>
  );
};

export default Controller;
