import React, { Component } from "react";
import Chart from "chart.js";
import style from "../Home.css";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.myRef.current.getContext("2d");

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: [
          "regione1",
          "regione2",
          "regione3",
          "regione4",
          "regione5",
          "regione6",
          "regione7",
          "regione8",
          "regione9",
          "regione10"
        ],
        datasets: [
          {
            label: "temperature",
            data: [12, 19, 3, 5, 2, 3, 23, 18, 7, 10],
            backgroundColor: "#36ff3c",
            borderColor: "black",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className="graph">
        <canvas ref={this.myRef} />
      </div>
    );
  }
}

export default Graph;
