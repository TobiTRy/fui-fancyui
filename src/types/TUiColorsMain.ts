import { TThemeTypes } from './TThemeTypes';

export type TUiColorsMain = Extract<TThemeTypes, 'primary' | 'secondary' | 'accent'>;
