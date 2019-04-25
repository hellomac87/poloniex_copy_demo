import axios from "axios";
import { SET_MARKET_LIST_TR, SET_MARKET_LIST_RDS } from "./type";

let poloniexSoket = new WebSocket("wss://api2.poloniex.com");

const setMarketListTR = payload => {
  return {
    type: SET_MARKET_LIST_TR,
    payload
  };
};

const setMarketListRDS = payload => {
  return {
    type: SET_MARKET_LIST_RDS,
    payload
  };
};

export const getMarketListTR = () => async (dispatch, getState) => {
  const { data: payload } = await axios.get(
    "https://poloniex.com/public?command=returnTicker"
  );

  // console.log(payload);

  dispatch(setMarketListTR(payload));
};

export const listenMarketListRDS = () => async (dispatch, getState) => {
  poloniexSoket.onopen = function(event) {
    const msg = { command: "subscribe", channel: 1002 };
    poloniexSoket.send(JSON.stringify(msg));
  };

  poloniexSoket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    try {
      dispatch(setMarketListRDS(data[2]));
    } catch (e) {}
  };
};
