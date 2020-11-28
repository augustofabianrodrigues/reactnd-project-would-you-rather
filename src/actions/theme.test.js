import { setTheme, SET_THEME, toggleTheme, TOGGLE_THEME } from './theme';

describe('actions::theme', () => {
  test('setTheme', () => {
    let theme = 'dark';

    expect(setTheme(theme)).toEqual({
      type: SET_THEME,
      payload: { theme },
    });

    theme = 'light';

    expect(setTheme(theme)).toEqual({
      type: SET_THEME,
      payload: { theme },
    });
  });

  test('toggleTheme', () => {
    expect(toggleTheme()).toEqual({
      type: TOGGLE_THEME,
    });
  });
});
