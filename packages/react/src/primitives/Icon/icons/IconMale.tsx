/** This file is automatically generated. Do not edit. */
import classNames from 'classnames';
import React from 'react';

import { ComponentClassNames } from '../../shared/constants';

export const IconMale = (props) => {
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
      <rect fill="none" height="20" width="20" />
      <path d="M16,4h-4.5v1.5h1.94l-2.76,2.76C9.99,7.78,9.15,7.5,8.25,7.5C5.9,7.5,4,9.4,4,11.75C4,14.1,5.9,16,8.25,16 s4.25-1.9,4.25-4.25c0-0.9-0.28-1.74-0.76-2.43l2.76-2.76V8.5H16V4z M8.25,14.5c-1.52,0-2.75-1.23-2.75-2.75S6.73,9,8.25,9 S11,10.23,11,11.75S9.77,14.5,8.25,14.5z" />
    </svg>
  );
};
