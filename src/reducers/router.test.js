import { clearRedirect, setRedirect } from '../actions/router';
import router from './router';

describe('reducers::router', () => {
  test('setRedirect', () => {
    let nextState = router(undefined, setRedirect('/home'));
    expect(nextState).toEqual({ redirect: '/home' });
    nextState = router(nextState, setRedirect('/add'));
    expect(nextState).toEqual({ redirect: '/add' });
    nextState = router(undefined, {});
    expect(nextState).toEqual({ redirect: null });
  });

  test('routerRedirectReset', () => {
    let nextState = router({ redirect: '/add' }, clearRedirect());
    expect(nextState).toEqual({ redirect: null });
  });
});
