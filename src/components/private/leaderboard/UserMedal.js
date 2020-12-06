import React from 'react';
import PropTypes from 'prop-types';

const GOLD_TYPE = 'gold';
const SILVER_TYPE = 'silver';
const BRONZE_TYPE = 'bronze';

const medalText = {
  [GOLD_TYPE]: '#1',
  [SILVER_TYPE]: '#2',
  [BRONZE_TYPE]: '#3',
};

function UserMedal({ type }) {
  const paintId = `paint_user-medal_${type}`;

  return (
    <svg
      width="36"
      height="55"
      viewBox="0 0 36 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.525 32.225L5.5 55L18 47.5L30.5 55L27.475 32.2"
        fill="#3182CE"
      />
      <path
        d="M18 35C27.665 35 35.5 27.165 35.5 17.5C35.5 7.83502 27.665 0 18 0C8.33502 0 0.5 7.83502 0.5 17.5C0.5 27.165 8.33502 35 18 35Z"
        fill={`url(#${paintId})`}
      />
      <text x="25%" y="24" fill="#111827">
        {medalText[type]}
      </text>
      <defs>
        <linearGradient
          id="paint_user-medal_gold"
          x1="0.999999"
          y1="-0.499999"
          x2="36"
          y2="34.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECC94B" />
          <stop offset="1" stopColor="#F6E05E" />
        </linearGradient>

        <linearGradient
          id="paint_user-medal_silver"
          x1="0.999999"
          y1="-0.499999"
          x2="36"
          y2="34.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C4C4" />
          <stop offset="1" stopColor="#EDF2F7" />
        </linearGradient>

        <linearGradient
          id="paint_user-medal_bronze"
          x1="0.999999"
          y1="-0.499999"
          x2="36"
          y2="34.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D97706" />
          <stop offset="1" stopColor="#F87171" />
        </linearGradient>
      </defs>
    </svg>
  );
}

UserMedal.propTypes = {
  type: PropTypes.oneOf([GOLD_TYPE, SILVER_TYPE, BRONZE_TYPE]).isRequired,
};

export default UserMedal;
