import { DesignToken } from './types/designToken';

export interface Space {
  xxxs: DesignToken;
  xxs: DesignToken;
  xs: DesignToken;
  small: DesignToken;
  medium: DesignToken;
  large: DesignToken;
  xl: DesignToken;
  xxl: DesignToken;
  xxxl: DesignToken;
  relative: {
    xxxs: DesignToken;
    xxs: DesignToken;
    xs: DesignToken;
    small: DesignToken;
    medium: DesignToken;
    large: DesignToken;
    xl: DesignToken;
    xxl: DesignToken;
    xxxl: DesignToken;
  };
}

export const space: Space = {
  xxxs: { value: '0.25rem' },
  xxs: { value: '0.375rem' },
  xs: { value: '0.5rem' },
  small: { value: '0.75rem' },
  medium: { value: '1rem' },
  large: { value: '1.5rem' },
  xl: { value: '2.0rem' },
  xxl: { value: '3.0rem' },
  xxxl: { value: '4.5rem' },
  relative: {
    //creating a second set of sizes using em which will be sized relative to a parent instead of the root
    xxxs: { value: '0.25em' },
    xxs: { value: '0.375rem' },
    xs: { value: '0.5em' },
    small: { value: '0.75em' },
    medium: { value: '1em' },
    large: { value: '1.5em' },
    xl: { value: '2.0em' },
    xxl: { value: '3.0em' },
    xxxl: { value: '4.5em' },
  },
};
