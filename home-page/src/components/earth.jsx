import React, { Component } from "react";
import "../Home.css";

export default class Earth extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  configs = {
    location: { lat: 18, lng: 50 },
    zoom: 0.5,
    quality: 4,
    light: "none",
    lightAmbience: 0,

    transparent: true,
    mapSeaColor: "#f0f0f0c0",
    mapLandColor: "#36ff3c",
    mapBorderColor: "#29c900",
    mapBorderWidth: 0.25,
    mapHitTest: true,

    autoRotate: true,
    autoRotateSpeed: 0.7,
    autoRotateDelay: 0
  };

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const node = this.myRef.current;
    const configs = this.configs;

    window.addEventListener("earthjsload", () => {
      let myearth = new window.Earth(node, configs);

      myearth.addEventListener("ready", () => {
        myearth.animate("lightAmbience", 1, { duration: 2500 });
        myearth.animate("zoom", 1, { duration: 2000 });
      });
    });
  }

  render() {
    return <div className="globe" ref={this.myRef}></div>;
  }
}
