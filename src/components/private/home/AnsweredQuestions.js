import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionsGrid from './QuestionsGrid';

class AnsweredQuestions extends Component {
  static propTypes = {
    answeredQuestions: PropTypes.array.isRequired,
  };

  shouldComponentUpdate(props) {
    // If the user has logged out, this would be re-rendered without the user during the pages transition animation.
    // Keep this component as is for the animation to finish with the user that was logged in.
    return props.answeredQuestions !== null;
  }

  render() {
    const { answeredQuestions } = this.props;
    return <QuestionsGrid questions={answeredQuestions} />;
  }
}

function mapStateToProps(state, props) {
  const authedUser = state.users[state.authedUser];
  if (!authedUser) {
    return {
      ...props,
      answeredQuestions: null,
    };
  }

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
