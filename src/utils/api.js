import { _getUsers, _getQuestions, _addUser } from './_DATA';

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
