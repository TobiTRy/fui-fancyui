import React from 'react';

import { TTheme } from '@/types/TTheme';
import { ThemeProvider } from 'styled-components';
import { themeStore } from '@/design/theme/themeStore';

type TFancyThemeProviderProps = {
  children: React.ReactNode;
  theme: TTheme;
};

export default function FancyThemeProvider(props: TFancyThemeProviderProps) {
  const { children, theme } = props;
  const setTheme = themeStore((state) => state.setTheme);
  console.log(setTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
