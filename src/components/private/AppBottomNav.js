import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import NewQuestionIcon from '../icons/NewQuestionIcon';
import LeaderBoardIcon from '../icons/LeaderBoardIcon';

function BottomLink(props) {
  return (
    <NavLink
      to={props.to}
      className="w-24 text-xs font-medium flex flex-col items-center justify-center transition-colors hover:text-indigo-700 dark:hover:text-purple-300"
      activeClassName="font-semibold text-indigo-500 dark:text-purple-400"
    >
      {props.children}
    </NavLink>
  );
}

BottomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function AppBottomNav() {
  return (
    <aside className="sticky bottom-0 z-10 flex-shrink w-full h-auto shadow-negative-md bg-white dark:bg-gray-700 px-4">
      <nav className="w-full max-w-xl h-14 mx-auto flex flex-row items-center justify-between flex-nowrap">
        <BottomLink to="/">
          <HomeIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">Home</span>
        </BottomLink>

        <BottomLink to="/create">
          <NewQuestionIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">New Question</span>
        </BottomLink>

        <BottomLink to="/leader-board">
          <LeaderBoardIcon svgClassName="w-6 h-6" />
          <span className="hidden sm:inline">Leader Board</span>
        </BottomLink>
      </nav>
    </aside>
  );
}

export default AppBottomNav;
