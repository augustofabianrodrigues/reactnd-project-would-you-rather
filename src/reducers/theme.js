import { SET_THEME } from '../actions/theme';

export default function theme(state = 'light', action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload.theme;

    default:
      return state;
  }
}
