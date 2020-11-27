import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';

function PrivateRouter(props) {
  return (
    <div className="">
      <AppHeader />
    </div>
  );
}

PrivateRouter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(PrivateRouter);
