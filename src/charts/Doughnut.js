import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import axios from "axios";


//chart here 

function DoughnutChart() {

  const data = {
    labels: [
      //category
      "Rent",
      "Food",
      "Bills",
      "Shopping",
      "Transportation",
      "Entertainment",
      "other...",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 15],
        //expense
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "green",
          "purple",
          "orange",
          "pink",
        ],
      },
    ],
  };
  return (
    <div>
      <h1>Chart</h1>

      <div style={{ width: "750px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default DoughnutChart;
