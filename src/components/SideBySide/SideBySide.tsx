import { Grid } from "@material-ui/core";
import React, { FC, useState } from "react";
import SplitScreen from "../SplitScreen";
import Item from "../Item";
import { useStyles } from "./SideBySide.styled";
import { getData } from "../../apis/Data.service";
import { getImage } from "../../apis/Images.service";

const SideBySide: FC<{}> = () => {
  const data = getData();
  const [selectedItem, setSelectedItem] = useState(
    data.sequences[0].sequence.prefix
  );

  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item md={8} sm={12}>
        <SplitScreen prefix={selectedItem} />
      </Grid>
      <Grid item md={4}>
        {data.sequences.map(({ sequence }) => (
          <div onClick={() => setSelectedItem(sequence.prefix)}>
            <Item
              key={sequence.prefix}
              title={sequence.prefix}
              success={
                Math.abs(sequence.metric_original - sequence.metric_modified) <
                0.05
              }
              original={Math.floor(sequence.metric_original * 100)}
              modified={Math.floor(sequence.metric_modified * 100)}
              selected={sequence.prefix == selectedItem}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default SideBySide;
