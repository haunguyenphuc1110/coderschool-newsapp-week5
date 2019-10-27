import CONSTANTS from '../constants';

const defaultState = {
  pending: false,
  articles: [],
  searchingArticles: [],
  authors: [],
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
      let listAuthors = state.authors;
      let listArticles = state.articles.concat(action.payload);
      action.payload.map(item => {
        let index = listAuthors.findIndex(article => article.author === item.author)
        if (index !== -1){
          listAuthors[index].numArticle++;
        }
        else{
          listAuthors.push({author: item.author, numArticle: 1})
        }
      })
      return {
        ...state,
        pending: false,
        articles: listArticles,
        authors: listAuthors
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