import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../shared/Avatar';
import { logout } from '../../actions/auth';
import LogOutIcon from '../icons/LogOutIcon';
import ThemeToggle from './ThemeToggle';

class AppHeader extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  handleLogout = () => {
    this.props.dispatch(logout());
  };

  shouldComponentUpdate(props) {
    // If the user has logged out, this would be re-rendered without the user during the pages transition animation.
    // Keep this component as is for the animation to finish with the user that was logged in.
    return Boolean(props.user);
  }

  render() {
    const { user } = this.props;
    const { name, avatarURL } = user;

    return (
      <div className="sticky top-0 z-30 flex-shrink w-full h-auto shadow-md bg-white dark:bg-gray-700 px-4">
        <header className="w-full max-w-7xl h-14 mx-auto flex flex-row items-center justify-between flex-nowrap">
          <div className="flex flex-row gap-x-2 items-center overflow-hidden max-h-full">
            <Avatar
              size="medium"
              avatarURL={avatarURL}
              description="Your Avatar"
            />
            <h1 className="block text-sm md:text-base font-medium truncate">
              Hello, {name}
            </h1>
          </div>

          <div className="flex flex-row gap-x-4 lg:gap-x-8 items-center">
            <ThemeToggle />

            <button
              onClick={this.handleLogout}
              className="text-xs flex flex-col gap-1 p-1 items-center"
            >
              <LogOutIcon svgClassName="h-6 w-6" />
            </button>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    user: state.users[state.authedUser],
  };
}

export default connect(mapStateToProps)(AppHeader);
