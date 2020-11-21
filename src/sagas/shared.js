import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { call, put } from 'redux-saga/effects';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { getInitialData } from '../utils/api';

export function* handleInitialData() {
  try {
    yield put(showLoading());
    const { users, questions } = yield call(getInitialData);
    yield put(receiveUsers(users));
    yield put(receiveQuestions(questions));
  } finally {
    yield put(hideLoading());
  }
}
