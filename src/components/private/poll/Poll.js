import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import OptionCard from './OptionCard';
import AppTitle from '../../shared/AppTitle';
import Avatar from '../../shared/Avatar';
import QuestionIcon from '../../icons/QuestionIcon';
import { answerQuestion } from '../../../actions/questions';

class Poll extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handleOptionSelect = (option) => {
    this.props.dispatch(
      answerQuestion({
        questionId: this.props.question.id,
        answer: option,
      })
    );
  };

  shouldComponentUpdate(props) {
    return !props.isLoggingOut;
  }

  render() {
    const { question, answer } = this.props;
    if (!question) {
      return <Redirect to="/" />;
    }

    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const questionDashedLine = (
      <div className="flex-grow h-auto sm:h-16 w-px border-l-2 border-dashed border-gray-400 dark:border-gray-700 rounded" />
    );

    return (
      <div className="h-full w-full p-4">
        <AppTitle value={`Poll by ${question.author.name}`} />
        <div className="h-full w-full max-w-xl mx-auto flex flex-col gap-8">
          <div className="flex flex-row gap-4 flex-nowrap overflow-hidden">
            <Avatar
              description={`${question.author.name}'s Avatar`}
              avatarURL={question.author.avatarURL}
            />
            <div className="flex flex-col my-auto">
              <h2 className="text-md sm:text-lg font-medium">
                {question.author.name} asks:
              </h2>
              <h3 className="text-xl sm:text-2xl font-medium">
                Would you rather...
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <OptionCard
              answer={answer === 'optionOne'}
              option={question.optionOne}
              results={
                answer && {
                  count: question.optionOne.votes.length,
                  total: totalVotes,
                }
              }
              onSelect={() => this.handleOptionSelect('optionOne')}
            />

            <div
              className={classNames(
                'w-full flex flex-col items-center transition-all duration-200',
                {
                  'h-40 opacity-100': !answer,
                  'h-20 opacity-0': answer,
                }
              )}
            >
              {questionDashedLine}
              <QuestionIcon svgClassName="flex-shrink w-12 h-12" />
              {questionDashedLine}
            </div>

            <OptionCard
              answer={answer === 'optionTwo'}
              option={question.optionTwo}
              results={
                answer && {
                  count: question.optionTwo.votes.length,
                  total: totalVotes,
                }
              }
              onSelect={() => this.handleOptionSelect('optionTwo')}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapPropsToState(state, props) {
  const question = state.questions[props.match.params?.id];
  const answer = state.users[state.authedUser]?.answers[question.id];

  return {
    ...props,
    answer,
    isLoggingOut: !state.authedUser,
    question: question && {
      ...question,
      author: state.users[question.author],
    },
  };
}

const ConnectedPoll = connect(mapPropsToState)(Poll);
export default withRouter(ConnectedPoll);
