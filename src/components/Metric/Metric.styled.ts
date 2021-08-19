import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bar: {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "normal",
    width: "8rem",
    height: "0.25rem",
    backgroundColor: "#4c4c66",
    borderRadius: 40,
    marginRight: "0.5rem",
  },

  secondary: {
    opacity: 0.5,
  },

  title: {
    color: "#4c4c66",
    display: "flex",
    opacity: 0.3,
    marginRight: "0.5rem",
    textTransform: "uppercase",
    fontFamily: "Helvetica Neue",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: "normal",
    margin: 0,
  },

  value: {
    color: "6f6c99",
    position: "absolute",
    right: 0,
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "normal",
    opacity: 0.8,
    margin: 0,
  },

  metric: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    position: "relative",
    margin: "0.5rem",
  },
}));
