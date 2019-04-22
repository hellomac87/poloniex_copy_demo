import axios from "axios";
import { SET_MARKET_LIST_TR } from "./type";

const setMarketListTR = payload => {
  return {
    type: SET_MARKET_LIST_TR,
    payload
  };
};

export const getMarketListTR = () => async (dispatch, getState) => {
  const { data: payload } = await axios.get(
    "https://poloniex.com/public?command=returnTicker"
  );

  console.log(payload);

  dispatch(setMarketListTR(payload));
};
