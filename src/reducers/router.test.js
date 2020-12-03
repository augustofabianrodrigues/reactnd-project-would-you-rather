import { clearRedirect, setRedirect } from '../actions/router';
import router from './router';

describe('reducers::router', () => {
  test('setRedirect', () => {
    let nextState = router(undefined, setRedirect('/home'));
    expect(nextState).toEqual({ redirect: '/home' });
    nextState = router(nextState, setRedirect('/create'));
    expect(nextState).toEqual({ redirect: '/create' });
    nextState = router(undefined, {});
    expect(nextState).toEqual({ redirect: null });
  });

  test('routerRedirectReset', () => {
    let nextState = router({ redirect: '/create' }, clearRedirect());
    expect(nextState).toEqual({ redirect: null });
  });
});
