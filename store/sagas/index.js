import { all, fork } from 'redux-saga/effects';
import getNewsSaga from './getNewsSaga';

function* rootSaga() {
    yield all([
      fork(getNewsSaga),
    ]);
}

export default rootSaga;
