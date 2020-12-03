import React, { Component } from 'react';
import classNames from 'classnames';
import AppTitle from '../../shared/AppTitle';
import TextInput from '../../shared/TextInput';
import { createQuestion } from '../../../actions/questions';
import { connect } from 'react-redux';

class CreateQuestion extends Component {
  state = {
    optionOne: {
      value: '',
      missing: false,
    },
    optionTwo: {
      value: '',
      missing: false,
    },
  };

  handleOptionChange = (option, value) => {
    this.setState(() => ({
      [option]: {
        value,
        missing: value.length === 0,
      },
    }));
  };

  handleOptionOneChange = (e) => {
    this.handleOptionChange('optionOne', e.target.value);
  };

  handleOptionTwoChange = (e) => {
    this.handleOptionChange('optionTwo', e.target.value);
  };

  validateOption = (option) => {
    const value = this.state[option].value;
    const missing = value.length === 0;
    this.setState(() => ({
      [option]: {
        value,
        missing,
      },
    }));
    return !missing;
  };

  validate = () =>
    ['optionOne', 'optionTwo']
      .map(this.validateOption)
      .every((result) => result);

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const d = this.props.dispatch(
        createQuestion({
          optionOneText: this.state.optionOne.value.trim(),
          optionTwoText: this.state.optionTwo.value.trim(),
        })
      );

      console.log(d);
    }
  };

  getErrorMessage = (option) => {
    return this.state[option].missing ? 'Please add a question here.' : false;
  };

  render() {
    const hasError =
      this.state.optionOne.missing || this.state.optionTwo.missing;

    return (
      <div className="h-full w-full p-4">
        <AppTitle value="Create Question" />
        <div className="h-full w-full max-w-2xl mx-auto flex flex-col">
          <div className="w-full h-auto p-4 rounded shadow-md bg-white dark:bg-gray-800">
            <form
              className="w-full flex flex-col gap-y-8"
              onSubmit={this.handleSubmit}
            >
              <div>
                <h3 className="text-xl font-semibold uppercase text-purple-700 dark:text-purple-400">
                  Create New Question
                </h3>

                <h4 className="mt-2 font-medium">Complete the question:</h4>
              </div>

              <div className="flex flex-col gap-2">
                <TextInput
                  id="optionOne"
                  label="Would you Rather..."
                  maxLength={50}
                  placeholder="Enter option one text here"
                  value={this.state.optionOne.value}
                  onChange={this.handleOptionOneChange}
                  errorMessage={this.getErrorMessage('optionOne')}
                />

                <TextInput
                  id="optionTwo"
                  label="...Or..."
                  maxLength={50}
                  placeholder="Enter option two text here"
                  value={this.state.optionTwo.value}
                  onChange={this.handleOptionTwoChange}
                  errorMessage={this.getErrorMessage('optionTwo')}
                />
              </div>

              <button
                type="submit"
                className={classNames(
                  'block w-full py-2 px-4 rounded text-white font-medium text-center uppercase focus:outline-none',
                  {
                    'border border-indigo-300 dark:border-indigo-800 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500': !hasError,
                    'cursor-not-allowed bg-gray-300 dark:bg-gray-900 dark:text-gray-600': hasError,
                  }
                )}
                disabled={hasError}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CreateQuestion);
