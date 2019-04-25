import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

// redux
import { connect } from "react-redux";

// action
import {
  getMarketListTR,
  listenMarketListRDS
} from "../store/marketList/action";

// reselector
import { getMarketList } from "../store/marketList/reselector";

// components
import MarketListTemp from "../components/MarketListTemp";

import Tab from "../components/Tab";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

class MarketList extends Component {
  async componentDidMount() {
    const { getMarketListTR, listenMarketListRDS } = this.props;
    getMarketListTR();
    listenMarketListRDS();
  }

  onTabClick = marketName => {
    const { history } = this.props;
    history.push(`/?market=${marketName}`);
  };

  render() {
    const { marketList, marketName } = this.props;
    const { onTabClick } = this;

    return (
      <div>
        <Banner />
        <Tab onTabClick={onTabClick} marketName={marketName} />

        <MarketListTemp marketList={marketList} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // setting filter
  const {
    history: {
      location: { search }
    }
  } = ownProps;
  const { market: filter } = queryString.parse(search);
  const marketFilter = filter || "BTC";
  return {
    marketList: getMarketList(state.marketList, marketFilter),
    marketName: marketFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMarketListTR: () => dispatch(getMarketListTR()),
    listenMarketListRDS: () => dispatch(listenMarketListRDS())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MarketList));
