import { TUiColorsType } from './TUiColorsType';

export type TUiColors = keyof TUiColorsType;
export type TUiColorsMain = Extract<TUiColors, 'primary' | 'secondary' | 'accent'>;
