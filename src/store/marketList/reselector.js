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

export const bySort = createSelector(
  (state, sortType, orderType) => state,
  (state, sortType, orderType) => sortType,
  (state, sortType, orderType) => orderType,
  (state, sortType, orderType) => {
    const arr = Object.entries(state);
    const newObj = {};

    if (orderType === "asc") {
      arr.sort(function(a, b) {
        return b[1][sortType] - a[1][sortType];
      });
    }
    if (orderType === "desc") {
      arr.sort(function(a, b) {
        return a[1][sortType] - b[1][sortType];
      });
    }

    arr.forEach(item => {
      newObj[item[0]] = item[1];
    });

    return newObj;
  }
);

export const getMarketByMarketName = createSelector(
  (state, marketNameFilter) => state.market_byId,
  (state, marketNameFilter) => marketNameFilter,
  (marketList_byId, marketNameFilter) => {
    const obj = {};

    Object.entries(marketList_byId).forEach((item, index) => {
      const marketName = item[1].pairName.split("_")[0];
      const coinName = item[1].pairName.split("_")[1];
      const marketValue = item[1];

      if (marketName === marketNameFilter) {
        obj[coinName] = marketValue;
      }
    });

    return obj;
  }
);
