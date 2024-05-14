import { TUiColorTypes } from './TUiColorTypes';

export type TUiColorsSystemMessage = Extract<TUiColorTypes, 'success' | 'error' | 'info' | 'warning'>;
export type TSystemMessageTypes = Extract<TUiColorTypes, 'success' | 'error' | 'info' | 'warning'>;
