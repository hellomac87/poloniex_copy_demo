import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

// redux
import { connect } from "react-redux";

// action
import {
  getMarketListTR,
  listenMarketListRDS,
  updateSortType
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

  onSortClick = sortType => {
    const { updateSortType } = this.props;
    updateSortType(sortType);
  };

  render() {
    const { marketList, marketName, orderType, sortType } = this.props;
    const { onTabClick, onSortClick } = this;

    return (
      <div>
        <Banner />
        <Tab onTabClick={onTabClick} marketName={marketName} />

        <MarketListTemp
          marketList={marketList}
          orderType={orderType}
          sortType={sortType}
          onSortClick={onSortClick}
        />
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
    marketName: marketFilter,
    orderType: state.marketList.orderType,
    sortType: state.marketList.sortType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMarketListTR: () => dispatch(getMarketListTR()),
    listenMarketListRDS: () => dispatch(listenMarketListRDS()),
    updateSortType: sortType => dispatch(updateSortType(sortType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MarketList));
