import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth(props) {
  const { match } = props;

  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <header className="flex-shrink lg:flex-shrink-0 lg:flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <div>
          <h2 className="lg:text-xl xl:text-4xl">Welcome to</h2>
          <h1 className="text-2xl lg:text-4xl xl:text-6xl font-medium">
            Would You Rather App
          </h1>
        </div>
        <img
          alt="Would You Rather Hero"
          src={require('../../illustrations/hero.svg').default}
          className="bg-no-repeat bg-contain bg-fixed p-4 w-full max-w-7xl"
        />
      </header>

      <div className="flex-grow lg:flex-grow-0 lg:flex-shrink min-w-max p-4 bg-gray-50 dark:bg-gray-800">
        <main>
          <Switch>
            <Route exact path={`${match.path}/sign-up`} component={SignUp} />
            <Route path={`${match.path}/*`} component={SignIn} />
          </Switch>
        </main>

        <footer></footer>
      </div>
    </div>
  );
}

Auth.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Auth;
