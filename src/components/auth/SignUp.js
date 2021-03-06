import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import { getRandomAvatarUrl, getRandomName } from '../../utils/helpers';
import AvatarSelect from './AvatarSelect';
import { signUp } from '../../actions/auth';
import AppTitle from '../shared/AppTitle';
import TextInput from '../shared/TextInput';

class SignUp extends Component {
  static propTypes = {
    signInUrl: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    name: '',
    missingName: false,
    placeholderName: getRandomName(),
    avatarURL: getRandomAvatarUrl(),
  };

  handleNameChange = (e) => {
    const name = e.target.value;

    this.setState(() => ({
      name,
      missingName: name.length === 0,
    }));
  };

  handleAvatarChange = (avatarURL) => {
    this.setState(() => ({
      avatarURL,
    }));
  };

  validate = () => {
    const missingName = this.state.name.length === 0;
    this.setState(() => ({
      missingName,
    }));
    return !missingName;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.dispatch(
        signUp(
          {
            name: this.state.name,
            avatarURL: this.state.avatarURL,
          },
          this.props.location.state?.referrer
        )
      );
    }
  };

  getErrorMessage = () => {
    return this.state.missingName
      ? 'Please type your name. We want to know you!'
      : false;
  };

  render() {
    const { signInUrl } = this.props;

    return (
      <form
        className="w-full flex flex-col space-y-8"
        onSubmit={this.handleSubmit}
      >
        <AppTitle value="Sign Up" />

        <h3 className="text-xl font-semibold uppercase text-purple-700 dark:text-purple-400">
          Sign Up
        </h3>

        <TextInput
          id="name"
          label="How do you want to be called?"
          maxLength={50}
          placeholder={`e.g. ${this.state.placeholderName}`}
          value={this.state.name}
          onChange={this.handleNameChange}
          errorMessage={this.getErrorMessage()}
        />

        <AvatarSelect
          avatarURL={this.state.avatarURL}
          onChange={this.handleAvatarChange}
        />

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className={classNames(
              'block w-full py-2 px-4 rounded text-white font-medium text-center uppercase focus:outline-none',
              {
                'border border-indigo-300 dark:border-indigo-800 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500': !this
                  .state.missingName,
                'cursor-not-allowed bg-gray-300 dark:bg-gray-900 dark:text-gray-600': this
                  .state.missingName,
              }
            )}
            disabled={this.state.missingName}
          >
            Confirm
          </button>

          <Link
            to={{
              pathname: signInUrl,
              state: this.props.location.state,
            }}
            className="relative block w-full py-2 px-4 border border-gray-300 dark:border-gray-800 rounded font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-gray-700 dark:focus:ring-gray-100 focus:border-gray-700 dark:focus:border-gray-100 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <ArrowLeftIcon
              className="absolute left-2 top-2"
              svgClassName="h-6 w-6 text-gray-400"
            />
            Go Back
          </Link>
        </div>
      </form>
    );
  }
}

const ConnectedSignUp = connect()(SignUp);
export default withRouter(ConnectedSignUp);
