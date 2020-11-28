import React from 'react';
import { connect } from 'react-redux';
import LightThemeIcon from '../icons/LightThemeIcon';
import { toggleTheme } from '../../actions/theme';
import DarkThemeIcon from '../icons/DarkThemeIcon';

function ThemeToggle(props) {
  const handleClick = () => props.dispatch(toggleTheme());

  return (
    <button
      className="text-xs flex flex-col gap-1 p-1 items-center"
      onClick={handleClick}
    >
      {props.isDark ? (
        <DarkThemeIcon svgClassName="h-6 w-6" />
      ) : (
        <LightThemeIcon svgClassName="h-6 w-6" />
      )}
    </button>
  );
}

function mapStateToProps(state, props) {
  return {
    ...props,
    isDark: state.theme === 'dark',
  };
}

export default connect(mapStateToProps)(ThemeToggle);
