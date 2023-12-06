import { TThemeTypes } from './TThemeTypes';

export type TUiColorsSystemMessage = Extract<TThemeTypes, 'success' | 'error' | 'info' | 'warning'>;
