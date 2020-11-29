import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function AppBottomLink(props) {
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

AppBottomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppBottomLink;
