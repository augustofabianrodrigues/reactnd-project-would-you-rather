import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppBottomNav from './AppBottomNav';
import Home from './home/Home';

function PrivateRouter(props) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-full w-full flex flex-col">
      <AppHeader />

      <div className="flex-grow w-full h-auto">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route>
            <Redirect from="/" to="/home" />
          </Route>
        </Switch>
      </div>

      <AppBottomNav />
    </div>
  );
}

PrivateRouter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(PrivateRouter);
