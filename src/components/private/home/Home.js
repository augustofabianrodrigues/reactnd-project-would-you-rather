import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { pathJoin } from '../../../utils/helpers';
import HomeTabLink from './HomeTabLink';
import UnansweredIcon from '../../icons/UnansweredIcon';
import AnsweredIcon from '../../icons/AnsweredIcon';
import UnansweredQuestions from './UnansweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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

      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames={{
              enter:
                'opacity-0 transform lg:transform-none motion-safe:-translate-x-full',
              enterActive: 'opacity-100 transform-none transition duration-500',
              exitActive:
                'opacity-0 transform lg:transform-none motion-safe:translate-x-full transition duration-500',
            }}
          >
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
          </CSSTransition>
        </SwitchTransition>
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
