import React from 'react';

import { TableProps, TextField } from '@aws-amplify/ui-react';
import { DemoBox } from './DemoBox';

export interface TablePropControlsProps extends TableProps {
  setCaption: (value: React.SetStateAction<TableProps['caption']>) => void;
  setSummary: (value: React.SetStateAction<TableProps['summary']>) => void;
}

interface TablePropControlsInterface {
  (props: TablePropControlsProps): JSX.Element;
}

export const TablePropControls: TablePropControlsInterface = ({
  setCaption,
  setSummary,
}) => (
  <DemoBox primitiveName="Table">
    <TextField
      id="caption-control"
      label="caption"
      name="caption-control"
      placeholder="Table Caption"
      onChange={(event) =>
        setCaption(event.target.value as TableProps['caption'])
      }
    />
    <TextField
      id="summary-control"
      label="summary"
      name="summary-control"
      placeholder="Table Summary"
      onChange={(event) =>
        setSummary(event.target.value as TableProps['summary'])
      }
    />
  </DemoBox>
);