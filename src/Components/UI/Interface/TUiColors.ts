import { TUiColorsType } from "../Design/color/designColor";


export type TUiColors = keyof TUiColorsType;
export type TUiColorsMain = Extract<TUiColors, 'primary' | 'secondary' | 'accent'>;
export type TUiColorsSystemMessage = Extract<TUiColors, 'success' | 'error' | 'info' | 'warning'>;