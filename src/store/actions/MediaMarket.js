import * as actionsTypes from "./actionsTypes";
import jsonData from "../../public/info.json";
import axios from "axios";

export const orderFromMediaMarket = () => {
  return {
    type: actionsTypes.ORDER_FROM_MEDIAMARKET
  };
};

export const removeOneMediaMarket = () => {
  return {
    type: actionsTypes.REMOVE_ONE_FROM_MEDIAMARKET
  };
};

export const removeAllMediaMarket = () => {
  return {
    type: actionsTypes.REMOVE_ALL_FROM_MEDIAMARKET
  };
};

export const checkoutFromMediaMarket = () => {
  return {
    type: actionsTypes.CHECKOUT_FROM_MEDIAMARKET
  };
};

export const setMediaMarketData = MediaMarket => {
  return {
    type: actionsTypes.FETCH_MEDIAMARKET_DATA,
    MediaMarket
  };
};

export const fetchMediaMarketData = () => {
  return dispatch => {
    dispatch(setMediaMarketData(jsonData[1]));
  };
};
