import { TThemeTypes } from './TUiColors';

export type TUiColorsSystemMessage = Extract<TThemeTypes, 'success' | 'error' | 'info' | 'warning'>;
