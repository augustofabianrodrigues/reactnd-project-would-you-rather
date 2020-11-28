import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import theme from './theme';

export default combineReducers({
  authedUser,
  users,
  questions,
  theme,
  loadingBar: loadingBarReducer,
});
