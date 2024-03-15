import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { DocsContainer } from './DocsContainer';
import themeStore from '../src/design/theme/themeStore/themeStore';
import DefaultStyle from '../src/design/theme/globalStyle/DefaultStyle/DefaultStyle';
import { ThemeProvider } from 'styled-components';
import storyBookThemeLight from './storyBookThemeLight';
import storyBookThemeDark from './storyBookThemeDark';

// Rest of the preview config remains the same

// Storybook preview settings
const preview: Preview = {
  parameters: {
    docs: {
      container: DocsContainer,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'intro',
          'contributioners',
          'setup',
          'components',
          ['templates', 'organisms', 'molecules', 'atoms', '*'],
          'design',
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: storyBookThemeDark,
      light: storyBookThemeLight,
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
    GlobalStyles: DefaultStyle, // Adds your GlobalStyle component to all stories
    Provider: ThemeProvider,
  }),
];
