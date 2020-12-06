import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserSelectList from './UserSelectList';
import { signIn } from '../../actions/auth';
import AppTitle from '../shared/AppTitle';

class SignIn extends Component {
  static propTypes = {
    signUpUrl: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handleUserSelect = (user) => {
    this.props.dispatch(signIn(user.id, this.props.location.state?.referrer));
  };

  render() {
    const { users, signUpUrl } = this.props;

    return (
      <form className="w-full flex flex-col space-y-8">
        <AppTitle value="Sign In" />

        <h3 className="text-xl font-semibold uppercase text-purple-700 dark:text-purple-400">
          Sign In
        </h3>

        <UserSelectList users={users} onSelect={this.handleUserSelect} />

        <div className="flex flex-row flex-nowrap w-full items-center">
          <span className="flex-grow h-px rounded bg-gray-400" />
          <span className="px-2 uppercase font-medium">Or</span>
          <span className="flex-grow h-px rounded bg-gray-400" />
        </div>

        <Link
          to={{
            pathname: signUpUrl,
            state: this.props.location.state,
          }}
          className="block w-full py-2 px-4 border border-indigo-300 dark:border-indigo-800 rounded text-white font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
        >
          Sign Up
        </Link>
      </form>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    users: Object.values(state.users),
  };
}

const ConnectedSignIn = connect(mapStateToProps)(SignIn);
export default withRouter(ConnectedSignIn);
