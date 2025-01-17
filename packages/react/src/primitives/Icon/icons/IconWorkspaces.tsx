/** This file is automatically generated. Do not edit. */
import classNames from 'classnames';
import React from 'react';

import { ComponentClassNames } from '../../shared/constants';

export const IconWorkspaces = (props) => {
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
        <g>
          <circle cx="5" cy="14" r="3" />
          <circle cx="10" cy="6" r="3" />
          <circle cx="15" cy="14" r="3" />
        </g>
      </g>
    </svg>
  );
};
