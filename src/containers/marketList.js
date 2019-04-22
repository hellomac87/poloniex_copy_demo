import React, { Component } from "react";
import { connect } from "react-redux";
import { getMarketListTR } from "../store/marketList/action";

class MarketList extends Component {
  state = {
    tab: "BTC" // BTC,ETH,USDC,USDT,XMR
  };

  async componentDidMount() {
    console.log("loading start");
    const { getMarketListTR } = this.props;
    getMarketListTR();

    console.log("loading end");
  }

  onTabClack = tabName => {
    this.setState({
      tab: tabName
    });
  };

  render() {
    const { tab } = this.state;
    const { marketList } = this.props;
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
        {tab === "BTC" && (
          <React.Fragment>
            <h1>BTC</h1>
            <ul>
              {Object.entries(marketList.market_BTC).map((l, i) => {
                const marketName = l[0].split("_")[0];
                const coinName = l[0].split("_")[1];
                const values = l[1];

                return (
                  <li key={i}>
                    <div>{coinName}</div>
                    <div>
                      <span>baseVolume: {values.baseVolume}</span> <br />
                      <span>high24hr: {values.high24hr}</span> <br />
                      <span>highestBid: {values.highestBid}</span> <br />
                      {/* <span>id: {values.id}</span> <br /> */}
                      {/* <span>isFrozen: {values.isFrozen}</span> <br /> */}
                      <span>last: {values.last}</span>
                      <br />
                      <span>low24hr: {values.low24hr}</span> <br />
                      <span>lowestAsk: {values.lowestAsk}</span> <br />
                      <span>percentChange: {values.percentChange} %</span>{" "}
                      <br />
                      <span>quoteVolume: {values.quoteVolume}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        )}

        {tab === "ETH" && (
          <React.Fragment>
            <h1>ETH</h1>
            <ul>
              {Object.entries(marketList.market_ETH).map((l, i) => {
                const marketName = l[0].split("_")[0];
                const coinName = l[0].split("_")[1];
                const values = l[1];

                return (
                  <li key={i}>
                    <div>{coinName}</div>
                    <div>
                      <span>{values.baseVolume}</span>
                      <span>{values.high24hr}</span>
                      <span>{values.highestBid}</span>
                      <span>{values.id}</span>
                      <span>{values.isFrozen}</span>
                      <span>{values.last}</span>
                      <span>{values.low24hr}</span>
                      <span>{values.lowestAsk}</span>
                      <span>{values.percentChange}</span>
                      <span>{values.quoteVolume}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

// const list = () => {
//   return(

//   )
// }

const mapStateToProps = state => {
  return {
    marketList: state.marketList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMarketListTR: () => dispatch(getMarketListTR())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketList);
