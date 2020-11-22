import { setAuthedUser } from '../actions/authedUser';
import authedUser from './authedUser';

test('initial state', () => {
  expect(authedUser(undefined, {})).toEqual(null);
});

test('setAuthedUser', () => {
  const id = 'sarahedo';
  expect(authedUser(undefined, setAuthedUser(id))).toEqual(id);
});
