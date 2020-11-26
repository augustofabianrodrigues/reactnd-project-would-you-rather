import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserSelectList from './UserSelectList';
import { signIn } from '../../actions/auth';

class SignIn extends Component {
  static propTypes = {
    signUpUrl: PropTypes.string.isRequired,
  };

  handleUserSelect = (user) => {
    this.props.dispatch(signIn(user.id));
  };

  render() {
    const { users, signUpUrl } = this.props;

    return (
      <form className="w-full flex flex-col space-y-8">
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
          to={signUpUrl}
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

export default connect(mapStateToProps)(SignIn);
