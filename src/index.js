import React from 'react';
import ReactDOM from 'react-dom';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {},
applyMiddleware(loadingBarMiddleware(), sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
