import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/shared';
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

    case SAVE_QUESTION:
      const { question } = action.payload;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        },
      };

    case SAVE_QUESTION_ANSWER:
      const { authedUser, questionId, answer } = action.payload;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer,
          },
        },
      };

    default:
      return state;
  }
}
