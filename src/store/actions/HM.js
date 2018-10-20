import * as actionsTypes from "./actionsTypes";
import jsonData from "../../public/info.json";

import axios from "axios";

export const orderFromHm = () => {
  return {
    type: actionsTypes.ORDER_FROM_HM
  };
};

export const removeOneHm = () => {
  return {
    type: actionsTypes.REMOVE_ONE_FROM_HM
  };
};

export const removeAllHm = () => {
  return {
    type: actionsTypes.REMOVE_ALL_FROM_HM
  };
};

export const checkoutFromHm = () => {
  return {
    type: actionsTypes.CHECKOUT_FROM_HM
  };
};

export const setHmData = hmData => {
  return {
    type: actionsTypes.FETCH_HM_DATA,
    hmData
  };
};

export const fetchHmData = () => {
  return dispatch => {
    dispatch(setHmData(jsonData[0]));
  };
};
