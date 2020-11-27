import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Auth from './auth/Auth';
import { connect } from 'react-redux';
import PrivateRouter from './private/PrivateRouter';

function AppRouter(props) {
  const { location, isAuthenticated } = props;

  // Use this key so it only transitions from auth to authenticated routes and vice-versa.
  const transitionKey = isAuthenticated ? 'authed' : 'not-authed';

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={transitionKey}
        timeout={500}
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-100 transition-opacity duration-500',
          exitActive:
            'opacity-0 transform translate-x-full transition duration-500',
        }}
      >
        <Switch location={location}>
          <Route path="/auth">
            {isAuthenticated ? <Redirect push to="/" /> : <Auth />}
          </Route>

          <Route>
            {isAuthenticated ? <PrivateRouter /> : <Redirect push to="/auth" />}
          </Route>
        </Switch>
      </CSSTransition>
    </SwitchTransition>
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
