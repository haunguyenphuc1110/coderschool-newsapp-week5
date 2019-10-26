import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';

function* getNews(action) {
  try {
    const response = yield fetch(
      `https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=fb4ae962a5ea49bc8819e7c9e94bcc9c&page=${action.payload}`
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

function* getNewsFromApi() {
  yield takeLatest(CONSTANTS.GET_NEWS, getNews);
}

export default getNewsFromApi;