import CONSTANTS from "../constants";

const getNewsAction = payload => {
  return {
    type: CONSTANTS.GET_NEWS,
    payload
  };
};

export{
  getNewsAction
};