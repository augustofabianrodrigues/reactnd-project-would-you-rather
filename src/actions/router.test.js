import {
  clearRedirect,
  CLEAR_REDIRECT,
  setRedirect,
  SET_REDIRECT,
} from './router';

describe('actions::router', () => {
  test('setRedirect', () => {
    const action = setRedirect('/home');
    expect(action).toEqual({
      type: SET_REDIRECT,
      payload: { to: '/home' },
    });
  });

  test('clearRedirect', () => {
    const action = clearRedirect();
    expect(action).toEqual({
      type: CLEAR_REDIRECT,
    });
  });
});
