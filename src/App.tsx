import React from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import styles from "./App.module.scss";
import SideBySide from "./components/SideBySide";
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Header />
        <SideBySide />
      </Grid>
    </Grid>
  );
}

export default App;
