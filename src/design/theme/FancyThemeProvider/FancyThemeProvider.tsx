import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';

import { TFancyThemeProvider } from './TFancyThemeProvider.model';
import { generateObjectToCssVariables } from '@/design/theme/generateObjectToCssVariables';
import { applyThemeToDomStyleSheet } from '@/design/theme/applyThemeToDomStyleSheet';

// --------------------------------------------------------------------------- //
// ---- The FancyThemeProvider handles the themeState and provided theme ----- //
// --------------------------------------------------------------------------- //
export default function FancyThemeProvider(props: TFancyThemeProvider) {
  const { children, theme, applyCssVars = true } = props;
  const [isInitialized, setIsInitialized] = useState(false);

  const themeState = themeStore((state) => state.theme);
  const isDarkMode = themeStore((state) => state.isDarkTheme);
  const setTheme = themeStore((state) => state.setTheme);

  useEffect(() => {
    if (theme) setTheme(theme);
    setIsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if the theme is not initialized we don't need to apply the css vars
    if (!applyCssVars && !isInitialized) return;
    const cssVars = generateObjectToCssVariables(themeState);
    applyThemeToDomStyleSheet(cssVars);
  }, [theme, themeState, applyCssVars, isInitialized]);

  // if the theme changes we update the css variables
  useEffect(() => {
    if (!applyCssVars) return;
    const getStyle = document.getElementById('fui-theme');
    if (!getStyle) return;
    getStyle.innerHTML = `:root {
      ${generateObjectToCssVariables(themeState)}
    }`;
  }, [themeState, isDarkMode, applyCssVars]);

  // theme gets provided to all components
  //the theme gets saved in the theme store and can be accessed from there but first on the first render
  // this operation needs a dom rerender to work properly so we use the useEffect hook
  // to set the theme in the theme store and then set the isInitialized state to true
  // if the theme is at the moment not initialized we use it directly from the props and not from the theme store
  // we use the themestore when the theme is initialized to make sure that the theme is always up to date

  //if no theme is provided we use the default theme
  return <ThemeProvider theme={isInitialized ? themeState : theme ?? themeState}>{children}</ThemeProvider>;
}
