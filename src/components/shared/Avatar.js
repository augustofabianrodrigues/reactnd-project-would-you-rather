import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const classNamesBySizes = {
  smallest: 'h-6 w-6',
  small: 'h-8 w-8',
  medium: 'h-12 w-12',
  large: 'h-14 w-14',
  responsive: 'sm:h-16 xl:h-18 sm:w-16 xl:w-18',
};

function Avatar(props) {
  const { avatarURL, description, size = 'responsive', className } = props;

  return (
    <span
      className={classNames(
        'flex flex-shrink-0 rounded-full overflow-hidden',
        classNamesBySizes[size],
        className
      )}
    >
      <img alt={description} src={avatarURL} />
    </span>
  );
}

Avatar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  size: PropTypes.oneOf(['smallest', 'small', 'medium', 'large', 'responsive']),
  className: PropTypes.string,
};

export default Avatar;
