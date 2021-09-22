import merge from 'deepmerge';
import { AmplifyTheme } from '@aws-amplify/ui';
import { defaultTheme } from './defaultTheming';
import { DeepPartial } from './types';
import { getCSSVariablesFromTokens, extendTokens } from './utils';

export const extendTheming = (
  ...allOverrideTokens: DeepPartial<AmplifyTheme>[]
) => {
  const cloneTokens = { ...defaultTheme };
  const overrideTokens = merge.all(
    allOverrideTokens
  ) as DeepPartial<AmplifyTheme>;
  const newTokens = extendTokens(cloneTokens, overrideTokens) as AmplifyTheme;
  // TODO: Need too scope the usage of this function because it is not used by React Native
  const CSSVariables = getCSSVariablesFromTokens(newTokens);
  const theme = merge(defaultTheme, overrideTokens) as AmplifyTheme;
  return { theme, CSSVariables };
};
