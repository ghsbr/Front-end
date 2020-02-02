import React, { Component } from "react";
import Globe from "./globe";
import bg from "./images/background.jpg";

export default class Home extends Component {
  backgroundSettings = {
    style: {
      height: "100vh",
      backgroundImage: `url(${bg})`
    }
  };

  render() {
    return (
      <div>
        <div style={this.backgroundSettings.style}>
          <Globe></Globe>
        </div>
      </div>
    );
  }
}
