import React from 'react';
import PropTypes from 'prop-types';

function UserSelectListItem(props) {
  return (
    <li
      tabIndex="0"
      id="listbox-item-0"
      role="option"
      aria-selected={false}
      className="cursor-pointer select-none relative py-2 pl-3 pr-9 transition duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-900"
      onClick={props.onClick}
    >
      <div className="flex items-center">
        <img
          src={props.user.avatarURL}
          alt={`${props.user.name}'s Avatar`}
          className="flex-shrink-0 h-6 w-6 rounded-full"
        />
        <span className="ml-3 block font-normal truncate">
          {props.user.name}
        </span>
      </div>
    </li>
  );
}

UserSelectListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserSelectListItem;
