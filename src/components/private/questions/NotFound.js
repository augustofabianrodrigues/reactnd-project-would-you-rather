import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

function NotFound() {
  return (
    <div className="h-full w-full p-4">
      <div className="h-auto w-full max-w-7xl m-auto flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl lg:text-4xl">
            The poll you are looking for isn't here.
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl">
            Maybe something took it away...
          </h3>
        </div>

        <img
          alt="Not found. Strange creatures took it."
          src={require('../../../illustrations/notfound.svg').default}
          className="bg-no-repeat bg-contain bg-fixed p-4 w-auto max-w-xl h-52 sm:h-96"
        />

        <Link
          to="/"
          className="relative w-full max-w-xl py-2 px-4 border border-indigo-300 dark:border-indigo-800 rounded text-white font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
        >
          <ArrowLeftIcon
            className="absolute left-2 top-2"
            svgClassName="h-6 w-6 text-white"
          />
          Take Me Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
