import { TUiColorTypes } from './TUiColorTypes';

export type TUiColorsNotTransparent = Exclude<TUiColorTypes, 'transparent'>;
