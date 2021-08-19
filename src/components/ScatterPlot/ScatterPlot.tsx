import React, { FC, memo, MouseEventHandler } from "react";
import { Scatter } from "react-chartjs-2";

// const rand = () => Math.random();

const data = {
  datasets: [
    {
      label: "Original",
      data: [
        { x: 0, y: 0.5196822641380676 },
        { x: 1, y: 0.8086377941092775 },
        { x: 2, y: 0.2035472980070283 },
        { x: 3, y: 0.36042113945175025 },
        { x: 4, y: 0.16201916390310367 },
        { x: 5, y: 0.42006744384554917 },
        { x: 6, y: 0.7280247177339885 },
        { x: 7, y: 0.9757164903544389 },
        { x: 8, y: 0.6390291303397757 },
        { x: 9, y: 0.05052427514034874 },
        { x: 10, y: 0.8196707361747013 },
        { x: 11, y: 0.5246497818548355 },
        { x: 12, y: 0.4447677313708447 },
        { x: 13, y: 0.5037865002730353 },
        { x: 14, y: 0.5593426814685281 },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Modified",
      data: [
        { x: 0, y: 0.6771128893841207 },
        { x: 1, y: 0.768601148928151 },
        { x: 2, y: 0.9666007305047482 },
        { x: 3, y: 0.05203404970630632 },
        { x: 4, y: 0.13918922538986944 },
        { x: 5, y: 0.9242087315853611 },
        { x: 6, y: 0.4828179723709025 },
        { x: 7, y: 0.8891937083744608 },
        { x: 8, y: 0.43999277455593555 },
        { x: 9, y: 0.44793032187346693 },
        { x: 10, y: 0.6498431732557908 },
        { x: 11, y: 0.9244677090865754 },
        { x: 12, y: 0.6190252101764586 },
        { x: 13, y: 0.6372296595669069 },
        { x: 14, y: 0.3911894976589865 },
      ],
      backgroundColor: "rgba(83, 185, 234, 1)",
    },
  ],
};

const options = {
  animation: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    scaleShowLabels: false,
    legend: {
      display: false,
    },
  },
};

type ScatterPlotProps = {
  getElement: any;
};

const ScatterPlot: FC<ScatterPlotProps> = ({ getElement }) => {
  return (
    <Scatter
      data={data}
      options={options}
      height={40}
      getElementAtEvent={getElement}
    />
  );
};

export default memo(ScatterPlot);
