import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={props.svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
      >
        <title>Back</title>
        <path
          d="M19 12.2843H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19.2843L5 12.2843L12 5.2843"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

ArrowLeft.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default ArrowLeft;
