import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import AppTitle from './shared/AppTitle';
import Theme from './Theme';

function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

class App extends Component {
  componentDidMount() {
    setNavigationBarHeightCSSVariable();
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
  }

  render() {
    return (
      <Router>
        <div className="h-screen-nav-fix w-screen font-montserrat overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
          <Theme />
          <AppTitle />
          <LoadingBar className="absolute h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
