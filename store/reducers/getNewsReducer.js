import CONSTANTS from '../constants';

const defaultState = {
  pending: false,
  articles: [],
  searchingArticles: [],
  error: null
};

const getNewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_NEWS:
      return {
        ...state,
        pending: true
      };

    case CONSTANTS.GET_NEWS_SUCCEEDED:
      return {
        ...state,
        pending: false,
        articles: state.articles.concat(action.payload)
      }; 
    
    case CONSTANTS.GET_NEWS_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };
    
    case CONSTANTS.RESET_NEWS:
      return {
        ...state,
        articles: []
      }

    case CONSTANTS.SEARCH_NEWS_SUCCEEDED:
      return {
        ...state,
        pending: false,
        searchingArticles: action.payload
      }; 
      
    case CONSTANTS.SEARCH_NEWS_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };
    default:
      return state;
  }
};

export default getNewsReducer;