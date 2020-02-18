import React, { Component } from "react";
import "../Home.css";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const map = this.myRef.current;

    window.$(() => {
      window.$(map).vectorMap({
        map: "it_merc",
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
          },
          selected: {
            fill: "yellow"
          },
          selectedHover: {}
        },
        zoomMax: 1,
        zoomMin: 1
      });
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className="map" ref={this.myRef}></div>;
  }
}
