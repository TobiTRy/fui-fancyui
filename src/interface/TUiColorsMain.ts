import { TThemeTypes } from './TUiColors';

export type TUiColorsMain = Extract<TThemeTypes, 'primary' | 'secondary' | 'accent'>;
