import { setAuthedUser, SET_AUTHED_USER } from './authedUser';

test('setAuthedUser', () => {
  const id = 'johndoe';

  expect(setAuthedUser(id)).toEqual({
    type: SET_AUTHED_USER,
    payload: { id },
  });

  expect(setAuthedUser(null)).toEqual({
    type: SET_AUTHED_USER,
    payload: { id: null },
  });
});
