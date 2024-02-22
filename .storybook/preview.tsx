import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { DocsContainer } from './DocsContainer';
import themeStore from '../src/design/theme/themeStore/themeStore';
import GlobalStyle from '../src/GlobalStyle';
import { ThemeProvider } from 'styled-components';
// Rest of the preview config remains the same

// Storybook preview settings
const preview: Preview = {
  parameters: {
    docs: {
      container: DocsContainer,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

const switchTheme = () => {
  themeStore.getState().switchTheme();
  return themeStore.getState().theme;
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      FancyUi: themeStore.getState().theme,
      switchTheme: switchTheme,
    },
    GlobalStyles: GlobalStyle, // Adds your GlobalStyle component to all stories
    Provider: ThemeProvider,
  }),
];
