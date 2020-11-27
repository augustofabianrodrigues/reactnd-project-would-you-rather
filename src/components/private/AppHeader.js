import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../shared/Avatar';
import { logout } from '../../actions/auth';

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
      <header className="w-full h-14 px-4 flex flex-row items-center justify-between flex-nowrap shadow-md">
        <div className="flex flex-row gap-x-2 items-center">
          <Avatar
            size="medium"
            avatarURL={avatarURL}
            description="Your Avatar"
          />
          <h1 className="xs:hidden text-sm md:text-base font-medium overflow-hidden truncate">
            Hello, {name}.
          </h1>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </header>
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
