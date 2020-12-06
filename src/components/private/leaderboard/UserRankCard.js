import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UserRankBadge from './UserRankBadge';
import Avatar from '../../shared/Avatar';

const FIRST_PLACE = 1;
const SECOND_PLACE = 2;
const THIRD_PLACE = 3;

function UserRankCard({ rankedUser }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={classNames(
          'w-full p-4 flex flex-col sm:flex-row sm:items-center gap-4 rounded overflow-hidden shadow bg-white dark:bg-gray-700',
          {
            'ring-2 ring-yellow-300': rankedUser.rank === FIRST_PLACE,
            'ring-2 ring-gray-400': rankedUser.rank === SECOND_PLACE,
            'ring-2 ring-yellow-600 dark:ring-red-400':
              rankedUser.rank === THIRD_PLACE,
          }
        )}
      >
        <div className="relative flex-shrink-0">
          <Avatar
            size="custom"
            className="flex-shrink-0 w-24 h-24"
            description={`${rankedUser.name}'s Avatar`}
            avatarURL={rankedUser.avatarURL}
          />

          <UserRankBadge
            rank={rankedUser.rank}
            className="absolute -bottom-px -right-px"
          />
        </div>

        <div className="w-full h-auto flex-grow flex flex-col gap-4">
          <p className="text-xl font-medium">{rankedUser.name}</p>

          <div className="flex flex-col flex-nowrap gap-2">
            <p className="flex flex-row flex-wrap items-center">
              <span className="flex-grow">Answered questions</span>
              <span className="flex-shrink px-2 py-1 text-center">
                {rankedUser.score.answered}
              </span>
            </p>

            <p className="flex flex-row flex-wrap items-center">
              <span className="flex-grow">Created questions</span>
              <span className="flex-shrink px-2 text-center">
                {rankedUser.score.created}
              </span>
            </p>

            <div className="w-full h-1 border-t border-gray-300 dark:border-gray-500" />

            <p className="flex flex-row flex-wrap items-center">
              <span className="flex-grow">Score</span>
              <span className="flex-shrink font-medium bg-indigo-700 dark:bg-purple-600 text-gray-50 rounded-full px-2 py-1 text-center leading-none">
                {rankedUser.score.total}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

UserRankCard.propTypes = {
  rankedUser: PropTypes.object.isRequired,
};

export default UserRankCard;
