import { SET_REDIRECT, CLEAR_REDIRECT } from '../actions/router';

export default function router(state = { redirect: null }, action) {
  switch (action.type) {
    case SET_REDIRECT:
      return {
        redirect: action.payload.to,
      };

    case CLEAR_REDIRECT:
      return {
        redirect: null,
      };

    default:
      return state;
  }
}
