import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import themeStore from '../src/Components/UI/Design/color/themeStore';


const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: themeStore.getState().theme.secondary[0] },
        { name: 'dark', value: themeStore.getState().theme.primary[0] },
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
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme: themeStore.getState().theme,
      switchTheme: switchTheme,
    },
    GlobalStyles, // Adds your GlobalStyle component to all stories
    Provider: ThemeProvider,
  }),
];
