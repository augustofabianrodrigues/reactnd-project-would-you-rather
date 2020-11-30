import React from 'react';
import PropTypes from 'prop-types';

const QuestionIcon = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={props.svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 64"
        fill="none"
      >
        <title>Question</title>
        <path
          d="M32.4997 58.6666C47.2273 58.6666 59.1663 46.7276 59.1663 32C59.1663 17.2724 47.2273 5.33331 32.4997 5.33331C17.7721 5.33331 5.83301 17.2724 5.83301 32C5.83301 46.7276 17.7721 58.6666 32.4997 58.6666Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.7402 24C25.3672 22.2178 26.6046 20.7149 28.2334 19.7577C29.8623 18.8004 31.7773 18.4505 33.6394 18.7699C35.5015 19.0893 37.1904 20.0574 38.4071 21.5027C39.6238 22.9481 40.2897 24.7774 40.2869 26.6667C40.2869 32 32.2869 34.6667 32.2869 34.6667"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5 45.3333H32.5267"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

QuestionIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default QuestionIcon;
