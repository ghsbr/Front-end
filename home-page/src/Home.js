import React, { Component } from "react";

import "./Home.css";

import Earth from "./components/earth.jsx";
import Map from "./components/map.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: "world"
    };
  }

  onSelectCountry(country) {
    this.setState({ selectedCountry: country });
  }
  render() {
    return (
      <React.Fragment>
        <Earth changeCountry={this.onSelectCountry.bind(this)}></Earth>
        <Map selectedCountry={this.state.selectedCountry} id="temperature" />
        <Map selectedCountry={this.state.selectedCountry} id="pollution" />
      </React.Fragment>
    );
  }
}

export default App;
