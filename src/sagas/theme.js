import { apply, call, put, select, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/theme';

export function* getStoredOrPrefersTheme() {
  if ('theme' in localStorage) {
    return yield apply(localStorage, localStorage.getItem, ['theme']);
  }

  const prefersDarkMatch = yield apply(window, window.matchMedia, [
    '(prefers-color-scheme: dark)',
  ]);

  return prefersDarkMatch.matches ? 'dark' : 'light';
}

export function* storeTheme(theme) {
  yield apply(localStorage, localStorage.setItem, ['theme', theme]);
}

export function* setTheme(theme) {
  yield put(actions.setTheme(theme));
  yield call(storeTheme, theme);
}

export function* toggleTheme() {
  const { theme } = yield select();
  const next = theme === 'light' ? 'dark' : 'light';
  yield call(setTheme, next);
  yield call(storeTheme, next);
}

export function* handleThemeLoad() {
  const theme = yield call(getStoredOrPrefersTheme);
  yield call(setTheme, theme);
}

export function* watchToggleTheme() {
  yield takeEvery(actions.TOGGLE_THEME, toggleTheme);
}
