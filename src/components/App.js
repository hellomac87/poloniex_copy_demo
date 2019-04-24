import React, { Component } from "react";

import MarketList from "../containers/marketList";
import Banner from "./Banner";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <MarketList />
      </React.Fragment>
    );
  }
}

export default App;
