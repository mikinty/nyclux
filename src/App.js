import React from "react";
import { APARTMENTS } from "./data";
import BuildingTile from "./components/BuildingTile";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    let building_data = Object.entries(APARTMENTS);
    let collection = [];
    for (let i = 0; i < building_data.length; i += 2) {
      if (i + 1 < building_data.length) {
        collection.push(
          <div className="building-row" key={i}>
            <BuildingTile data={building_data[i][1]} />
            <BuildingTile data={building_data[i + 1][1]} />
          </div>
        );
      } else {
        collection.push(
          <div className="building-row" key={i}>
            <BuildingTile data={building_data[i][1]} />
          </div>
        );
      }
    }

    return (
      <div id="App">
        <div id="header">
          <div id="left-corner"></div>
          <div id="title">NYCLUX</div>
          <div id="menu" />
        </div>
        <div id="main-content">{collection}</div>
      </div>
    );
  }
}

export default App;
