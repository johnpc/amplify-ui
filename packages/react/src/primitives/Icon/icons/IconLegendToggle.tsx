/** This file is automatically generated. Do not edit. */
import classNames from 'classnames';
import React from 'react';

import { ComponentClassNames } from '../../shared/constants';

export const IconLegendToggle = (props) => {
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
        <path d="M16,15H4v-1h12V15z M16,11H4v1h12V11z M4,9l4-2.78L12,9l4-2.78V5l-4,2.78L8,5L4,7.78L4,9z" />
      </g>
    </svg>
  );
};
