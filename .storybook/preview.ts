import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import themeStore from '../src/Components/UI/Design/color/themeStore';
import GlobalStyle from '../src/GlobalStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: themeStore.getState().theme.colors.secondary[0] },
        { name: 'dark', value: themeStore.getState().theme.colors.primary[0] },
      ],
    },
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
      theme: themeStore.getState().theme,
      switchTheme: switchTheme,
    },
    GlobalStyles: GlobalStyle, // Adds your GlobalStyle component to all stories
    Provider: ThemeProvider,
  }),
];
