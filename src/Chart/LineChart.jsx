import React, { Fragment } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";
// import Issues from "../components/Issues";

// import { Chart,ChartDataLabels  } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables);
// Chart.register(ChartDataLabels);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  elements: {
    line: {
        tension : 0.4  // smooth lines
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
    datalabels: {
      display: false,
    }
  }
};
const LineChart = () => (
  <div style={{height :"300px", weight : "901px"}}>
    <Line data={data} options={options}/>
  </div>
);

export default LineChart;
