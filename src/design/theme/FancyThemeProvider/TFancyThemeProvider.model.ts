import { TTheme } from '@/types/TTheme';

export type TFancyThemeProvider = {
  children?: React.ReactNode;
  theme?: TTheme;
};

export type TThemeValue = string | TThemeObject;

export type TThemeObject = {
  [key: string]: TThemeValue;
};
