import CONSTANTS from "../constants";

const getNewsAction = payload => {
  return {
    type: CONSTANTS.GET_NEWS,
    payload
  };
};

const resetNewsAction = () => {
  return {
    type: CONSTANTS.RESET_NEWS
  };
};

const searchNewsAction = payload => {
  return {
    type: CONSTANTS.SEARCH_NEWS,
    payload
  };
};

export{
  getNewsAction,
  resetNewsAction,
  searchNewsAction
};