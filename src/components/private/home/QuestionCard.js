import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../shared/Avatar';
import { Link } from 'react-router-dom';
import { pathJoin } from '../../../utils/helpers';

function QuestionCard({ question }) {
  return (
    <div className="w-full flex flex-col rounded overflow-hidden shadow bg-white dark:bg-gray-700">
      <div className="w-full flex-grow p-4 flex flex-row flex-nowrap gap-4 overflow-hidden">
        <Avatar
          size="large"
          className="flex-shrink-0"
          description={`${question.author.name}'s Avatar`}
          avatarURL={question.author.avatarURL}
        />

        <div className="h-auto flex-grow flex flex-col">
          <p className="text-sm">
            <span className="font-medium">{question.author.name}</span> asks:
          </p>

          <div className="pt-4 flex-grow">
            <p className="font-medium">Would you rather</p>
            <p>...{question.optionOne.text}...</p>
          </div>
        </div>
      </div>

      <Link
        to={pathJoin('/questions', question.id)}
        className="flex-shrink uppercase font-medium w-full px-4 py-2 flex items-center justify-center text-white dark:text-purple-100 bg-indigo-800 hover:bg-indigo-700 dark:bg-purple-900 dark:hover:bg-purple-700"
      >
        View Poll
      </Link>
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionCard;
