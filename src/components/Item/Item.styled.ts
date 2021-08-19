import { green, red } from "@material-ui/core/colors";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      cursor: "pointer",
    },
    card: {
      display: "flex",
      padding: "16px",
      boxShadow: "none",
      position: "relative",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      width: "100%",
      paddingBottom: "0px",
    },
    cover: {
      width: 124,
      height: 124,
    },
    result: {
      display: "flex",
    },
    success: {
      color: green[500],
      marginRight: 8,
    },
    failure: {
      color: red[500],
      marginRight: 8,
    },
    selected: {
      background: "#53B9EA",
      width: 5,
    },
    hover: {
      background: "#53B9EA",
      width: 5,
      opacity: 0.2,
    },
    default: {
      background: "#FFFFFF",
      width: 5,
    },
  })
);
