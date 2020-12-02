import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { call, put, select } from 'redux-saga/effects';
import { ANSWER_QUESTION, CREATE_QUESTION } from '../actions/questions';
import { createQuestion, answerQuestion } from './questions';
import * as api from '../utils/api';
import { saveQuestion, saveQuestionAnswer } from '../actions/shared';

describe('sagas::questions', () => {
  test('createQuestion', () => {
    let iterator = createQuestion({
      type: CREATE_QUESTION,
      payload: {
        question: {
          optionOneText: 'write JavaScript',
          optionTwoText: 'write Swift',
        },
      },
    });
    expect(iterator.next().value).toEqual(put(showLoading()));
    expect(iterator.next().value).toEqual(select());
    expect(iterator.next({ authedUser: 'johndoe' }).value).toEqual(
      call(api.saveQuestion, 'johndoe', 'write JavaScript', 'write Swift')
    );
    expect(
      iterator.next({
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
      }).value
    ).toEqual(
      put(
        saveQuestion({
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
        })
      )
    );
    expect(iterator.next().value).toEqual(put(hideLoading()));

    iterator = createQuestion({
      type: CREATE_QUESTION,
      payload: {
        question: {
          optionOneText: 'write JavaScript',
          optionTwoText: 'write Swift',
        },
      },
    });
    expect(iterator.next().value).toEqual(put(showLoading()));
    expect(iterator.next().value).toEqual(select());
    expect(iterator.next({ authedUser: 'johndoe' }).value).toEqual(
      call(api.saveQuestion, 'johndoe', 'write JavaScript', 'write Swift')
    );
    expect(iterator.throw().value).toEqual(put(hideLoading()));
  });

  test('answerQuestion', () => {
    let iterator = answerQuestion({
      type: ANSWER_QUESTION,
      payload: {
        questionId: 'xj352vofupe1dqz9emx13r',
        answer: 'optionOne',
      },
    });
    expect(iterator.next().value).toEqual(put(showLoading()));
    expect(iterator.next().value).toEqual(select());
    expect(iterator.next({ authedUser: 'johndoe' }).value).toEqual(
      call(
        api.saveQuestionAnswer,
        'johndoe',
        'xj352vofupe1dqz9emx13r',
        'optionOne'
      )
    );
    expect(iterator.next().value).toEqual(
      put(saveQuestionAnswer('johndoe', 'xj352vofupe1dqz9emx13r', 'optionOne'))
    );
    expect(iterator.next().value).toEqual(put(hideLoading()));

    iterator = answerQuestion({
      type: ANSWER_QUESTION,
      payload: {
        questionId: 'xj352vofupe1dqz9emx13r',
        answer: 'optionOne',
      },
    });
    expect(iterator.next().value).toEqual(put(showLoading()));
    expect(iterator.next().value).toEqual(select());
    expect(iterator.next({ authedUser: 'johndoe' }).value).toEqual(
      call(
        api.saveQuestionAnswer,
        'johndoe',
        'xj352vofupe1dqz9emx13r',
        'optionOne'
      )
    );
    expect(iterator.throw().value).toEqual(put(hideLoading()));
  });
});
