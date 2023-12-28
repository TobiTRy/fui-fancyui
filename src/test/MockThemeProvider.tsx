import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from './mockTheme';

export default function MockThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
}
