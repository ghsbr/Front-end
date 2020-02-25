import React, { Component } from "react";
import "../Home.css";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  config = {
    backgroundColor: "#383f47",
    regionStyle: {
      initial: {
        fill: "#36ff3c",
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

  renderMap() {
    let map = this.myRef.current;
    window.$(".jvectormap-container").remove();

    window.$(() => {
      window.$(map).vectorMap({
        map: this.props.selectedCountry.toLowerCase() + "_merc",
        backgroundColor: this.config.backgroundColor,
        regionStyle: this.config.regionStyle,
        zoomMax: 4,
        zoomMin: 1,
        zoomOnScroll: false
      });
    });
  }

  render() {
    this.renderMap();
    return <div className="map" ref={this.myRef} id={this.props.id}></div>;
  }
}
