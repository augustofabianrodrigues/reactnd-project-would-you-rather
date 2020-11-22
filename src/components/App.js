import React, { Component } from 'react';

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
      <div className="h-screen-nav-fix w-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <header className="prose">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
