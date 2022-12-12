import React, { Fragment } from "react";
import { Chart, registerables } from 'chart.js';
import { Pie } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";
// import Issues from "../components/Issues";

// import { Chart,ChartDataLabels  } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const data = {
  labels: [
    "Red","Blue","Green","Yellow","Pink"
  ],
  datasets: [
    {
      categoryPercentage: 1,
      label: "Sprint Velocity",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(99, 99, 234, 1)",
        "rgba(99, 99, 234, 0.7)",
        "rgba(99, 99, 234, 0.4)",
        "rgba(99, 99, 234, 0.1)",
        "rgba(236, 91, 86, 1)"
      ],
      borderWidth: 0
    }
  ]
};

const options = {
    maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
        display: false,
      grid: {
        display: false,
        drawBorder: false,
        zeroLineColor: 'transparent'
      }
    },
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: "Sprint Velocity",
      padding: {
        bottom: 20
      },
      weight: "bold",
      color: "#00325c",
      font: {
        size: 13
      },
      align: "center"
    },
    datalabels: {
    //   display: true,
      color: "white",
    //   align: "bottom",
    //   padding: {
    //     right: 0
    //   },
      labels: {
        // padding: { top: 1 },
        title: {
          font: {
            weight: "bold",
            size: 20,
            color: "white",
          }
        }
        // value: {
        //   color: "green"
        // }
      }
      // formatter: function (value) {
      //   return "\n" + value;
      // }
    }
  }
};
// style={{height:'100px',width:'200px'}}
const PieChart = () => (
    <div style={{height:'372px',width:'372px', marginBottom:"1%", padding:"1%", display:"flex", flexDirection:"row"}}>
      <Pie data={data} options={options}/>
      <Pie data={data} options={options}/>
    </div>
);

export default PieChart;
