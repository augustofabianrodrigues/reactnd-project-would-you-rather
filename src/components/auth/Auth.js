import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { pathJoin } from '../../utils/helpers';
import AuthFooter from './AuthFooter';

function Auth(props) {
  const { location, match } = props;

  return (
    <div className="overflow-x-hidden overflow-y-auto h-full w-full flex flex-col lg:flex-row">
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

      <div className="flex flex-col flex-grow space-y-12 lg:flex-grow-0 lg:flex-shrink lg:min-w-max p-4 lg:p-8 bg-gray-50 dark:bg-gray-800">
        <main className="lg:w-96 mb-auto lg:m-auto">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              timeout={500}
              classNames={{
                enter: 'opacity-0',
                enterActive: 'opacity-100 transition-opacity duration-500',
                exitActive:
                  'opacity-0 transform translate-x-full transition duration-500',
              }}
            >
              <Switch location={location}>
                <Route
                  exact
                  path={pathJoin(match.path, 'sign-up')}
                  component={SignUp}
                />
                <Route exact path={pathJoin(match.path, 'sign-in')}>
                  <SignIn signUpUrl={pathJoin(match.url, 'sign-up')} />
                </Route>
                <Route>
                  <Redirect to={pathJoin(match.url, 'sign-in')} />
                </Route>
              </Switch>
            </CSSTransition>
          </SwitchTransition>
        </main>

        <AuthFooter />
      </div>
    </div>
  );
}

Auth.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default Auth;
