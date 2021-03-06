import React from 'react';
import PropTypes from 'prop-types';

const NewQuestionIcon = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={props.svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <title>New Question</title>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

NewQuestionIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default NewQuestionIcon;
