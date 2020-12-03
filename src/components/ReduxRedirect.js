import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearRedirect } from '../actions/router';

class ReduxRedirect extends Component {
  componentDidUpdate() {
    if (this.props.to) {
      this.props.dispatch(clearRedirect());
    }
  }

  render() {
    if (this.props.to) {
      return <Redirect to={this.props.to} />;
    }

    return null;
  }
}

ReduxRedirect.propTypes = {
  to: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    ...props,
    to: state.router.redirect,
  };
}

export default connect(mapStateToProps)(ReduxRedirect);
