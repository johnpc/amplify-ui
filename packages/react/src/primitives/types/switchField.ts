import { AriaProps, BaseComponentProps, Sizes } from './base';
import { BaseStyleProps } from './style';
import { InputProps } from './input';
import { FieldProps } from './field';
import { Property } from 'csstype';

export interface SwitchFieldProps
  extends InputProps,
    FieldProps,
    BaseStyleProps {
  /**
   * If value is provided, this will be a controlled SwitchField
   */
  value?: boolean;
  /**
   * Use this to provide a default value for an uncontrolled SwitchField
   */
  defaultValue?: boolean;

  /**
   * This property will change the color of the thumb in the switch component
   */
  thumbColor?: Property.Color;

  /**
   * This property will change the color of the track in the switch component
   */
  trackColor?: Property.Color;

  /**
   * This property will change the color of the checked track in the switch component
   */
  trackCheckedColor?: Property.Color;

  /**
   * This property will set the switch to disabled
   */
  isDisabled?: boolean;

  /**
   * This prop adds a name attribute to the input element
   */
  name?: string;

  /**
   * This prop adjusts the size of the switch component
   */
  size?: Sizes;

  /**
   * Label text for field (required)
   */
  label: React.ReactNode;

  /**
   * Hide label and use `aria-label` attribute instead. Common use case
   * is a search field.
   * @default false
   */
  isLabelHidden?: boolean;
}