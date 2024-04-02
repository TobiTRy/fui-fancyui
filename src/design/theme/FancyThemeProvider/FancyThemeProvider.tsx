import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';

import { TFancyThemeProvider, TThemeObject } from './TFancyThemeProvider.model';

const applyTheme = (theme: string) => {
  //const cssVars = Object.entries(theme).map(([key, value]) => `--${key}: ${value};`).join('\n');
  const css = `:root { ${theme} }`;

  const styleSheet = document.createElement('style');
  styleSheet.innerText = css;
  document.head.appendChild(styleSheet);
};

// --------------------------------------------------------------------------- //
// ---- The FancyThemeProvider handles the themeState and provided theme ----- //
// --------------------------------------------------------------------------- //
export default function FancyThemeProvider(props: TFancyThemeProvider) {
  const { children, theme } = props;
  const [isInitialized, setIsInitialized] = useState(false);

  const themeState = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);

  useEffect(() => {
    if (theme) setTheme(theme);
    setIsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Updated generateCssVariables function to correctly type the theme parameter
    const generateCssVariables = (theme: TThemeObject, prefix = ''): string => {
      let cssVars = '';
      Object.entries(theme).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          // Recursive case: value is an object
          cssVars += generateCssVariables(value, `${prefix}${key}-`);
        } else if (typeof value === 'string') {
          // Base case: value is a string
          cssVars += `--${prefix}${key}: ${value};`;
        }
      });
      return cssVars;
    };

    const cssVars = generateCssVariables(themeState);
    applyTheme(cssVars);
  }, [theme, themeState]);

  // theme gets provided to all components
  //the theme gets saved in the theme store and can be accessed from there but first on the first render
  // this operation needs a dom rerender to work properly so we use the useEffect hook
  // to set the theme in the theme store and then set the isInitialized state to true
  // if the theme is at the moment not initialized we use it directly from the props and not from the theme store
  // we use the themestore when the theme is initialized to make sure that the theme is always up to date

  //if no theme is provided we use the default theme
  return <ThemeProvider theme={isInitialized ? themeState : theme ?? themeState}>{children}</ThemeProvider>;
}
