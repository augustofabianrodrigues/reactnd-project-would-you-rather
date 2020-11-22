import { ADD_USER, RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload.users,
      };

    case ADD_USER:
      return {
        ...state,
        [action.payload.user.id]: action.payload.user,
      };

    default:
      return state;
  }
}
