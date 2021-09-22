import './styles.css';

export * from './components';
export * from './hooks';
export * from './primitives';
export * from './theming';

export * as components from './components';
export * as primitives from './primitives';

export {
  defaultTheme as theme,
  translations,
  createTheme,
} from '@aws-amplify/ui';
