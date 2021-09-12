import React from "react";
import { APARTMENTS } from "./data";
import BuildingTile from "./components/BuildingTile";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <div id="App">
        <div id="header">
          <div id="left-corner">

          </div>
          <div id="title">
            NYCLUX
          </div>
          <div id="menu"/>
        </div>
        <div id="main-content">
          <BuildingTile data={APARTMENTS["19DUTCH"]}/>
        </div>
      </div>
    );
  }
}

export default App;
