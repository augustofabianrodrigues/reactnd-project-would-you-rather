import React from 'react';
import { connect } from 'react-redux';
import UserRankCard from './UserRankCard';

function LeaderBoard({ users }) {
  return (
    <div className="p-4">
      <div className="h-full w-full max-w-7xl mx-auto grid grid-flow-row auto-rows-auto auto-cols-max grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <UserRankCard key={user.id} rankedUser={user} />
        ))}
      </div>
    </div>
  );
}

function userScore(user) {
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;
  const total = answered + created;

  return {
    answered,
    created,
    total,
  };
}

function reduceRankedUsers(rankedUsers, user) {
  const previousRanked = rankedUsers[rankedUsers.length - 1];

  return [
    ...rankedUsers,
    {
      ...user,

      // If users have the same score, they should have the same rank.
      rank:
        previousRanked.score.total === user.score.total
          ? previousRanked.rank
          : previousRanked.rank + 1,
    },
  ];
}

function mapUsersRanks(sortedUsers) {
  const firstRanked = {
    ...sortedUsers[0],
    rank: 1,
  };

  if (sortedUsers.length === 1) {
    return firstRanked;
  }

  return sortedUsers.slice(1).reduce(reduceRankedUsers, [firstRanked]);
}

function mapStateToProps(state, props) {
  const sortedUsers = Object.values(state.users)
    .map((user) => ({
      ...user,
      score: userScore(user),
    }))
    .sort((userA, userB) => {
      return userB.score.total - userA.score.total;
    });

  const rankedUsers = mapUsersRanks(sortedUsers);

  return {
    ...props,
    users: rankedUsers,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
