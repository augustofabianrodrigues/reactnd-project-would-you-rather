import { all } from 'redux-saga/effects';
import { handleInitialData } from './shared';

export default function* rootSaga() {
  yield all([handleInitialData()]);
}
