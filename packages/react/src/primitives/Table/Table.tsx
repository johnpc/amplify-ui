import classNames from 'classnames';
import * as React from 'react';

import { Flex, Text, View } from '..';
import { ComponentClassNames } from '../shared/constants';
import { TableProps } from '../types/table';

export const Table: React.FC<TableProps> = ({
  caption,
  children,
  className,
  summary,
  ...rest
}) => (
  <Flex>
    <View
      as="table"
      className={classNames(ComponentClassNames.Table, className)}
      {...rest}
    >
      {caption || summary ? (
        <View as="caption">
          {caption}
          {caption && summary ? <br /> : null}
          {summary && (
            <Text as="span" className={ComponentClassNames.TableSummary}>
              {summary}
            </Text>
          )}
        </View>
      ) : null}
      {children}
    </View>
  </Flex>
);
