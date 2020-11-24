import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { pathJoin } from '../../utils/helpers';

function Auth(props) {
  const { match } = props;

  return (
    <div className="overflow-y-auto h-full w-full flex flex-col lg:flex-row">
      <header className="flex flex-col flex-shrink lg:flex-shrink-0 lg:flex-grow lg:justify-center xl:items-center p-4 lg:p-8 lg:space-y-20 bg-gray-100 dark:bg-gray-900 shadow-inner">
        <div className="lg:space-y-4">
          <h2 className="lg:text-xl xl:text-4xl">Welcome to</h2>
          <h1 className="text-2xl lg:text-4xl xl:text-6xl font-medium">
            Would You Rather App
          </h1>
        </div>
        <img
          alt="Would You Rather Hero"
          src={require('../../illustrations/hero.svg').default}
          className="bg-no-repeat bg-contain bg-fixed p-4 w-full max-w-xl"
        />
      </header>

      <div className="flex flex-col flex-grow space-y-12 lg:flex-grow-0 lg:flex-shrink min-w-max p-4 lg:p-8 bg-gray-50 dark:bg-gray-800">
        <main className="lg:w-96 lg:m-auto">
          <Switch>
            <Route
              exact
              path={pathJoin(match.path, 'sign-up')}
              component={SignUp}
            />
            <Route path={pathJoin(match.path, '*')}>
              <SignIn signUpUrl={pathJoin(match.url, 'sign-up')} />
            </Route>
          </Switch>
        </main>

        <footer>Made with love</footer>
      </div>
    </div>
  );
}

Auth.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Auth;
