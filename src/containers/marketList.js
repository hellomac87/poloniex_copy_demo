import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// action
import {
  getMarketListTR,
  listenMarketListRDS
} from "../store/marketList/action";

// reselector
import { getMarketByMarketName, bySort } from "../store/marketList/reselector";

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

        {tab === "BTC" && (
          <MarketListTemp obj={marketList_BTC} marketName={"BTC"} />
        )}
        {tab === "ETH" && (
          <MarketListTemp obj={marketList_ETH} marketName={"ETH"} />
        )}
        {tab === "USDC" && (
          <MarketListTemp obj={marketList_USDC} marketName={"USDC"} />
        )}
        {tab === "USDT" && (
          <MarketListTemp obj={marketList_USDT} marketName={"USDT"} />
        )}
        {tab === "XMR" && (
          <MarketListTemp obj={marketList_XMR} marketName={"XMR"} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    marketList: state.marketList,
    marketList_BTC: bySort(
      getMarketByMarketName(state.marketList, "BTC"),
      state.marketList.sortType,
      state.marketList.orderType
    ),
    marketList_ETH: bySort(
      getMarketByMarketName(state.marketList, "ETH"),
      state.marketList.sortType,
      state.marketList.orderType
    ),
    marketList_USDC: bySort(
      getMarketByMarketName(state.marketList, "USDC"),
      state.marketList.sortType,
      state.marketList.orderType
    ),
    marketList_USDT: bySort(
      getMarketByMarketName(state.marketList, "USDT"),
      state.marketList.sortType,
      state.marketList.orderType
    ),
    marketList_XMR: bySort(
      getMarketByMarketName(state.marketList, "XMR"),
      state.marketList.sortType,
      state.marketList.orderType
    )
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
