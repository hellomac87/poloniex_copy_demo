import produce from "immer";
import { SET_MARKET_LIST_TR, SET_MARKET_LIST_RDS } from "./type";
import { byId, allIds } from "./reselector";
const initialState = {
  market_ALL: {},
  market_byId: {},
  market_allIds: [],
  sortType: "baseVolume",
  orderTypeIsAsc: true
};

const marketList = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_MARKET_LIST_TR:
        draft.market_ALL = action.payload;
        draft.market_byId = byId(action.payload);
        draft.market_allIds = allIds(action.payload);
        return;
      case SET_MARKET_LIST_RDS:
        // 0 currency pair id,
        // 1 last trade price,
        // 2 lowest ask,
        // 3 highest bid,
        // 4 percent change in last 24 hours,
        // 5 base currency volume in last 24 hours,
        // 6 quote currency volume in last 24 hours,
        // 7 is frozen,
        // 8 highest trade price in last 24 hours,
        // 9 lowest trade price in last 24 hours,

        const id = action.payload[0];
        const baseVolume = action.payload[5];
        const high24hr = action.payload[8];
        // const highestBid = action.payload[3];
        const last = action.payload[1];
        const low24hr = action.payload[9];
        // const lowestAsk = action.payload[2];
        const percentChange = action.payload[4];
        // const quoteVolume = action.payload[6];
        try {
          // console.log(action.payload);
          draft.market_byId[id].baseVolume = baseVolume;
          draft.market_byId[id].high24hr = high24hr;
          // draft.market_byId[id].highestBid = highestBid;
          draft.market_byId[id].last = last;
          draft.market_byId[id].low24hr = low24hr;
          // draft.market_byId[id].lowestAsk = lowestAsk;
          draft.market_byId[id].percentChange = percentChange;
          // draft.market_byId[id].quoteVolume = quoteVolume;
        } catch {}
        return;

      case "UPDATE_SORT_TYPE":
        draft.sortType = action.sortType;
        draft.orderTypeIsAsc = !state.orderTypeIsAsc;
    }
  });

export default marketList;
