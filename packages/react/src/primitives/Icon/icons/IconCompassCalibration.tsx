/** This file is automatically generated. Do not edit. */
import classNames from 'classnames';
import React from 'react';

import { ComponentClassNames } from '../../shared/constants';

export const IconCompassCalibration = (props) => {
  const { className, size, fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(ComponentClassNames.Icon, className)}
      viewBox="0 0 24 24"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
    >
      <circle cx="12" cy="17" r="4" />
      <path d="M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08z" />
    </svg>
  );
};
