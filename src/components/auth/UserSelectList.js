import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import UserSelectListItem from './UserSelectListItem';

class UserSelectList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleOutsideClick = (e) => {
    if (this.ref.current !== null && !this.ref.current.contains(e.target)) {
      this.setState(() => ({
        open: false,
      }));
    }
  };

  handleUserSelect = (user) => {
    this.setState(() => ({
      open: false,
    }));
    this.props.onSelect(user);
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    return (
      <div>
        <label
          id="listbox-label"
          className="block font-medium text-gray-700 dark:text-gray-100"
        >
          Please sign in to continue
        </label>
        <div ref={this.ref} className="mt-1 relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="relative w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={this.toggleOpen}
          >
            <span className="flex items-center">
              <span className="block truncate text-gray-400">Select user</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <CSSTransition
            in={this.state.open}
            timeout={{ exit: 100 }}
            unmountOnExit
            classNames={{
              exitActive: 'opacity-0 transition-opacity ease-in duration-100',
            }}
          >
            <div className="absolute mt-1 w-full rounded-md bg-white dark:bg-gray-700 shadow-lg">
              <ul
                tabIndex="0"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
                className=" max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {this.props.users.map((user) => (
                  <UserSelectListItem
                    key={user.id}
                    user={user}
                    onClick={() => this.handleUserSelect(user)}
                  />
                ))}
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default UserSelectList;
