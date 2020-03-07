import React, { Component } from "react";

import "./Home.css";

import Earth from "./components/earth.jsx";
import Map from "./components/map.jsx";
import Graph from "./components/graph.jsx";

import { temp } from "./components/data/temperature.js";
import { pol } from "./components/data/pollution";

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
        <div className="data">
          <Map
            selectedCountry={this.state.selectedCountry}
            id="temperature"
            data={temp[this.state.selectedCountry]}
          />
          <Graph />
        </div>
        <div className="data">
          <Map
            selectedCountry={this.state.selectedCountry}
            id="pollution"
            data={pol[this.state.selectedCountry]}
          />
          <Graph />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
