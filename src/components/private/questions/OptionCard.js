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

  return (
    <div className="flex flex-col gap-1 text-center">
      <div className="w-full h-6 overflow-hidden rounded-3xl flex flex-row bg-gray-400 dark:bg-gray-800">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className={classNames('h-full', {
              'bg-green-500': percentage > 50,
              'bg-blue-500': percentage === 50,
              'bg-red-500': percentage < 50,
            })}
            style={{ width: `${percentage}%` }}
          />
          <span
            className="absolute top-0 h-full leading-none flex flex-col items-center justify-center text-gray-50"
            style={getPercentageLabelStyles(percentage)}
          >
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>

      <div className="inline-flex flex-row gap-2 w-auto mx-auto">
        <span className="inline font-medium">{count}</span>
        out of
        <span className="inline font-medium">{total}</span>
        votes
      </div>
    </div>
  );
}

function OptionCard({ option, answer, results, onSelect }) {
  const canSelect = !results;

  return (
    <div className={classNames('relative w-full', { 'mt-8': answer })}>
      {answer && (
        <div className="absolute z-0 -top-8 left-2 uppercase rounded-md px-4 py-2 bg-indigo-800 dark:bg-purple-800 text-gray-50">
          Your Vote
        </div>
      )}

      <div
        tabIndex={canSelect ? 0 : undefined}
        onClick={canSelect ? onSelect : undefined}
        className={classNames(
          'w-full z-10 p-4 flex flex-col overflow-hidden rounded shadow bg-white dark:bg-gray-700 transition transform',
          {
            'hover:scale-105 cursor-pointer hover:bg-indigo-800 dark:hover:bg-purple-800 hover:text-gray-50 dark:hover:text-gray-50': canSelect,
            'ring-2 ring-indigo-800 dark:ring-purple-800 shadow-lg': answer,
          }
        )}
      >
        <div className="w-full py-12 text-2xl text-center">{option.text}</div>

        {results && renderResults(results)}
      </div>
    </div>
  );
}

OptionCard.propTypes = {
  option: PropTypes.object.isRequired,
  answer: PropTypes.bool.isRequired,
  results: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default OptionCard;
