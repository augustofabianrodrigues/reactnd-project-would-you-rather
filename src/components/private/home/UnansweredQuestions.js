import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionsGrid from './QuestionsGrid';

function UnansweredQuestions({ unansweredQuestions }) {
  return <QuestionsGrid questions={unansweredQuestions} />;
}

UnansweredQuestions.propTypes = {
  unansweredQuestions: PropTypes.array.isRequired,
};

function mapStateToProps(state, props) {
  const authedUser = state.users[state.authedUser];
  const unansweredQuestions = Object.keys(state.questions)
    .filter((questionId) => !(questionId in authedUser.answers))
    .map((questionId) => {
      const question = state.questions[questionId];
      return {
        ...question,
        author: state.users[question.author],
      };
    });

  return {
    ...props,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(UnansweredQuestions);
