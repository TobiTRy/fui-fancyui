import { TUiColors } from './TUiColors';

export type TUiColorsSystemMessage = Extract<TUiColors, 'success' | 'error' | 'info' | 'warning'>;
