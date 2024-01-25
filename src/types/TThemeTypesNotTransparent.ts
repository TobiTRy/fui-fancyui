import { TUiColorTypes } from './TUiColorTypes';

export type TThemeTypesNotTransparent = Exclude<TUiColorTypes, 'transparent'>;
