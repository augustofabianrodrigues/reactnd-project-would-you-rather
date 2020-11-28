import React from 'react';
import LightThemeIcon from '../icons/LightThemeIcon';

function ThemeToggle() {
  return (
    <button className="text-xs flex flex-col gap-1 p-1 items-center">
      <LightThemeIcon svgClassName="h-6 w-6" />
    </button>
  );
}

export default ThemeToggle;
