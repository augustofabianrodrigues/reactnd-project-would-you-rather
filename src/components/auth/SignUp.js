import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowLeft from '../icons/ArrowLeft';
import { getRandomAvatarUrl, getRandomName } from '../../utils/helpers';

class SignUp extends Component {
  static propTypes = {
    signInUrl: PropTypes.string.isRequired,
  };

  state = {
    name: '',
    placeholderName: getRandomName(),
    avatarUrl: getRandomAvatarUrl(),
  };

  randomizeAvatarUrl = () => {
    this.setState(() => ({
      avatarUrl: getRandomAvatarUrl(),
    }));
  };

  render() {
    const { signInUrl } = this.props;

    return (
      <form className="w-full flex flex-col space-y-8">
        <h3 className="text-xl font-semibold uppercase text-purple-700 dark:text-purple-400">
          Sign Up
        </h3>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 dark:text-gray-100"
          >
            How do you want to be called?
          </label>
          <input
            type="text"
            id="name"
            maxLength={50}
            placeholder={`e.g. ${this.state.placeholderName}`}
            className="placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="block font-medium text-gray-700 dark:text-gray-100">
            Avatar
          </label>
          <div className="flex gap-5 items-center">
            <span className="flex flex-shrink-0 h-14 sm:h-16 xl:h-18 w-14 sm:w-16 xl:w-18 rounded-full overflow-hidden">
              <img alt="Your Avatar" src={this.state.avatarUrl} />
            </span>

            <div className="flex flex-grow flex-row flex-wrap gap-1">
              <button
                type="button"
                className="flex-1 bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Upload
              </button>

              <button
                type="button"
                className="flex-1 bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={this.randomizeAvatarUrl}
              >
                Randomize
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="block w-full py-2 px-4 border border-indigo-300 dark:border-indigo-800 rounded text-white font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
          >
            Confirm
          </button>

          <Link
            to={signInUrl}
            className="relative block w-full py-2 px-4 border border-gray-300 dark:border-gray-800 rounded font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-gray-700 dark:focus:ring-gray-100 focus:border-gray-700 dark:focus:border-gray-100 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <ArrowLeft
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

export default SignUp;
