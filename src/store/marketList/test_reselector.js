import { createSelector } from "reselect";

const marketList = {
  byId: {
    BTC_BCN: {
      id: 1,
      last: "0.00000017",
      lowestAsk: "0.00000017",
      highestBid: "0.00000016",
      percentChange: "-0.05555555",
      baseVolume: "15.64436312",
      quoteVolume: "92133634.26306976",
      isFrozen: "0",
      high24hr: "0.00000018",
      low24hr: "0.00000016"
    },
    BTC_BTS: {
      id: 2,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "31.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    BTC_BTA: {
      id: 3,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "10.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    BTC_BTB: {
      id: 4,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "9.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    BTC_BTZ: {
      id: 5,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "8.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    BTC_BTF: {
      id: 6,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "7.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    ETH_BTF: {
      id: 7,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "6.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    ETH_BTA: {
      id: 8,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "5.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    ETH_BTC: {
      id: 9,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "12.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    ETH_BTD: {
      id: 10,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "45.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    USDT_BTD: {
      id: 11,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "31.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    },
    USDT_AAA: {
      id: 12,
      last: "0.00001105",
      lowestAsk: "0.00001105",
      highestBid: "0.00001101",
      percentChange: "-0.02385159",
      baseVolume: "0.48270283",
      quoteVolume: "2831214.61715151",
      isFrozen: "0",
      high24hr: "0.00001156",
      low24hr: "0.00001081"
    }
  },
  sortType: "baseVolume",
  orderType: true
};

// helpers
const marketIds = (state, filter) =>
  Object.keys(state).filter(id => {
    return id.split("_")[0] === filter && id;
  });
const getItem = (state, id) => state[id];
const getList = (state, ids) => ids.map(item => getItem(state, item));

// reselect functions
const getSortType = state => state.sortType;
const getOrderType = state => state.orderType;
const getListByMarket = (state, marketName) =>
  getList(state, marketIds(state, marketName));

const getFinalList = createSelector(
  [getListByMarket, getSortType, getOrderType],
  (list, sortType, orderType) => {
    if (orderType) {
      return list.sort((a, b) => b[sortType] - a[sortType]);
    } else {
      return list.sort((a, b) => a[sortType] - b[sortType]);
    }
  }
);

getFinalList(marketList.byId, "USDT");
