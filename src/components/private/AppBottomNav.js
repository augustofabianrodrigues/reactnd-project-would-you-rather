import React from 'react';
import HomeIcon from '../icons/HomeIcon';
import NewQuestionIcon from '../icons/NewQuestionIcon';
import LeaderBoardIcon from '../icons/LeaderBoardIcon';
import AppBottomLink from './AppBottomLink';

function AppBottomNav() {
  return (
    <aside className="sticky bottom-0 z-30 flex-shrink w-full h-auto shadow-negative-md bg-white dark:bg-gray-700 px-4">
      <nav className="w-full max-w-xl h-14 mx-auto flex flex-row items-center justify-between flex-nowrap">
        <AppBottomLink to="/home">
          <HomeIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">Home</span>
        </AppBottomLink>

        <AppBottomLink to="/add">
          <NewQuestionIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">New Question</span>
        </AppBottomLink>

        <AppBottomLink to="/leaderboard">
          <LeaderBoardIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">Leader Board</span>
        </AppBottomLink>
      </nav>
    </aside>
  );
}

export default AppBottomNav;
