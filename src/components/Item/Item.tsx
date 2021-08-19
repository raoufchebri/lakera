import React, { FC, useEffect, useMemo, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Metric from "../Metric";
import { CheckCircleOutline } from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useStyles } from "./Item.styled";
import { getImage } from "../../apis/Images.service";
import { useItem } from "./Item.hook";

type ItemProps = {
  title: string;
  selected?: boolean;
  success?: boolean;
  original: number;
  modified: number;
};

const Item: FC<ItemProps> = ({
  title,
  selected,
  success,
  original,
  modified,
}) => {
  const classes = useStyles();
  const { image, onEnter, onLeave, isHover } = useItem(title);

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {!isHover && !selected && <div className={classes.default} />}
      {isHover && !selected && <div className={classes.hover} />}
      {selected && <div className={classes.selected} />}
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Transformation thumbnail"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.result}>
              {success ? (
                <CheckCircleOutline className={classes.success} />
              ) : (
                <CancelOutlinedIcon className={classes.failure} />
              )}
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </div>
            <Metric value={original} title={"original"} />
            <Metric value={modified} title={"modified"} secondary />
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Item;
