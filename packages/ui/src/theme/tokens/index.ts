import { PartialDeep } from 'type-fest';

import { borderWidths, BorderWidths } from './borderWidths';
import { breakpoints, Breakpoints } from './breakpoints';
import { colors, Colors } from './colors';
import { fonts, Fonts } from './fonts';
import { fontSizes, FontSizes } from './fontSizes';
import { fontWeights, FontWeights } from './fontWeights';
import { lineHeights, LineHeights } from './lineHeights';
import { opacities, Opacities } from './opacities';
import { outlineOffsets, OutlineOffsets } from './outlineOffsets';
import { outlineWidths, OutlineWidths } from './outlineWidths';
import { radii, Radii } from './radii';
import { shadows, Shadows } from './shadows';
import { space, Space } from './space';
import { time, Time } from './time';
import { transforms, Transforms } from './transforms';

export interface AmplifyTheme {
  components: any; // TODO type this
  borderWidths: BorderWidths;
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  opacities: Opacities;
  outlineOffsets: OutlineOffsets;
  outlineWidths: OutlineWidths;
  radii: Radii;
  shadows: Shadows;
  space: Space;
  time: Time;
  transforms: Transforms;
  // this is to make the style dictionary type work
  [key: string]: any;
}

export type AmplifyThemeOverrides = PartialDeep<AmplifyTheme>;

export const theme: AmplifyTheme = {
  // TODO: convert component theme files to typescript
  components: require('./components'),
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  opacities,
  outlineOffsets,
  outlineWidths,
  radii,
  shadows,
  space,
  time,
  transforms,
};