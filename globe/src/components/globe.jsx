import React, { Component } from "react";
import ReactGlobe from "react-globe";

//reads marker values from JSON file
import markers from "./data/markers.json";

//textures to apply on globe
import tempTexture from "./images/earth_temp.jpg";
import nightTexture from "./images/earth_night.jpg";

export default class Globe extends Component {
  //
  //
  /*********************************************************************************************************/

  //defines all properties to be used in the ReactGlobe component
  globeSettings = {
    //
    //sets ReactGlobe component size to match window size
    size: [window.innerWidth, window.innerHeight],
    //
    //various globe options such as glow, background, textures...
    globeOptions: {
      enableBackground: false,
      enableClouds: false,
      glowCoefficient: 0.1,
      glowColor: "black",
      glowPower: 5,
      glowRadiusScale: 0.3
    },
    //
    //options regarding camera position and movement(rotation,zoom)
    cameraOptions: {
      autoRotateSpeed: 0.7,
      enableZoom: false
    },
    //
    //receives data from imported JSON file containing marker coordinates, city names...
    markers: markers,

    markerOptions: {
      offsetRadiusScale: 0.1,
      getTooltipContent: marker => `${marker.city}` //writes the name of the cities when hovering over markers
    }
  };
  /*********************************************************************************************************/

  render() {
    return (
      <React.Fragment>
        <ReactGlobe
          //uses all properties defined in globeSettings in ReactGlobe component
          size={this.globeSettings.size}
          globeOptions={this.globeSettings.globeOptions}
          markers={this.globeSettings.markers}
          markerOptions={this.globeSettings.markerOptions}
          cameraOptions={this.globeSettings.cameraOptions}
          focusOptions={this.globeSettings.focusOptions}
        ></ReactGlobe>
      </React.Fragment>
    );
  }
}
