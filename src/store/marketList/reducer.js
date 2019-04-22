import { GetMarketListTR, SET_MARKET_LIST_TR } from "./type";

const initialState = {
  market_BTC: {},
  market_ETH: {},
  market_USDC: {},
  market_USDT: {},
  market_XMR: {}
};

const marketList = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKET_LIST_TR:
      return {
        ...state,
        market_BTC: bySort(
          filterByMarketName(action.payload, "BTC"),
          "baseVolume"
        ),
        market_ETH: bySort(
          filterByMarketName(action.payload, "ETH"),
          "baseVolume"
        ),
        market_USDC: bySort(
          filterByMarketName(action.payload, "USDC"),
          "baseVolume"
        ),
        market_USDT: bySort(
          filterByMarketName(action.payload, "USDT"),
          "baseVolume"
        ),
        market_XMR: bySort(
          filterByMarketName(action.payload, "XMR"),
          "baseVolume"
        )
      };
    default:
      return state;
  }
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

const filterByMarketName = (payload, filter) => {
  const obj = {};

  Object.entries(payload).forEach((item, index) => {
    const marketName = item[0].split("_")[0];
    // const coinName = item[0].split("_")[1];
    const marketValue = item[1];

    if (marketName === filter) {
      obj[item[0]] = marketValue;
    }
  });

  return obj;
};

export default marketList;
