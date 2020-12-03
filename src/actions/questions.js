export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    payload: {
      questions,
    },
  };
}

export function createQuestion({ optionOneText, optionTwoText }) {
  return {
    type: CREATE_QUESTION,
    payload: {
      optionOneText,
      optionTwoText,
    },
  };
}

export function answerQuestion({ questionId, answer }) {
  return {
    type: ANSWER_QUESTION,
    payload: {
      questionId,
      answer,
    },
  };
}
