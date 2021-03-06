import { RECEIVE_QUESTIONS } from '../actions/questions';
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/shared';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.payload.questions,
      };

    case SAVE_QUESTION:
      const { question } = action.payload;

      return {
        ...state,
        [question.id]: question,
      };

    case SAVE_QUESTION_ANSWER:
      const { authedUser, questionId, answer } = action.payload;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([authedUser]),
          },
        },
      };

    default:
      return state;
  }
}
