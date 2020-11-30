import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function getPercentageLabelStyles(percentage) {
  const labelRightOffset = Math.abs(percentage - 100);
  const minOffset = percentage < 10 ? '2.25rem' : '2.75rem';

  return {
    right: `min(max(calc(${labelRightOffset}% + 0.25rem), 0.75rem), calc(100% - ${minOffset}))`,
  };
}

function renderResults({ count, total }) {
  const percentage = (count / total) * 100;
  const percentageLeft = 100 - percentage;

  return (
    <div className="flex flex-col gap-1 text-center">
      <div className="relative w-full h-6 overflow-hidden rounded-3xl flex flex-row">
        <div
          className={classNames({
            'bg-green-500': percentage > 50,
            'bg-blue-500': percentage === 50,
            'bg-red-500': percentage < 50,
          })}
          style={{ width: `${percentage}%` }}
        />
        <div
          className="bg-gray-400 dark:bg-gray-800"
          style={{ width: `${percentageLeft}%` }}
        />
        <span
          className="absolute h-full leading-none flex flex-col items-center justify-center text-gray-50"
          style={getPercentageLabelStyles(percentage)}
        >
          {percentage.toFixed(0)}%
        </span>
      </div>

      <div className="inline-flex flex-row gap-2 w-auto mx-auto">
        <span className="inline font-medium">{count}</span>
        out of
        <span className="inline font-medium">{total}</span>
      </div>
    </div>
  );
}

function OptionCard({ option, answer, results }) {
  const canSelect = !results;

  return (
    <div
      className={classNames(
        'w-full p-4 flex flex-col rounded overflow-hidden shadow bg-white dark:bg-gray-700 transition transform',
        {
          'hover:scale-105 cursor-pointer hover:bg-indigo-800 dark:hover:bg-purple-800 hover:text-gray-50 dark:hover:text-gray-50': canSelect,
        }
      )}
    >
      <div className="w-full py-12 text-2xl text-center">{option.text}</div>
      {results && renderResults(results)}
    </div>
  );
}

OptionCard.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionCard;
