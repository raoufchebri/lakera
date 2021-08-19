import { Grid } from "@material-ui/core";
import React, { FC, useState } from "react";
import SplitScreen from "../SplitScreen";
import Item from "../Item";
import { getData } from "../../apis/Data.service";

const SideBySide: FC<{}> = () => {
  const data = getData();
  const [selectedItem, setSelectedItem] = useState(
    data.sequences[0].sequence.prefix
  );

  return (
    <Grid container spacing={3}>
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
