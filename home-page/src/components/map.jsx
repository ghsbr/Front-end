import React, { Component } from "react";
import "../Home.css";
import { temp } from "./data/temperature.js";
import { pol } from "./data/pollution";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  config = {
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
    }
  };

  componentDidMount() {
    this.renderMap();
  }

  mapData(country) {
    switch (this.props.id) {
      case "temperature":
        return temp[country];
      case "pollution":
        return pol[country];
      default:
        break;
    }
  }

  renderMap() {
    let map = this.myRef.current;
    let country = this.props.selectedCountry.toLowerCase();
    let data = this.mapData(country);

    window.$(".jvectormap-container").remove();

    window.$(() => {
      window.$(map).vectorMap({
        map: country + "_merc",
        backgroundColor: this.config.backgroundColor,
        regionStyle: this.config.regionStyle,
        zoomMax: 4,
        zoomMin: 1,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: data,
              scale: ["#5df22c", "#fa1807"],
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
