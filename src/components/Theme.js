import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

function Theme(props) {
  return <Helmet htmlAttributes={{ class: props.isDark ? 'dark' : null }} />;
}

function mapStateToProps(state, props) {
  return {
    ...props,
    isDark: state.theme === 'dark',
  };
}

export default connect(mapStateToProps)(Theme);
