import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HomeTabLink(props) {
  return (
    <NavLink
      to={props.to}
      className="flex flex-col flex-1 items-center justify-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
      activeClassName="bg-gray-100 dark:bg-gray-900 font-semibold text-indigo-500 dark:text-purple-400 cursor-default"
    >
      {props.children}
    </NavLink>
  );
}

HomeTabLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HomeTabLink;
