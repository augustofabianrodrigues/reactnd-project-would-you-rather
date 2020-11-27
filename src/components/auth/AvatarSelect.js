import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomAvatarUrl } from '../../utils/helpers';
import ImageInput from '../shared/ImageInput';
import Avatar from '../shared/Avatar';

class AvatarSelect extends Component {
  static propTypes = {
    avatarURL: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  randomizeAvatarUrl = () => {
    this.props.onChange(getRandomAvatarUrl());
  };

  handleImageInput = (image) => {
    this.props.onChange(URL.createObjectURL(image));
  };

  render() {
    return (
      <div className="flex flex-col gap-1">
        <label className="block font-medium text-gray-700 dark:text-gray-100">
          Avatar
        </label>
        <div className="flex gap-5 items-center">
          <Avatar avatarURL={this.props.avatarURL} description="Your Avatar" />

          <div className="flex flex-grow flex-row flex-wrap gap-1">
            <ImageInput
              onChange={this.handleImageInput}
              render={(loadFile) => (
                <button
                  type="button"
                  className="flex-1 bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={loadFile}
                >
                  Upload
                </button>
              )}
            />

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
    );
  }
}

export default AvatarSelect;
