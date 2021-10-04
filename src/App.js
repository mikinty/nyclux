import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { APARTMENTS } from "./data";
import AboutPage from "./pages/AboutPage";
import BuildingTile from "./components/BuildingTile";
import BuildingPage from "./pages/BuildingPage";

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
            <BuildingTile
              data={building_data[i][1]}
              url={building_data[i][0]}
            />
            <BuildingTile
              data={building_data[i + 1][1]}
              url={building_data[i + 1][0]}
            />
          </div>
        );
      } else {
        collection.push(
          <div className="building-row" key={i}>
            <BuildingTile
              data={building_data[i][1]}
              url={building_data[i][0]}
            />
          </div>
        );
      }
    }

    return (
      <div id="App">
        <Router>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/building/:name">
              <BuildingPage />
            </Route>
            <Route path="/">
              <div id="header">
                <div id="left-corner"></div>
                <div id="title">NYCLUX</div>
                <div id="menu" />
              </div>
              <div id="main-content">{collection}</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
