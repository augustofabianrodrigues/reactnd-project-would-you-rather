import React from 'react';
import PropTypes from 'prop-types';
import UserMedal from './UserMedal';

const GOLD_RANK = 1;
const SILVER_RANK = 2;
const BRONZE_RANK = 3;

const medalComponentByRank = {
  [GOLD_RANK]: () => <UserMedal type="gold" />,
  [SILVER_RANK]: () => <UserMedal type="silver" />,
  [BRONZE_RANK]: () => <UserMedal type="bronze" />,
};

function renderDefaultBadge(rank) {
  return (
    <span className="font-medium bg-indigo-700 dark:bg-purple-600 text-gray-50 rounded-full px-2 py-1 text-center">
      #{rank}
    </span>
  );
}

function renderBadge(rank) {
  const MedalComponent = medalComponentByRank[rank];

  if (MedalComponent) {
    return <MedalComponent />;
  }

  return renderDefaultBadge(rank);
}

function UserRankBadge({ rank, className }) {
  return <span className={className}>{renderBadge(rank)}</span>;
}

UserRankBadge.propTypes = {
  rank: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default UserRankBadge;
