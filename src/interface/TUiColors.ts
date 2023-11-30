import { TUiColorsType } from './TUiColorsType';

export type TThemeTypes = keyof TUiColorsType;
export type TThemeTypesNotTrasparent = Exclude<TThemeTypes, 'transparent'>;
export type TUiColorsMain = Extract<TThemeTypes, 'primary' | 'secondary' | 'accent'>;
export type TUiColorsSystemMessage = Extract<TThemeTypes, 'success' | 'error' | 'info' | 'warning'>;
