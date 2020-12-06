import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppBottomNav from './AppBottomNav';
import Home from './home/Home';
import Poll from './questions/Poll';
import CreateQuestion from './add/CreateQuestion';
import RouteSwitchTransition from '../shared/RouteSwitchTransition';
import LeaderBoard from './leader-board/LeaderBoard';

/**
 * Returns the transition key for the current `location.pathname`.
 * @param {object} location Router's location object.
 */
function getTransitionKey(location) {
  // Only return the part of the pathname that regards this component.
  // We don't want to transition nested routes from here.
  return (
    /^(\/(?:(?:home)|(?:questions)|(?:add)|(?:leader-board)))(\/)?/.exec(
      location.pathname
    )?.[1] ?? 'no-match'
  );
}

function PrivateRouter({ location }) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-full w-full flex flex-col">
      <AppHeader />

      <div className="flex-grow w-full h-auto">
        <RouteSwitchTransition transitionKey={getTransitionKey(location)}>
          <Switch location={location}>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/add">
              <CreateQuestion />
            </Route>

            <Route path="/leader-board">
              <LeaderBoard />
            </Route>

            <Route exact path="/questions/:id">
              <Poll />
            </Route>

            <Route>
              <Redirect from="/" to="/home" />
            </Route>
          </Switch>
        </RouteSwitchTransition>
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
