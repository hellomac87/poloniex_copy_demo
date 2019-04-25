import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MarketList from "../containers/marketList";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={MarketList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
