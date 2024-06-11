import { TUiColorTypes } from './TUiColorTypes';

export type TUiColorsMainAndAccent = Extract<TUiColorTypes, 'primary' | 'secondary' | 'accent'>;
