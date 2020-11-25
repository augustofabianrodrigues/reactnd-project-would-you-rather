import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import HeartIcon from '../icons/HeartIcon';
import { author, repository } from '../../../package.json';

function AuthFooter() {
  return (
    <footer className="flex flex-row flex-wrap gap-2 justify-between items-center">
      <span className="flex flex-row gap-x-2 items-center text-xs sm:text-sm">
        Made with <HeartIcon svgClassName="h-4 sm:h-6 h-4 sm:w-6" /> by {author}
      </span>
      <a href={repository.url} target="_blank" rel="noreferrer">
        <GithubIcon svgClassName="h-6 w-6" />
      </a>
    </footer>
  );
}

export default AuthFooter;
