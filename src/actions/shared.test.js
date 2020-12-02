import {
  saveQuestion,
  SAVE_QUESTION,
  saveQuestionAnswer,
  SAVE_QUESTION_ANSWER,
} from './shared';

describe('actions::shared', () => {
  test('saveQuestion', () => {
    const action = saveQuestion({
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: [],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: [],
        text: 'write Swift',
      },
    });

    expect(action).toEqual({
      type: SAVE_QUESTION,
      payload: {
        question: {
          id: 'xj352vofupe1dqz9emx13r',
          author: 'johndoe',
          timestamp: 1493579767190,
          optionOne: {
            votes: [],
            text: 'write JavaScript',
          },
          optionTwo: {
            votes: [],
            text: 'write Swift',
          },
        },
      },
    });
  });

  test('saveQuestionAnswer', () => {
    const action = saveQuestionAnswer(
      'johndoe',
      'xj352vofupe1dqz9emx13r',
      'optionOne'
    );

    expect(action).toEqual({
      type: SAVE_QUESTION_ANSWER,
      payload: {
        authedUser: 'johndoe',
        questionId: 'xj352vofupe1dqz9emx13r',
        answer: 'optionOne',
      },
    });
  });
});
