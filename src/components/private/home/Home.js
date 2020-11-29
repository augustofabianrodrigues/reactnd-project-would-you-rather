import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { pathJoin } from '../../../utils/helpers';
import HomeTabLink from './HomeTabLink';

function Home(props) {
  const { match } = props;

  return (
    <div className="h-full w-full">
      <div className="w-full h-16 bg-white dark:bg-gray-800 shadow dark:shadow-none">
        <nav className="h-full w-full mx-auto max-w-7xl flex flex-row">
          <HomeTabLink to={pathJoin(match.url, 'unanswered')}>
            Unanswered Questions
          </HomeTabLink>

          <HomeTabLink to={pathJoin(match.url, 'answered')}>
            Answered Questions
          </HomeTabLink>
        </nav>
      </div>

      <div>
        <Switch>
          <Route exact path={pathJoin(match.path, 'unanswered')}>
            Unanswered
          </Route>

          <Route exact path={pathJoin(match.path, 'answered')}>
            Answered
          </Route>

          <Route>
            <Redirect to={pathJoin(match.url, 'unanswered')} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

Home.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Home);
