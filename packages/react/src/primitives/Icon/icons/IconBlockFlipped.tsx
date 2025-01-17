/** This file is automatically generated. Do not edit. */
import classNames from 'classnames';
import React from 'react';

import { ComponentClassNames } from '../../shared/constants';

export const IconBlockFlipped = (props) => {
  const { className, size, fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      className={classNames(ComponentClassNames.Icon, className)}
      viewBox="0 0 20 20"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <path d="M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7s7-3.13,7-7C17,6.13,13.87,3,10,3z M4,10c0-1.48,0.54-2.83,1.42-3.87l8.45,8.45 C12.83,15.46,11.48,16,10,16C6.69,16,4,13.31,4,10z M14.58,13.87L6.13,5.42C7.17,4.54,8.52,4,10,4c3.31,0,6,2.69,6,6 C16,11.48,15.46,12.83,14.58,13.87z" />
      </g>
    </svg>
  );
};
