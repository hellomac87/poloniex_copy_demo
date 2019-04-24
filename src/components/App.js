import React, { Component } from "react";

import MarketList from "../containers/marketList";
import Banner from "./Banner";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <MarketList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
