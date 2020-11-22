import { call, put, take } from 'redux-saga/effects';
import * as api from '../utils/api';
import { LOGOUT, SIGN_IN, SIGN_UP } from '../actions/auth';
import { setAuthedUser } from '../actions/authedUser';
import { addUser } from '../actions/users';

export function* signUp(user) {
  const newUser = yield call(api.addUser, user);
  yield put(addUser(newUser));
  return newUser;
}

export function* signIn(userId) {
  yield put(setAuthedUser(userId));
}

export function* logout() {
  yield put(setAuthedUser(null));
}

export function* authFlow() {
  let userId = null;
  while (true) {
    const action = yield take([SIGN_IN, SIGN_UP]);

    if (action.type === SIGN_UP) {
      const newUser = yield call(signUp, action.payload.user);
      userId = newUser.id;
    } else {
      userId = action.payload.userId;
    }

    yield call(signIn, userId);

    yield take(LOGOUT);
    yield call(logout);
    userId = null;
  }
}
