import React, { Component } from "react";
import "../Home.css";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  renderMap() {
    const map = this.myRef.current;

    window.$(".jvectormap-container").remove();

    window.$(() => {
      window.$(map).vectorMap({
        map: this.props.selectedCountry.toLowerCase() + "_merc",
        backgroundColor: "white",
        regionStyle: {
          initial: {
            fill: "#36ff3c",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            fill: "green",
            "fill-opacity": 0.8,
            cursor: "pointer"
          }
        },
        zoomMax: 1,
        zoomMin: 1,
        zoomOnScroll: false
      });
    });
  }

  render() {
    this.renderMap();
    return <div className="map" ref={this.myRef}></div>;
  }
}
