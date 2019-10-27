import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';

function* getNews(action) {
  try {
    const response = yield fetch(
      `https://newsapi.org/v2/everything?q=*&apiKey=fb4ae962a5ea49bc8819e7c9e94bcc9c&page=${action.payload}&pageSize=10`
    );
    const jsonData = yield response.json();
    yield put({
      type: CONSTANTS.GET_NEWS_SUCCEEDED,
      payload: jsonData.articles
    });
  } catch (error) {
    yield put({type: CONSTANTS.GET_NEWS_FAILED});
  }
}

function* searchNews(action) {
  try {
    const response = yield fetch(
      `https://newsapi.org/v2/everything?q=${action.payload}&apiKey=fb4ae962a5ea49bc8819e7c9e94bcc9c&page=1&pageSize=10`
    );
    const jsonData = yield response.json();
    yield put({
      type: CONSTANTS.SEARCH_NEWS_SUCCEEDED,
      payload: jsonData.articles
    });
  } catch (error) {
    yield put({type: CONSTANTS.SEARCH_NEWS_FAILED});
  }
}

function* getNewsFromApi() {
  yield takeLatest(CONSTANTS.GET_NEWS, getNews);
  yield takeLatest(CONSTANTS.SEARCH_NEWS, searchNews);
}

export default getNewsFromApi;