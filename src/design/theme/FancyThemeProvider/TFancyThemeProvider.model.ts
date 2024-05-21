import { TTheme } from '@/types/TTheme';

export type TFancyThemeProvider = {
  children?: React.ReactNode;
  theme?: TTheme;
  applyCssVars?: boolean;
};
