import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { pathJoin } from '../../utils/helpers';
import AuthFooter from './AuthFooter';
import RouteSwitchTransition from '../shared/RouteSwitchTransition';

function Auth(props) {
  const { location, match } = props;

  return (
    <div className="overflow-x-hidden overflow-y-scroll h-full w-full flex flex-col lg:flex-row">
      <div className="flex-shrink lg:flex-shrink-0 lg:flex-grow bg-gray-100 dark:bg-gray-900 shadow-inner">
        <header className="m-auto h-full w-full max-w-xl lg:max-w-full flex flex-col lg:justify-center xl:items-center p-4 lg:p-8 lg:space-y-20">
          <div className="lg:space-y-4">
            <h2 className="lg:text-xl xl:text-4xl">Welcome to</h2>
            <h1 className="text-2xl lg:text-4xl xl:text-6xl font-medium">
              Would You Rather App
            </h1>
          </div>
          <img
            alt="Would You Rather Hero"
            src={require('../../illustrations/hero.svg').default}
            className="bg-no-repeat bg-contain bg-fixed p-4 w-auto max-w-xl h-52 sm:h-96"
          />
        </header>
      </div>

      <div className="lg:w-2/5 xl:w-1/3 2xl:w-1/4 flex-grow lg:flex-grow-0 lg:flex-shrink bg-gray-50 dark:bg-gray-800">
        <div className="h-full flex flex-col space-y-12 mx-auto w-full max-w-xl lg:max-w-lg p-4 lg:p-8">
          <main className="w-full mb-auto lg:m-auto">
            <RouteSwitchTransition transitionKey={location.pathname}>
              <Switch location={location}>
                <Route exact path={pathJoin(match.path, 'sign-up')}>
                  <SignUp signInUrl={pathJoin(match.url, 'sign-in')} />
                </Route>
                <Route exact path={pathJoin(match.path, 'sign-in')}>
                  <SignIn signUpUrl={pathJoin(match.url, 'sign-up')} />
                </Route>
                <Route>
                  <Redirect
                    to={{
                      pathname: pathJoin(match.url, 'sign-in'),
                      state: location.state,
                    }}
                  />
                </Route>
              </Switch>
            </RouteSwitchTransition>
          </main>

          <AuthFooter />
        </div>
      </div>
    </div>
  );
}

Auth.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Auth);
