import { setTheme } from '../actions/theme';
import theme from './theme';

describe('reducers::theme', () => {
  test('setTheme', () => {
    let nextState = theme(undefined, setTheme('dark'));
    expect(nextState).toEqual('dark');
    nextState = theme(nextState, setTheme('light'));
    expect(nextState).toEqual('light');
    nextState = theme(nextState, setTheme(null));
    expect(nextState).toEqual(null);
    nextState = theme(undefined, {});
    expect(nextState).toEqual('light');
  });
});
