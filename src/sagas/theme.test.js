import { apply, call, put, select } from 'redux-saga/effects';
import * as actions from '../actions/theme';
import {
  getStoredOrPrefersTheme,
  storeTheme,
  setTheme,
  toggleTheme,
  handleThemeLoad,
} from './theme';

describe('sagas::theme', () => {
  beforeEach(() => {
    localStorage.removeItem('theme');
  });

  beforeAll(() => {
    window.matchMedia = () => ({ matches: true });
  });

  test('getStoredOrPrefersTheme', () => {
    let iterator = getStoredOrPrefersTheme();
    expect(iterator.next().value).toEqual(
      apply(window, 'matchMedia', ['(prefers-color-scheme: dark)'])
    );
    expect(iterator.next('light')).toEqual({ done: true, value: 'light' });

    localStorage.setItem('theme', 'dark');
    iterator = getStoredOrPrefersTheme();
    expect(iterator.next().value).toEqual(
      apply(localStorage, localStorage.getItem, ['theme'])
    );
    expect(iterator.next('dark')).toEqual({ done: true, value: 'dark' });
  });

  test('storeTheme', () => {
    const iterator = storeTheme('dark');
    expect(iterator.next().value).toEqual(
      apply(localStorage, localStorage.setItem, ['theme', 'dark'])
    );
  });

  test('setTheme', () => {
    const iterator = setTheme('dark');
    expect(iterator.next().value).toEqual(put(actions.setTheme('dark')));
    expect(iterator.next().value).toEqual(call(storeTheme, 'dark'));
  });

  test('toggleTheme', () => {
    const iterator = toggleTheme();
    expect(iterator.next().value).toEqual(select());
    expect(iterator.next({ theme: 'light' }).value).toEqual(
      call(setTheme, 'dark')
    );
    expect(iterator.next().value).toEqual(call(storeTheme, 'dark'));
  });

  test('handleThemeLoad', () => {
    const iterator = handleThemeLoad();
    expect(iterator.next().value).toEqual(call(getStoredOrPrefersTheme));
    expect(iterator.next('light').value).toEqual(call(setTheme, 'light'));
  });
});
