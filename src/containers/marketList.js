import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMarketListTR,
  listenMarketListRDS
} from "../store/marketList/action";
import MarketListTemp from "../components/MarketListTemp";

class MarketList extends Component {
  state = {
    tab: "BTC" // BTC,ETH,USDC,USDT,XMR
  };

  async componentDidMount() {
    const { getMarketListTR, listenMarketListRDS } = this.props;
    getMarketListTR();
    listenMarketListRDS();
  }

  onTabClack = tabName => {
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
    const { onTabClack } = this;

    return (
      <div>
        <ul>
          <li onClick={() => onTabClack("BTC")}>BTC</li>
          <li onClick={() => onTabClack("ETH")}>ETH</li>
          <li onClick={() => onTabClack("USDC")}>USDC</li>
          <li onClick={() => onTabClack("USDT")}>USDT</li>
          <li onClick={() => onTabClack("XMR")}>XMR</li>
        </ul>

        <MarketListTemp obj={marketList_BTC} marketName={"BTC"} />
        <MarketListTemp obj={marketList_ETH} marketName={"ETH"} />
        <MarketListTemp obj={marketList_USDC} marketName={"USDC"} />
        <MarketListTemp obj={marketList_USDT} marketName={"USDT"} />
        <MarketListTemp obj={marketList_XMR} marketName={"XMR"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    marketList: state.marketList,
    marketList_BTC: bySort(
      filterByMarketName(state.marketList.market_byId, "BTC"),
      "baseVolume"
    ),
    marketList_ETH: bySort(
      filterByMarketName(state.marketList.market_byId, "ETH"),
      "baseVolume"
    ),
    marketList_USDC: bySort(
      filterByMarketName(state.marketList.market_byId, "USDC"),
      "baseVolume"
    ),
    marketList_USDT: bySort(
      filterByMarketName(state.marketList.market_byId, "USDT"),
      "baseVolume"
    ),
    marketList_XMR: bySort(
      filterByMarketName(state.marketList.market_byId, "XMR"),
      "baseVolume"
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMarketListTR: () => dispatch(getMarketListTR()),
    listenMarketListRDS: () => dispatch(listenMarketListRDS())
  };
};

// const bySort
const bySort = (obj, sortType) => {
  const arr = Object.entries(obj);
  const newObj = {};

  arr.sort(function(a, b) {
    return b[1][sortType] - a[1][sortType];
  });

  arr.forEach(item => {
    newObj[item[0]] = item[1];
  });

  return newObj; // returns array
};

const filterByMarketName = (state, filter) => {
  const obj = {};

  Object.entries(state).forEach((item, index) => {
    const marketName = item[1].pairName.split("_")[0];
    const coinName = item[1].pairName.split("_")[1];
    const marketValue = item[1];

    if (marketName === filter) {
      obj[coinName] = marketValue;
    }
  });

  return obj;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketList);
