import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function RouteSwitchTransition({ transitionKey, children }) {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={transitionKey}
        timeout={500}
        classNames={{
          enter:
            'opacity-0 transform lg:transform-none motion-safe:-translate-x-full',
          enterActive: 'opacity-100 transform-none transition duration-500',
          exitActive:
            'opacity-0 transform lg:transform-none motion-safe:translate-x-full transition duration-500',
        }}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}

RouteSwitchTransition.propTypes = {
  transitionKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RouteSwitchTransition;
