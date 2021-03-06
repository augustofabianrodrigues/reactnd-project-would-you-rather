import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionsGrid from './QuestionsGrid';
import AppTitle from '../../shared/AppTitle';
import { formatQuestionsList } from '../../../utils/helpers';

class AnsweredQuestions extends Component {
  static propTypes = {
    answeredQuestions: PropTypes.array,
  };

  shouldComponentUpdate(props) {
    // If the user has logged out, this would be re-rendered without the user during the pages transition animation.
    // Keep this component as is for the animation to finish with the user that was logged in.
    return props.answeredQuestions !== null;
  }

  render() {
    const { answeredQuestions } = this.props;
    return (
      <Fragment>
        <AppTitle value="Answered Questions" />
        <QuestionsGrid questions={answeredQuestions} />
      </Fragment>
    );
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

  const answeredQuestions = formatQuestionsList(
    state.questions,
    state.users,
    (questionId) => questionId in authedUser.answers
  );

  return {
    ...props,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(AnsweredQuestions);
