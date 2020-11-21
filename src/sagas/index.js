import { all } from 'redux-saga/effects';
import { watchAndLog } from './logger';
import { handleInitialData } from './shared';

export default function* rootSaga() {
  yield all([watchAndLog(), handleInitialData()]);
}
