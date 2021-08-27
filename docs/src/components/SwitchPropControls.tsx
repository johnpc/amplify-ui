import React from 'react';
import { SwitchFieldProps } from '@aws-amplify/ui-react';
import { FieldLabeler } from './FieldLabeler';
import { DemoBox } from './DemoBox';

export interface SwitchPropControlsProps extends SwitchFieldProps {
  setThumbColor: (
    value: React.SetStateAction<SwitchFieldProps['thumbColor']>
  ) => void;
  setTrackColor: (
    value: React.SetStateAction<SwitchFieldProps['trackColor']>
  ) => void;
  setTrackCheckedColor: (
    value: React.SetStateAction<SwitchFieldProps['trackCheckedColor']>
  ) => void;
  setIsDisabled: (
    value: React.SetStateAction<SwitchFieldProps['isDisabled']>
  ) => void;
  setSize: (value: React.SetStateAction<SwitchFieldProps['size']>) => void;
  setLabel: (value: React.SetStateAction<SwitchFieldProps['label']>) => void;
  setIsLabelHidden: (
    value: React.SetStateAction<SwitchFieldProps['isLabelHidden']>
  ) => void;
}

interface SwitchPropControlsInterface {
  (props: SwitchPropControlsProps): JSX.Element;
}

export const SwitchPropControls: SwitchPropControlsInterface = ({
  thumbColor,
  setThumbColor,
  trackColor,
  setTrackColor,
  trackCheckedColor,
  setTrackCheckedColor,
  isDisabled,
  setIsDisabled,
  size,
  setSize,
  label,
  setLabel,
  isLabelHidden,
  setIsLabelHidden,
}) => {
  return (
    <DemoBox primitiveName="SwichField">
      <FieldLabeler id="thumbColor">
        <input
          type="text"
          placeholder="Set thumb color"
          id="thumbColor"
          name="thumbColor"
          value={thumbColor}
          onChange={(event: any) => {
            setThumbColor(event.target.value);
          }}
        />
      </FieldLabeler>
      <FieldLabeler id="trackColor">
        <input
          type="text"
          placeholder="Set track color"
          id="trackColor"
          name="trackColor"
          value={trackColor}
          onChange={(event: any) => {
            setTrackColor(event.target.value);
          }}
        />
      </FieldLabeler>
      <FieldLabeler id="trackCheckedColor">
        <input
          type="text"
          placeholder="Set checked track color"
          id="trackCheckedColor"
          name="trackCheckedColor"
          value={trackCheckedColor}
          onChange={(event: any) => {
            setTrackCheckedColor(event.target.value);
          }}
        />
      </FieldLabeler>
      <FieldLabeler id="isDisabled">
        <input
          type="checkbox"
          name="isDisabled"
          id="isDisabled"
          onChange={(event) => {
            setIsDisabled(
              Boolean(event.target.checked) as SwitchFieldProps['isDisabled']
            );
          }}
        />
      </FieldLabeler>
      <FieldLabeler id="size">
        <select
          name="size"
          id="size"
          value={size}
          onChange={(event) =>
            setSize(event.target.value as SwitchFieldProps['size'])
          }
        >
          <option value="">default</option>
          <option value="small">small</option>
          <option value="large">large</option>
        </select>
      </FieldLabeler>
      <FieldLabeler id="label">
        <input
          type="text"
          placeholder="Set switchfield label"
          id="label"
          name="label"
          value={label}
          onChange={(event: any) => {
            setLabel(event.target.value);
          }}
        />
      </FieldLabeler>
      <FieldLabeler id="isLabelHidden">
        <input
          type="checkbox"
          name="isLabelHidden"
          id="isLabelHidden"
          onChange={(event) => {
            setIsLabelHidden(
              Boolean(event.target.checked) as SwitchFieldProps['isLabelHidden']
            );
          }}
        />
      </FieldLabeler>
    </DemoBox>
  );
};