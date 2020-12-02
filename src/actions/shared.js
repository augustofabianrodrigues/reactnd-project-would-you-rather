export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    payload: {
      question,
    },
  };
}

export function saveQuestionAnswer(authedUser, questionId, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: {
      authedUser,
      questionId,
      answer,
    },
  };
}
