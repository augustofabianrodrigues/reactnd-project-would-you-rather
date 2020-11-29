import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionsGrid from './QuestionsGrid';

function AnsweredQuestions({ answeredQuestions }) {
  return <QuestionsGrid questions={answeredQuestions} />;
}

AnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.array.isRequired,
};

function mapStateToProps(state, props) {
  const authedUser = state.users[state.authedUser];
  const answeredQuestions = Object.keys(state.questions)
    .filter((questionId) => questionId in authedUser.answers)
    .map((questionId) => {
      const question = state.questions[questionId];
      return {
        ...question,
        author: state.users[question.author],
      };
    });

  return {
    ...props,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(AnsweredQuestions);
