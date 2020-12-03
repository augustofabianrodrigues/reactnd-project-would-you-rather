import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { call, put, select, takeLeading } from 'redux-saga/effects';
import { ANSWER_QUESTION, CREATE_QUESTION } from '../actions/questions';
import { setRedirect } from '../actions/router';
import { saveQuestion, saveQuestionAnswer } from '../actions/shared';
import * as api from '../utils/api';

export function* createQuestion(action) {
  yield put(showLoading());
  try {
    const { optionOneText, optionTwoText } = action.payload;
    const { authedUser } = yield select();
    const newQuestion = yield call(
      api.saveQuestion,
      authedUser,
      optionOneText,
      optionTwoText
    );
    yield put(saveQuestion(newQuestion));
    yield put(setRedirect('/'));
  } finally {
    yield put(hideLoading());
  }
}

export function* answerQuestion(action) {
  yield put(showLoading());
  try {
    const { questionId, answer } = action.payload;
    const { authedUser } = yield select();
    yield call(api.saveQuestionAnswer, authedUser, questionId, answer);
    yield put(saveQuestionAnswer(authedUser, questionId, answer));
  } finally {
    yield put(hideLoading());
  }
}

export function* watchCreateQuestion() {
  yield takeLeading(CREATE_QUESTION, createQuestion);
}

export function* watchAnswerQuestion() {
  yield takeLeading(ANSWER_QUESTION, answerQuestion);
}
