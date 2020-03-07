import React, { Component } from "react";
import "../Home.css";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    let map = this.myRef.current;
    let country = this.props.selectedCountry.toLowerCase();

    window.$(".jvectormap-container").remove();

    window.$(() => {
      window.$(map).vectorMap({
        map: country + "_merc",
        backgroundColor: "#383f47",
        regionStyle: {
          initial: {
            fill: "white",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            fill: "red",
            "fill-opacity": 0.8,
            cursor: "pointer"
          }
        },
        zoomMax: 4,
        zoomMin: 1,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: this.props.data,
              scale: ["#bff5ae", "#5df22c"],
              normalizeFunction: "polynomial"
            }
          ]
        }
      });
    });
  }

  render() {
    this.renderMap();
    return <div className="map" ref={this.myRef} id={this.props.id}></div>;
  }
}
