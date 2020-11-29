import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Auth from './auth/Auth';
import { connect } from 'react-redux';
import PrivateRouter from './private/PrivateRouter';
import RouteSwitchTransition from './shared/RouteSwitchTransition';

function AppRouter(props) {
  const { location, isAuthenticated } = props;

  // Use this key so it only transitions from auth to authenticated routes and vice-versa.
  const transitionKey = isAuthenticated ? 'authed' : 'not-authed';

  return (
    <RouteSwitchTransition transitionKey={transitionKey}>
      <Switch location={location}>
        <Route path="/auth">
          {isAuthenticated ? <Redirect push to="/" /> : <Auth />}
        </Route>

        <Route>
          {isAuthenticated ? <PrivateRouter /> : <Redirect push to="/auth" />}
        </Route>
      </Switch>
    </RouteSwitchTransition>
  );
}

AppRouter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps({ authedUser }, props) {
  return {
    ...props,
    isAuthenticated: Boolean(authedUser),
  };
}

const AppRouterContainer = connect(mapStateToProps)(AppRouter);
export default withRouter(AppRouterContainer);
