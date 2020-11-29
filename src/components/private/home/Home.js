import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { pathJoin } from '../../../utils/helpers';
import HomeTabLink from './HomeTabLink';
import UnansweredIcon from '../../icons/UnansweredIcon';
import AnsweredIcon from '../../icons/AnsweredIcon';
import UnansweredQuestions from './UnansweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
import RouteSwitchTransition from '../../shared/RouteSwitchTransition';

function Home(props) {
  const { match, location } = props;

  return (
    <div className="h-full w-full">
      <div className="w-full h-16 bg-white dark:bg-gray-800 shadow dark:shadow-none">
        <nav className="h-full w-full mx-auto max-w-7xl flex flex-row">
          <HomeTabLink to={pathJoin(match.url, 'unanswered')}>
            <UnansweredIcon svgClassName="w-6 h-6" />
            <span className="whitespace-nowrap">
              Unanswered <span className="hidden sm:inline">Questions</span>
            </span>
          </HomeTabLink>

          <HomeTabLink to={pathJoin(match.url, 'answered')}>
            <AnsweredIcon svgClassName="w-6 h-6" />
            <span className="whitespace-nowrap">
              Answered <span className="hidden sm:inline">Questions</span>
            </span>
          </HomeTabLink>
        </nav>
      </div>

      <RouteSwitchTransition transitionKey={location.pathname}>
        <Switch location={location}>
          <Route exact path={pathJoin(match.path, 'unanswered')}>
            <UnansweredQuestions />
          </Route>

          <Route exact path={pathJoin(match.path, 'answered')}>
            <AnsweredQuestions />
          </Route>

          <Route>
            <Redirect to={pathJoin(match.url, 'unanswered')} />
          </Route>
        </Switch>
      </RouteSwitchTransition>
    </div>
  );
}

Home.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Home);
