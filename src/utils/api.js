import {
  _getUsers,
  _getQuestions,
  _addUser,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA';

export function addUser(user) {
  return _addUser(user);
}

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(author, optionOneText, optionTwoText) {
  return _saveQuestion({ author, optionOneText, optionTwoText });
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
