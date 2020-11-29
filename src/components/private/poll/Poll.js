import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function Poll({ question }) {
  if (!question) {
    return <Redirect to="/" />;
  }

  return <div>Poll: {question.id}</div>;
}

Poll.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapPropsToState(state, props) {
  return {
    ...props,
    question: state.questions[props.match?.params?.id],
  };
}

const ConnectedPoll = connect(mapPropsToState)(Poll);
export default withRouter(ConnectedPoll);
