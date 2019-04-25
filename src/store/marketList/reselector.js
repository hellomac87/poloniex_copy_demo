import { createSelector } from "reselect";

export const byId = createSelector(
  state => state,
  state => {
    const newState = {};
    Object.entries(state).forEach(item => {
      newState[item[1].id] = item[1];
      newState[item[1].id].pairName = item[0];
    });

    return newState;
  }
);

export const allIds = createSelector(
  state => state,
  state => {
    const arr = [];
    Object.entries(state).forEach(item => {
      arr.push(item[1].id);
    });
    return arr;
  }
);

const marketListById = state => state.market_byId;
const marketListByMarketName = (state, marketFilter) => marketFilter;
const marketListSortType = state => state.sortType;
const marketListOrderType = state => state.orderTypeIsAsc;

export const getMarketList = createSelector(
  [
    marketListById,
    marketListByMarketName,
    marketListSortType,
    marketListOrderType
  ],
  (market_byId, marketFilter, sortType, orderTypeIsAsc) => {
    const marketFilteredObj = {};
    Object.entries(market_byId).forEach(item => {
      const marketName = item[1].pairName.split("_")[0];
      const coinName = item[1].pairName.split("_")[1];
      const marketValue = item[1];

      if (marketName === marketFilter) {
        marketFilteredObj[coinName] = marketValue;
      }
    });

    return Object.entries(marketFilteredObj).sort((a, b) => {
      return orderTypeIsAsc
        ? b[1][sortType] - a[1][sortType]
        : a[1][sortType] - b[1][sortType];
    });
  }
);
