import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function renderLabel({ htmlFor, text }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-medium text-gray-700 dark:text-gray-100"
    >
      {text}
    </label>
  );
}

function TextInput({
  id,
  label,
  maxLength,
  placeholder,
  errorMessage,
  value,
  onChange,
}) {
  const hasError = typeof errorMessage === 'string';

  return (
    <div className="flex flex-col gap-1">
      {label && renderLabel({ htmlFor: id, text: label })}

      <input
        type="text"
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          'placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm rounded-md',
          {
            'ring-1 ring-red-600 dark:ring-red-500': hasError,
          }
        )}
      />

      <div
        className={classNames(
          'text-xs sm:text-sm block text-red-600 dark:text-red-400 opacity-0 h-auto max-h-0 transition-all',
          {
            'max-h-96 opacity-100 ease-out': hasError,
          }
        )}
      >
        {errorMessage}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    .isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
