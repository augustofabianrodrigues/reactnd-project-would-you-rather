import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function AppTitle({ value }) {
  return (
    <Helmet
      titleTemplate="%s | Would You Rather"
      defaultTitle="Would You Rather"
      title={value}
    />
  );
}

AppTitle.propTypes = {
  value: PropTypes.string,
};

export default AppTitle;
