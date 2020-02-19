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
    quality: 5,
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

  selectCountry(country) {
    this.props.changeCountry(country);
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

      myearth.addEventListener("click", event => {
        if (rotationAngle > 5) return;

        if (event.id) {
          this.selectCountry(event.id);
          myearth.animate("location", event.location, { duration: 500 });
        }
      });

      let startLocation, rotationAngle;

      myearth.addEventListener("dragstart", () => {
        startLocation = myearth.location;
      });

      myearth.addEventListener("dragend", () => {
        rotationAngle = window.Earth.getAngle(startLocation, myearth.location);
      });
    });
  }

  render() {
    return <div className="globe" ref={this.myRef}></div>;
  }
}
