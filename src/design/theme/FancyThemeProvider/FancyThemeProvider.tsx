import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { breakpoints } from '@/design/theme/brakePoints';
import { IUiColorPops } from '@/design/theme/generateThemeColor/generateThemeColor';
import { themeStore } from '@/design/theme/themeStore';
import { TBorderRadiusSizes, TFontSizes, TSpacings } from '@/types';
import { TUiColorsTypeObject } from '@/types/TUiColorsTypeObject';

import { TTheme } from '@/types/TTheme';

//the structure for the theme object
export type TThemeInput = {
  colors: TUiColorsTypeObject | IUiColorPops;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: TFontSizes;
  breakpoints: {
    [key in keyof typeof breakpoints]: string;
  };
};

type TFancyThemeProviderProps = {
  children: React.ReactNode;
  theme: TTheme;
};

export default function FancyThemeProvider(props: TFancyThemeProviderProps) {
  const { children, theme } = props;
  const [isInitialized, setIsInitialized] = useState(false);

  const themeState = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(theme);
    setIsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // theme gets provided to all components
  return <ThemeProvider theme={isInitialized ? themeState : theme}>{children}</ThemeProvider>;
}
