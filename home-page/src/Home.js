import React from "react";

import "./Home.css";

import Earth from "./components/earth.jsx";
import Map from "./components/map.jsx";

function App() {
  return (
    <React.Fragment>
      <Earth></Earth>
      <Map></Map>
    </React.Fragment>
  );
}

export default App;
