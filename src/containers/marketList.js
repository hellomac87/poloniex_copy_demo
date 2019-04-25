import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// action
import {
  getMarketListTR,
  listenMarketListRDS
} from "../store/marketList/action";

// reselector
import {
  getMarketList,
  getMarketByMarketName,
  bySort
} from "../store/marketList/reselector";

// components
import MarketListTemp from "../components/MarketListTemp";
import Tab from "../components/Tab";

class MarketList extends Component {
  state = {
    tab: "BTC" // BTC,ETH,USDC,USDT,XMR
  };

  async componentDidMount() {
    const { getMarketListTR, listenMarketListRDS } = this.props;
    getMarketListTR();
    listenMarketListRDS();
  }

  onTabClick = tabName => {
    this.setState({
      tab: tabName
    });
  };

  render() {
    const { tab } = this.state;
    const {
      marketList,
      marketList_BTC,
      marketList_ETH,
      marketList_USDC,
      marketList_USDT,
      marketList_XMR
    } = this.props;
    const { onTabClick } = this;

    return (
      <div>
        <Tab onTabClick={onTabClick} tab={tab} />

        <MarketListTemp obj={marketList} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    marketList: getMarketList(state.marketList, "BTC")
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
)(MarketList);
